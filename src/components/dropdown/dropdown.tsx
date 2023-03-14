import { DropdownStyle, OptionGroupStyle, OptionStyle } from './styles';
import { SizeType } from '../../core/types/size';
import IonIcon from '../icons';
import React, { useState } from 'react';

type SelectSizes = Extract<SizeType, 'sm' | 'md'>;

export interface OptionProps {
  disabled?: boolean;
  label: string;
  selected?: boolean;
  value: string | number;
}

export interface OptionGroupProps {
  disabled?: boolean;
  options: OptionProps[];
  label: string;
}

export interface DropdownProps {
  disabled?: boolean;
  multiple?: boolean;
  options?: OptionProps[];
  optionsGroup?: OptionGroupProps[];
  selectedOptions?: OptionProps[];
  size?: SelectSizes;
  onSelectedOption: Function;
}

export interface OptionsConfig extends DropdownProps {
  indexGroup?: number;
}

const isDisabled = (
  disabledThisOption?: boolean,
  disabledAllOptions?: boolean
): boolean => {
  const result = disabledAllOptions || disabledThisOption;
  return result || false;
};
const isSelectingNotMultiple = (
  isSelecting?: boolean,
  multiple?: boolean
): boolean => {
  const result = !isSelecting && !multiple;
  return result || false;
};

const Options = ({
  disabled = false,
  options = [],
  multiple = false,
  onSelectedOption,
  indexGroup,
}: OptionsConfig) => {
  const [optionsCopy, setOptionsCopy] = useState<OptionProps[]>(options);

  const select = (index: number): void => {
    if (isDisabled(optionsCopy[index].disabled, disabled)) return;
    if (isSelectingNotMultiple(optionsCopy[index].selected, multiple)) {
      optionsCopy.forEach((option) => {
        option.selected = false;
      });
    }
    updateSelecteds(index);
  };
  const updateSelecteds = (index: number): void => {
    optionsCopy[index].selected = !optionsCopy[index].selected;
    setOptionsCopy([...optionsCopy]);
    onSelectedOption([...optionsCopy]);
  };

  return (
    <ul
      data-testid={
        indexGroup
          ? 'ion-dropdown-options-' + indexGroup
          : 'ion-dropdown-options'
      }
    >
      {options &&
        options.map((option, index) => {
          return (
            <OptionStyle
              key={index}
              data-testid={
                indexGroup
                  ? 'ion-option-' + index + '-' + indexGroup
                  : 'ion-option-' + index
              }
              disabled={disabled || option.disabled}
              selected={option.selected}
              onClick={() => select(index)}
            >
              <div className="label">{option.label}</div>
              {option.selected && (
                <>
                  <div className="icon check">
                    <IonIcon type={'check'} size={20} />
                  </div>
                  <div className="icon close">
                    <IonIcon type={'close'} size={20} />
                  </div>
                </>
              )}
            </OptionStyle>
          );
        })}
    </ul>
  );
};

const isSelected = (
  optionToCompare: OptionProps,
  optionsUpdated: OptionProps[]
): boolean => {
  return optionsUpdated.some(
    (option) => option.selected && option.value === optionToCompare.value
  );
};

const OptionsGroup = ({
  disabled = false,
  optionsGroup = [],
  onSelectedOption,
  multiple = false,
}: DropdownProps) => {
  const [groupCopy, setGroupCopy] = useState<OptionGroupProps[]>(optionsGroup);
  const handleSelect = (event: OptionProps[]) => {
    if (!multiple) {
      let safeCopy: OptionGroupProps[] = [...groupCopy];
      groupCopy.forEach((optionGroup) => {
        optionGroup.options.forEach((option) => {
          option.selected = isSelected(option, event);
        });
      });
      setGroupCopy(safeCopy);
    }

    onSelectedOption(event);
  };

  return (
    <div data-testid="ion-dropdown-options-group">
      {optionsGroup.map((optionGroup, index) => {
        return (
          <OptionGroupStyle key={index}>
            <div className="label">{optionGroup.label}</div>
            <Options
              disabled={disabled}
              options={optionGroup.options}
              multiple={multiple}
              indexGroup={index + 1}
              onSelectedOption={handleSelect}
            />
          </OptionGroupStyle>
        );
      })}
    </div>
  );
};

const IonDropdown = ({
  disabled = false,
  multiple = false,
  options = [],
  optionsGroup,
  onSelectedOption,
}: DropdownProps) => {
  const handleSelect = (event: OptionProps[]) => {
    const onlySelecteds = event.filter((option) => option.selected);
    onSelectedOption(onlySelecteds);
  };

  return (
    <DropdownStyle data-testid="ion-dropdown">
      <Options
        disabled={disabled}
        options={options}
        multiple={multiple}
        onSelectedOption={handleSelect}
      />
      <OptionsGroup
        disabled={disabled}
        optionsGroup={optionsGroup}
        multiple={multiple}
        onSelectedOption={handleSelect}
      />
    </DropdownStyle>
  );
};

export default IonDropdown;

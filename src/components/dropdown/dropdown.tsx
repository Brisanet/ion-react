import { IonEmpty } from '../empty';
import { IonSpinner } from '../spinner';
import {
  DropdownItemProps,
  IonDropdownItem,
} from './dropdownItem/dropdownItem';
import { Container, Dropdown, ItemsContainer } from './styles';

interface Option extends Omit<DropdownItemProps, 'onClick'> {
  value: string;
}

export interface DropdownProps {
  options: Option[];
  onItemSelect?: (value: Option['value']) => void;
  loading?: boolean;
  topContainer?: React.ReactNode;
  bottomContainer?: React.ReactNode;
}

export const IonDropdown = ({
  options = [],
  onItemSelect,
  loading,
  topContainer,
  bottomContainer,
}: DropdownProps) => {
  const handleItemClick = (value: Option['value']) => {
    if (onItemSelect) {
      onItemSelect(value);
    }
  };

  return (
    <Dropdown>
      {topContainer}
      <ItemsContainer>
        {loading ? (
          <Container>
            <IonSpinner />
          </Container>
        ) : options.length ? (
          options.map((option) => (
            <IonDropdownItem
              {...option}
              key={option.value}
              onClick={() => handleItemClick(option.value)}
            />
          ))
        ) : (
          <Container>
            <IonEmpty label='Não há dados' />
          </Container>
        )}
      </ItemsContainer>
      {bottomContainer}
    </Dropdown>
  );
};

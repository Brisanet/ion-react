import { useState } from 'react';
import { IonIcon, IonIconProps } from '../../icons';
import { Container, Label } from './styles';

export interface DropdownItemProps {
  label: string;
  icon?: IonIconProps['type'];
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const IonDropdownItem = ({
  label,
  selected,
  disabled,
  icon,
  onClick,
}: DropdownItemProps) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    if (!disabled) {
      setHover(true);
    }
  };

  const handleUnhover = () => {
    setHover(false);
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <Container
      $selected={selected}
      $disabled={disabled}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
      onClick={handleClick}
    >
      <Label>
        {icon && <IonIcon type={icon} size={16} />}
        <span>{label}</span>
      </Label>
      {selected && <IonIcon type={hover ? 'close' : 'check'} size={16} />}
    </Container>
  );
};

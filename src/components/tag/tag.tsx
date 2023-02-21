import React from 'react';

import { TagStyle } from './styles';
import IonIcon from '../icons/icons';

import { validateHexColor } from '../utils/validateHexColor';
import ErrorBoundary from '../error/error-boundary';
import { TagStatus } from '../../core/types/status';
import { iconType } from '../icons/svgs/icons';
import isValidLabel from '../utils/isValidLabel';

export interface IonTagProps {
  outline?: boolean;
  status?: TagStatus;
  color?: string;
  label: string;
  icon?: iconType;
}

const iconSize = 12;
const defaultColor = '#505566';
const lighteningFactor = '1A';

const newColor = (color: string) => ({
  backgroundColor: color + lighteningFactor,
  color: color,
  fill: color,
});

const getColorObject = (status?: TagStatus, color?: string) => {
  if (status) {
    return {};
  }

  if (!color || !validateHexColor(color)) {
    return { ...newColor(defaultColor) };
  }

  return {
    ...newColor(color),
  };
};

const IonTag = ({
  label,
  color,
  icon,
  status,
  outline = true,
}: IonTagProps) => {
  if (!isValidLabel(label)) {
    return <ErrorBoundary msg="Label cannot be empty" />;
  }

  return (
    <TagStyle
      data-testid="ion-tag"
      status={status}
      outline={outline}
      css={{ ...getColorObject(status, color) }}
    >
      {icon && <IonIcon type={icon} size={iconSize} />}
      <span>{label}</span>
    </TagStyle>
  );
};

export default IonTag;

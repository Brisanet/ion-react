import React from 'react';

import { IonTagProps } from '../../core/types/tag';
import { TagStyle } from './styles';
import IonIcon from '../icons/icons';

import { validateHexColor } from '../utils/validateHexColor';
import ErrorBoundary from '../error/error-boundary';

const iconSize = 12;
const defaultColor = '#505566';
const lighteningFactor = '1A';

const validateLabel = (label: string) => !label || String(label).trim() === '';

const IonTag = ({
  label,
  color,
  icon,
  status,
  outline = true,
}: IonTagProps) => {
  const isValidColor = color ? validateHexColor(color) : false;
  const newColor = status ? undefined : isValidColor ? color : defaultColor;
  const hasLabel = validateLabel(label);

  if (hasLabel) {
    return <ErrorBoundary msg="Label can't be empty" />;
  }

  return (
    <TagStyle
      data-testid="ion-tag"
      status={status}
      outline={outline}
      css={{
        backgroundColor: newColor + lighteningFactor,
        color: newColor,
        fill: newColor,
      }}
    >
      {icon && <IonIcon type={icon} size={iconSize} />}
      <span>{label}</span>
    </TagStyle>
  );
};

export default IonTag;

import React, { useState, useEffect } from 'react';
import { BadgeStyles } from './styles';

type StitchesBadgeProps = React.ComponentProps<typeof BadgeStyles>;

export type LabelType = string | number;

export type BadgeType = 'primary' | 'secondary' | 'neutral' | 'negative';

export type BadgeProps = {
  label: LabelType;
  type?: BadgeType;
} & StitchesBadgeProps;

export const IonBadge = ({ label, type = 'primary' }: BadgeProps) => {
  const [badgeValue, setBadgeValue] = useState<LabelType>(0);

  const formatLabel = (badgeLabel: LabelType): LabelType => {
    const parsedToNumber = Number(badgeLabel);
    const maxValue = 99;

    if (isNaN(parsedToNumber)) {
      return badgeLabel;
    }

    return parsedToNumber > maxValue
      ? `${maxValue}+`
      : parsedToNumber.toString();
  };

  useEffect(() => {
    setBadgeValue(formatLabel(label));
  }, [label]);

  return (
    <BadgeStyles type={type} data-testid="ion-badge">
      {badgeValue}
    </BadgeStyles>
  );
};

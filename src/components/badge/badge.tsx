import React, { useState, useEffect } from 'react';
import { BadgeStyles } from './styles';

type StitchesBadgeProps = React.ComponentProps<typeof BadgeStyles>;

type LabelType = string | number;

export type BadgeProps = {
  label: LabelType;
  type?: string;
} & StitchesBadgeProps;

const IonBadge = ({ label, type = 'primary' }: BadgeProps) => {
  const [badgeValue, setBadgeValue] = useState<LabelType>(0);

  function formatLabel(badgeLabel: LabelType): LabelType {
    const parsedToNumber = Number(badgeLabel);
    const maxValue = 99;

    if (isNaN(parsedToNumber)) {
      return badgeLabel;
    }

    return parsedToNumber > maxValue
      ? `${maxValue}+`
      : parsedToNumber.toString();
  }

  useEffect(() => {
    setBadgeValue(formatLabel(label));
  }, [label]);

  return <BadgeStyles type={type}>{badgeValue}</BadgeStyles>;
};

export default IonBadge;

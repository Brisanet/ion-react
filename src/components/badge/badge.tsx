import { useEffect, useState } from 'react';
import { Badge } from './styles';

export type LabelType = string | number;

export type BadgeType = 'primary' | 'secondary' | 'neutral' | 'danger';

export type BadgeProps = {
  label: LabelType;
  type?: BadgeType;
};

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
    <Badge $type={type} data-testid='ion-badge'>
      {badgeValue}
    </Badge>
  );
};

export type IonTypographyStyle = 'normal' | 'italic';

export type IonTypographyColorScheme =
  | 'primary'
  | 'secondary'
  | 'dark-primary'
  | 'dark-secondary';

interface BaseIonTypography {
  label: string;
  colorScheme?: IonTypographyColorScheme;
}

export type IonTypographySize = 'small' | 'medium' | 'normal';
export type IonTypographyWeight = 'normal' | 'medium' | 'bold';

type IonBodySize<TType> = TType extends 'medium' ? never : TType;
export type IonHeadingWeight<TType> = TType extends 'normal' ? never : TType;

export interface IonBodyInterface extends BaseIonTypography {
  size?: IonBodySize<IonTypographySize>;
  weight?: IonTypographyWeight;
  style?: IonTypographyStyle;
}

export interface IonHeadingInterface extends BaseIonTypography {
  type: 'h1' | 'h2' | 'h3' | 'h4';
  size?: IonTypographySize;
  weight?: IonHeadingWeight<IonTypographyWeight>;
}

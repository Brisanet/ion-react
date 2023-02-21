type MyPick<T, S extends keyof T> = {
  [key in S]: T[key];
};

interface IonTyphographySize {
  small: 'small';
  medium: 'medium';
  normal: 'normal';
}

interface IonTyphographyWeight {
  normal: 'normal';
  medium: 'medium';
  bold: 'bold';
}
type IonTyphographyStyle = 'normal' | 'italic';

type IonTyphographyColorScheme =
  | 'primary'
  | 'secondary'
  | 'dark-primary'
  | 'dark-secondary';

interface BaseIonTyphography {
  label: string;
  colorScheme?: IonTyphographyColorScheme;
}

type BodySizes = 'small' | 'medium' | 'normal';
type RemoveMedium<TType> = TType extends 'medium' ? never : TType;

export interface IonBodyInterface extends BaseIonTyphography {
  size?: RemoveMedium<BodySizes>;
  weight?: keyof MyPick<IonTyphographyWeight, 'normal' | 'medium' | 'bold'>;
  style?: IonTyphographyStyle;
}

export interface IonHeadingInterface extends BaseIonTyphography {
  type: 'h1' | 'h2' | 'h3' | 'h4';
  size?: keyof MyPick<IonTyphographySize, 'normal' | 'small' | 'medium'>;
  weight?: keyof MyPick<IonTyphographyWeight, 'medium' | 'bold'>;
}

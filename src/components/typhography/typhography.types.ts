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

type IonTyphographySize = 'small' | 'medium' | 'normal';
type IonTyphographyWeight = 'normal' | 'medium' | 'bold';

type IonBodySize<TType> = TType extends 'medium' ? never : TType;
type IonHeadingWeight<TType> = TType extends 'normal' ? never : TType;

export interface IonBodyInterface extends BaseIonTyphography {
  size?: IonBodySize<IonTyphographySize>;
  weight?: IonTyphographyWeight;
  style?: IonTyphographyStyle;
}

export interface IonHeadingInterface extends BaseIonTyphography {
  type: 'h1' | 'h2' | 'h3' | 'h4';
  size?: IonTyphographySize;
  weight?: IonHeadingWeight<IonTyphographyWeight>;
}

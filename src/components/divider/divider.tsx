import { Divider, DividerContainer } from './styled';

export type DividerDirection = 'horizontal' | 'vertical';
export type DividerType = 'solid' | 'dashed';

export type DividerProps = {
  label?: string;
  direction?: DividerDirection;
  type?: DividerType;
};

const defaultDirection = 'horizontal';
const defaultType = 'solid';

export const IonDivider = ({
  label,
  direction = defaultDirection,
  type = defaultType,
}: DividerProps) => {
  return label ? (
    <DividerContainer>
      <Divider $direction={defaultDirection} $type={type} />
      <span>{label}</span>
      <Divider $direction={defaultDirection} $type={type} />
    </DividerContainer>
  ) : (
    <Divider $direction={direction} $type={type} />
  );
};

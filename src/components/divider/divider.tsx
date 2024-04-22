import { Divider, DividerContainer } from './styled';

export type DividerDirection = 'horizontal' | 'vertical';
export type DividerType = 'solid' | 'dashed';

export type DividerProps = {
  label?: string;
  direction?: DividerDirection;
  type?: DividerType;
};

export const IonDivider = ({
  label,
  direction = 'horizontal',
  type = 'solid',
}: DividerProps) => {
  return label ? (
    <DividerContainer>
      <Divider $direction='horizontal' $type={type} />
      <span>{label}</span>
      <Divider $direction='horizontal' $type={type} />
    </DividerContainer>
  ) : (
    <Divider $direction={direction} $type={type} />
  );
};

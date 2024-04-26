import { Skeleton } from './styles';

export interface IonSkeletonProps {
  width?: string | number;
  height?: string | number;
  radius?: string | number;
}

const convertToStyle = (value: string | number) => {
  return typeof value === 'number' ? `${value}px` : value;
};

export const IonSkeleton = ({
  height = 100,
  radius = 0,
  width = 100,
}: IonSkeletonProps) => {
  const widthStyle = convertToStyle(width);
  const heightStyle = convertToStyle(height);
  const radiusStyle = convertToStyle(radius);

  return (
    <Skeleton
      style={{
        width: widthStyle,
        height: heightStyle,
        borderRadius: radiusStyle,
      }}
    ></Skeleton>
  );
};

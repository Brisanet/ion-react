import { Skeleton } from './styles';

export interface IonSkeletonProps {
  width?: string | number;
  height?: string | number;
  radius?: string | number;
}

export const IonSkeleton = ({
  height = 100,
  radius = 0,
  width = 100,
}: IonSkeletonProps) => {
  return <Skeleton $width={width} $height={height} $radius={radius}></Skeleton>;
};

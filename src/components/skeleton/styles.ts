import { css, keyframes, styled } from 'styled-components';

interface SkeletonStyleProps {
  $width: string | number;
  $height: string | number;
  $radius: string | number;
}

const convertToStyle = (value: string | number) => {
  return typeof value === 'number' ? `${value}px` : value;
};

const shimmer = keyframes`
  75% {
    transform: translateX(100%);
  }
  100% {
    opacity: 0;
  }
`;

export const Skeleton = styled.span<SkeletonStyleProps>`
  ${({ theme, $width, $height, $radius }) => css`
    display: block;
    position: relative;
    overflow: hidden;
    background-color: ${theme.colors.neutral[1]};
    width: ${convertToStyle($width)};
    height: ${convertToStyle($height)};
    border-radius: ${convertToStyle($radius)};

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      transform: translateX(-100%);
      background: linear-gradient(
        90deg,
        rgba(246, 247, 248, 0.2) 0%,
        rgba(155, 160, 177, 0.2) 48.52%,
        rgba(246, 247, 248, 0.2) 100%
      );
      animation: ${shimmer} 1.5s infinite ease-in-out;
    }
  `}
`;

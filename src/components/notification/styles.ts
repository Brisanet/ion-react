import { css, styled } from 'styled-components';

export const Notification = styled.div`
  ${({ theme }) => css`
    width: 360px;
    padding: 12px 16px;
    border-radius: 8px;
    background: ${theme.colors.transparency.white[90]};
    ${theme.utils.shadow.doubleShadow};
    ${theme.utils.flex.spaceBetween(8)}
    align-items: flex-start;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.utils.flex.start(8)}
    align-items: flex-start;
  `}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    ${theme.font.size[16]}
    font-weight: 600;
    color: ${theme.colors.neutral[8]};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    ${theme.font.size[14]}
    font-weight: 400;
    color: ${theme.colors.neutral[7]};
  `}
`;

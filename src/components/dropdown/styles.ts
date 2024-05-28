import { css, styled } from 'styled-components';

export const columnWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Dropdown = styled.div`
  ${({ theme }) => css`
    width: 182px;
    max-height: 316px;
    padding: 12px 8px;
    border-radius: 8px;
    background: ${theme.colors.neutral[1]};
    ${theme.font.size[14]}
    font-weight: 600;
    color: ${theme.colors.neutral[7]};
    ${columnWrapper}
    ${theme.utils.shadow.doubleShadow};

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: ${theme.colors.neutral[1]};
    }

    ::-webkit-scrollbar-thumb,
    ::-webkit-scrollbar-thumb:active,
    ::-webkit-scrollbar-thumb:hover {
      border-radius: 10px;
      background: ${theme.colors.neutral[6]};
    }
  `}
`;

export const ItemsContainer = styled.div`
  max-height: 212px;
  overflow-y: auto;
  ${columnWrapper}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.utils.flex.center()}
    padding: 16px 0;
  `}
`;

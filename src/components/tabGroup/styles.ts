import { css, styled } from 'styled-components';
import { TabAlign } from './tabGroup';

type TabGroupStylesProps = {
  align: TabAlign;
};

export const TabGroup = styled.div<TabGroupStylesProps>`
  ${({ align }) =>
    css`
      display: flex;
      flex-direction: ${align === 'horizontal' ? 'row' : 'column'};
      width: max-content;
    `}
`;

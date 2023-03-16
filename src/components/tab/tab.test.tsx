import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import IonTab from './tab';
import { TabProps } from './tab';

const clickEvent = jest.fn();
const defaultTab: TabProps = {
  label: 'Tab',
  handleClick: clickEvent,
};

function sut(props: TabProps = defaultTab) {
  render(<IonTab {...props} />);
}

const getTab = () => {
  return screen.getByTestId('ion-tab');
};

const getBadge = () => {
  return screen.getByTestId('ion-badge');
};

describe('Tab', () => {
  describe('Default', () => {
    it('should render the Tab component', () => {
      const label = 'Historico';
      sut({ ...defaultTab, label: label });
      expect(screen.getByText(label)).toBeInTheDocument();
    });

    it('should execute user event when the Tab is clicked', async () => {
      sut();
      await userEvent.click(getTab());
      expect(clickEvent).toHaveBeenCalled();
    });

    it('should be disabled', () => {
      sut({ ...defaultTab, disabled: true });
      expect(getTab()).toHaveAttribute('disabled');
    });

    it('should render tab enabled by default', async () => {
      sut();
      expect(getTab()).toBeEnabled();
    });

    it('should not call handeClick event when tab is disabled', async () => {
      sut({ ...defaultTab, disabled: true });
      await userEvent.click(getTab());
      expect(clickEvent).toBeCalledTimes(0);
    });

    afterEach(() => {
      clickEvent.mockClear();
    });
  });

  describe('Custom Props', () => {
    const tabSizes: Array<TabProps['size']> = ['sm', 'md', 'lg'];
    it.each(tabSizes)('should render Tab with %s size', (size) => {
      sut({ ...defaultTab, size: size });
      const { className } = getTab();
      expect(className).toContain(`size-${size}`);
    });

    const tabDirections: Array<TabProps['direction']> = [
      'top',
      'left',
      'bottom',
      'right',
    ];
    it.each(tabDirections)('should render Tab with %s border', (direction) => {
      sut({ ...defaultTab, direction: direction });
      const { className } = getTab();
      expect(className).toContain(`direction-${direction}`);
    });
  });

  describe('With Icon', () => {
    const iconName = 'pencil';

    it('should render pencil icon', () => {
      sut({ ...defaultTab, icon: iconName });
      expect(screen.getByTestId(`ion-icon-${iconName}`)).toBeInTheDocument();
    });

    it('should render sm icon size by default', () => {
      const sm = '16';
      sut({ ...defaultTab, icon: iconName });
      const Tab = screen.getByTestId(`ion-icon-${iconName}`);
      expect(Tab).toHaveAttribute('height', sm);
    });

    it('should render icon md when tab is md', () => {
      const mdSize = '20';
      const mdIconName = 'alert';
      sut({ ...defaultTab, name: 'tab-icon', size: 'md', icon: mdIconName });
      expect(screen.getByTestId(`ion-icon-${mdIconName}`)).toHaveAttribute(
        'height',
        mdSize
      );
    });
  });

  describe('With Badge', () => {
    it('should render badge', async () => {
      sut({ ...defaultTab, badge: { label: 2 } });
      expect(getBadge()).toBeInTheDocument();
    });

    it('should not render badge when is not informed', async () => {
      sut();
      expect(screen.queryByTestId('ion-badge')).toBeNull();
    });

    it('should render badge with string label', async () => {
      const label = 'Skywalker';
      sut({ ...defaultTab, badge: { label: label } });
      expect(getBadge().textContent).toBe(label);
    });

    it('should render 99+ when value is bigger than 100', async () => {
      const label = 190;
      sut({ ...defaultTab, badge: { label: label } });
      expect(getBadge().textContent).toBe('99+');
    });
  });
});

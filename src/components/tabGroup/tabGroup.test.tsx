import theme from '@ion/styles/theme';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconType } from '../icons/svgs/icons';
import { TabProps } from '../tab/tab';
import { renderWithTheme } from '../utils/test-utils';
import { IonTabGroup, IonTabGroupProps, TabGroupSizes } from './tabGroup';

const mockClick = jest.fn();
const mockProps: IonTabGroupProps = {
  tabs: [
    {
      label: 'Tab 1',
      selected: true,
    },
    {
      label: 'Tab 2',
    },
    {
      label: 'Tab 3',
    },
  ],
  handleSelectedTab: mockClick,
};
const sut = (props: IonTabGroupProps = mockProps) => {
  renderWithTheme(<IonTabGroup {...props} />);
};

const getTabGroup = () => screen.getByTestId('ion-tabGroup');
const getTabs = () => screen.getAllByTestId('ion-tab');
const getBadge = () => screen.getAllByTestId('ion-badge');

describe('IonTabGroup', () => {
  describe('Default', () => {
    it('should render TabGroup in horizontal align by default', async () => {
      sut();
      expect(getTabGroup()).toHaveStyleRule('flex-direction', 'row');
    });

    it('should render tabs with border bottom by default', async () => {
      sut();
      getTabs().forEach((tab: HTMLElement) => {
        expect(tab).toHaveStyleRule('border-bottom', '2px solid');
      });
    });

    it('should render TabGroup in vertical align by default', async () => {
      sut({ ...mockProps, align: 'vertical' });
      expect(getTabGroup()).toHaveStyleRule('flex-direction', 'column');
    });

    it('should render the correct number of tabs', () => {
      sut();
      expect(getTabs()).toHaveLength(3);
    });

    it('should select a Tab when it is clicked', async () => {
      sut();
      const secondTab = getTabs()[1];
      await userEvent.click(secondTab);
      expect(secondTab).toHaveStyleRule('color', theme.colors.main.primary);
    });

    it('should contain first Tab selected by default', async () => {
      sut();
      const firstTab = getTabs()[0];
      expect(firstTab).toHaveStyleRule('color', theme.colors.main.primary);
    });
  });

  describe('Border', () => {
    it('should contain border right when direction is vertical', async () => {
      sut({ ...mockProps, align: 'vertical' });
      getTabs().forEach((tab: HTMLElement) => {
        expect(tab).toHaveStyleRule('border-right', '2px solid');
      });
    });

    it('should contain border left when border and align are defined', async () => {
      sut({ ...mockProps, align: 'vertical', borderDirection: 'left' });
      getTabs().forEach((tab: HTMLElement) => {
        expect(tab).toHaveStyleRule('border-left', '2px solid');
      });
    });

    it('should contain border top when border and align are defined', async () => {
      sut({ ...mockProps, align: 'horizontal', borderDirection: 'top' });
      getTabs().forEach((tab: HTMLElement) => {
        expect(tab).toHaveStyleRule('border-top', '2px solid');
      });
    });

    it('should not contain border top when align is vertical', async () => {
      sut({ ...mockProps, align: 'vertical', borderDirection: 'top' });
      getTabs().forEach((tab: HTMLElement) => {
        expect(tab).not.toHaveStyleRule('border-top', '2px solid');
      });
    });

    it('should not contain border right when align is horizontal', async () => {
      sut({ ...mockProps, align: 'horizontal', borderDirection: 'right' });
      getTabs().forEach((tab: HTMLElement) => {
        expect(tab).not.toHaveStyleRule('border-right', '2px solid');
      });
    });
  });

  describe('Sizes', () => {
    it.each(['sm', 'md', 'lg'])(
      'should render tabs with %s size',
      async (size: string) => {
        sut({
          ...mockProps,
          size: size as TabGroupSizes,
        });

        getTabs().forEach((tab: HTMLElement) => {
          expect(tab).toMatchSnapshot();
        });
      }
    );

    it('should render tabs with sm size by default', async () => {
      sut();
      getTabs().forEach((tab: HTMLElement) => {
        expect(tab).toMatchSnapshot();
      });
    });
  });

  describe('With icon', () => {
    const icons: IconType[] = ['pencil', 'close', 'access'];
    const tabsWithIcons: TabProps[] = [
      {
        label: 'Tab 1',
        icon: icons[0],
      },
      {
        label: 'Tab 2',
        icon: icons[1],
      },
      {
        label: 'Tab 2',
        icon: icons[2],
      },
    ];

    it('should render tabs with icons', async () => {
      sut({
        ...mockProps,
        tabs: tabsWithIcons,
      });

      icons.forEach((icon: IconType) => {
        expect(screen.getByTestId(`ion-icon-${icon}`)).toBeInTheDocument();
      });
    });
  });

  describe('With Badge', () => {
    const tabsWithIconsAndBadge: TabProps[] = [
      {
        label: 'Tab 1',
        badge: { label: 100 },
        icon: 'calendar',
      },
      {
        label: 'Tab 2',
        badge: { label: 2 },
        icon: 'calendar',
      },
      {
        label: 'Tab 3',
        badge: { label: 'expirado' },
        icon: 'access',
      },
      {
        label: 'Tab 4',
        icon: 'alert',
      },
    ];

    beforeEach(() => {
      sut({ ...mockProps, tabs: tabsWithIconsAndBadge });
    });

    it('should render a tab with badge', async () => {
      expect(getBadge()[0]).toBeTruthy();
    });

    it('should render a tab with 99+ when value bigger then 99', async () => {
      expect(getBadge()[0].textContent).toBe('99+');
    });

    it('should render a tab with value when less than 99', async () => {
      expect(getBadge()[1].textContent).toBe(
        tabsWithIconsAndBadge[1].badge?.label.toString()
      );
    });

    it('should render a tab with string badge', async () => {
      expect(getBadge()[2].textContent).toBe(
        tabsWithIconsAndBadge[2].badge?.label
      );
    });
  });
});

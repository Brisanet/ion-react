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

function sut(props: TabProps = defaultTab): HTMLElement {
  render(<IonTab {...props} />);
  return screen.getByRole('button', { name: props.label });
}

describe('Tab', () => {
  it('should render the Tab component', () => {
    const label = 'Historico';
    sut({ ...defaultTab, label: label });
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('should execute user event when the Tab is clicked', async () => {
    await userEvent.click(sut({ ...defaultTab }));
    expect(clickEvent).toHaveBeenCalled();
  });

  it('should be contain the "selected-true" class when clicked without handleClick prop', async () => {
    sut({ ...defaultTab, handleClick: undefined });
    const myTab = screen.getByText('Tab');
    await userEvent.click(myTab);

    expect(myTab.className).toContain('selected-true');
  });

  it('should be disabled', () => {
    expect(sut({ ...defaultTab, disabled: true })).toHaveAttribute('disabled');
  });

  it('should render tab without disabled by default', async () => {
    expect(sut({ ...defaultTab })).toBeEnabled();
  });

  afterEach(() => {
    clickEvent.mockClear();
  });
});

describe('Tab sizes', () => {
  const tabSizes: Array<TabProps['size']> = ['sm', 'md', 'lg'];

  it.each(tabSizes)('should render Tab with %s size', (size) => {
    const { className } = sut({ ...defaultTab, size: size });
    expect(className).toContain(`size-${size}`);
  });
});

describe('Tab border direction', () => {
  const tabDirections: Array<TabProps['direction']> = [
    'top',
    'left',
    'bottom',
    'right',
  ];

  it.each(tabDirections)('should render Tab with %s border', (direction) => {
    const { className } = sut({ ...defaultTab, direction: direction });
    expect(className).toContain(`direction-${direction}`);
  });
});

import { render, screen } from '@testing-library/react';
import IonChip, { ChipProps } from './chip';
import React from 'react';
import userEvent from '@testing-library/user-event';

const clickEvent = jest.fn();
const defaultChip: ChipProps = {
  label: 'Ragnarok!',
  handleClick: clickEvent,
};

const sut = (props: ChipProps = defaultChip) => {
  render(<IonChip {...props} />);
};

describe('IonChip', () => {
  beforeEach(() => {
    sut();
  });

  test('should render chip', () => {
    expect(screen.queryAllByTestId('ion-chip')).toHaveLength(1);
  });

  test('should render chip with correct value', () => {
    expect(screen.queryAllByText(defaultChip.label)).toHaveLength(1);
  });

  test('should render chip with correct value', async () => {
    await userEvent.click(screen.getByTestId('ion-chip'));
    expect(clickEvent).toBeCalled();
  });

  // test('should render chip not disabled by default', () => {
  //   expect(screen.queryAllByTestId('ion-chip')).tohaveat;
  // });
});

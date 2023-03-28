import React from 'react';
import { render } from '@testing-library/react';
import { BreadcrumbProps, IonBreadcrumb } from './breadcrumb';

const mockClick = jest.fn();
const defaultBreadcrumb: BreadcrumbProps = {
  breadcrumb: [
    {
      label: 'Inicio',
      link: '/home',
    },
    {
      label: 'Recursos',
      link: '/recursos',
    },
  ],
  selectedBreadcrumb: mockClick,
};

function sut(props: BreadcrumbProps = defaultBreadcrumb) {
  return render(<IonBreadcrumb {...props} />);
}

describe('Breadcrumb', () => {
  it('should render the Breadcrumb component', () => {
    const { container } = sut();
    expect(container.querySelector('nav')).toBeInTheDocument();
  });

  it('should render a breadcrumb with a label', () => {
    const { container } = sut();
    const links = container.querySelectorAll('a');
    expect(links).toHaveLength(2);
    expect(links[0].textContent).toEqual('Inicio');
  });

  it('should render a breadcrumb with no links', () => {
    const { container } = sut({ ...defaultBreadcrumb, breadcrumb: [] });
    const links = container.querySelectorAll('a');
    expect(links).toHaveLength(0);
  });
});

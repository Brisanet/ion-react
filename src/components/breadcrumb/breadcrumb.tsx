import React, { useCallback } from 'react';
import { BreadcrumbStyles } from './styles';
import { Icon } from '..';

type StitchesBreadcrumbProps = React.ComponentProps<typeof BreadcrumbStyles>;

export type BreadcrumbItem = {
  label: string;
  link: string;
};

export type BreadcrumbProps = {
  breadcrumb: Array<BreadcrumbItem>;
  selectedBreadcrumb: (breadcrumbItem: BreadcrumbItem) => void;
} & StitchesBreadcrumbProps;

const IonBreadcrumb = ({ breadcrumb, selectedBreadcrumb }: BreadcrumbProps) => {
  const handleBreadcrumbClick = useCallback(
    (breadcrumbItem: BreadcrumbItem) => {
      if (breadcrumbItem !== breadcrumb[breadcrumb.length - 1]) {
        selectedBreadcrumb(breadcrumbItem);
      }
    },
    [breadcrumb, selectedBreadcrumb]
  );

  return (
    <BreadcrumbStyles>
      <ol role="navigation">
        {breadcrumb.map((breadcrumbItem, index) => {
          return (
            <li key={index}>
              <a onClick={() => handleBreadcrumbClick(breadcrumbItem)}>
                {breadcrumbItem.label}
              </a>
              <Icon type="right2" size={16} />
            </li>
          );
        })}
      </ol>
    </BreadcrumbStyles>
  );
};

export default IonBreadcrumb;

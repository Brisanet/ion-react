import React from 'react';
import { BreadcrumbStyles } from './styles';

type StitchesBreadcrumbProps = React.ComponentProps<typeof BreadcrumbStyles>;

export type BreadcrumbItem = {
  label: string;
  link: string;
};

export type BreadcrumbProps = {
  breadcrumb: Array<BreadcrumbItem>;
} & StitchesBreadcrumbProps;

const IonBreadcrumb = ({ breadcrumb }: BreadcrumbProps) => {
  return (
    <BreadcrumbStyles>
      <ol>
        {breadcrumb.map((breadcrumbItem, index) => {
          return (
            <li>
              <a href={breadcrumbItem.link} key={index}>
                {breadcrumbItem.label}
              </a>
            </li>
          );
        })}
      </ol>
    </BreadcrumbStyles>
  );
};

export default IonBreadcrumb;

import { ReactNode } from 'react';
import { _Link } from '../../link/entities/_Link';

export type _Footer = {
  address: ReactNode;
  email: _Link;
  anchorsHeading: ReactNode;
  anchors: _Link[];
  legalHeading: ReactNode;
  legalLinks: _Link[];
  socials: {
    social: string | null;
    path: string | null;
  }[];
};

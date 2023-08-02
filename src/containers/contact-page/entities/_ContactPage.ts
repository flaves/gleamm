import { ReactNode } from 'react';

export type _ContactPage = {
  form: _ContactPageForm;
  informations: _ContactPageInformations;
};

export type _ContactPageForm = {
  heading: ReactNode;
  successHeading: ReactNode;
  successText: ReactNode;
};

export type _ContactPageInformations = {
  emailLabel: ReactNode;
  email: ReactNode;
  phoneNumberLabel: ReactNode;
  phoneNumber: ReactNode;
  addressLabel: ReactNode;
  address: ReactNode;
};

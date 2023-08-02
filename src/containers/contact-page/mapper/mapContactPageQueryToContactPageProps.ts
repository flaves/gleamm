import { _ContactPage } from '../entities/_ContactPage';
import { toReactNode } from '../../../components/richtext/mapper/toReactNode';

export const mapContactPageQueryToContactPageProps = (
  contactPage: Queries.PrismicContactPage,
): _ContactPage => {
  if (
    contactPage?.data?.heading?.richText?.length === 0 ||
    !contactPage?.data?.contact_success_heading?.text ||
    !contactPage?.data?.contact_success_text?.text ||
    !contactPage?.data?.email_label?.text ||
    !contactPage?.data?.email?.text ||
    !contactPage?.data?.phone_number_label?.text ||
    !contactPage?.data?.phone_number?.text ||
    !contactPage?.data?.address_label?.text ||
    contactPage?.data?.address?.richText?.length === 0
  ) {
    throw new Error(`Missing contact page data`);
  }

  return {
    form: {
      heading: toReactNode(contactPage?.data?.heading?.richText),
      successHeading: contactPage?.data?.contact_success_heading?.text,
      successText: contactPage?.data?.contact_success_text?.text,
    },
    informations: {
      emailLabel: contactPage?.data?.email_label?.text,
      email: contactPage?.data?.email?.text,
      phoneNumberLabel: contactPage?.data?.phone_number_label?.text,
      phoneNumber: contactPage?.data?.phone_number?.text,
      addressLabel: contactPage?.data?.address_label?.text,
      address: toReactNode(contactPage?.data?.address?.richText, true, {
        variant: `contactLink`,
      }),
    },
  };
};

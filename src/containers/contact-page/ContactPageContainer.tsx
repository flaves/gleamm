import React from 'react';
import { DefaultProps } from '../../types/DefaultProps';
import { factory } from '../../theme/factory';
import { Container } from '../../components/container/Container';
import { mapContactPageQueryToContactPageProps } from './mapper/mapContactPageQueryToContactPageProps';
import {
  ContactPageFormSection,
  ContactPageFormSectionData,
} from './sections/form/ContactPageForm';
import {
  ContactPageInformationsSection,
  ContactPageInformationsSectionData,
} from './sections/informations/ContactPageInformations';

type ContactPageContainerData = {
  contactPage: Queries.PrismicContactPage;
};

type Props = DefaultProps<ContactPageContainerData>;

export function ContactPageContainer(props: Props) {
  const { data } = props;
  const contactPageData = mapContactPageQueryToContactPageProps(
    data.contactPage,
  );

  const contactPageFormSectionData: ContactPageFormSectionData = {
    heading: contactPageData.form.heading,
    successHeading: contactPageData.form.successHeading,
    successText: contactPageData.form.successText,
  };

  const contactPageInformationsSectionData: ContactPageInformationsSectionData =
    {
      emailLabel: contactPageData.informations.emailLabel,
      email: contactPageData.informations.email,
      phoneNumberLabel: contactPageData.informations.phoneNumberLabel,
      phoneNumber: contactPageData.informations.phoneNumber,
      addressLabel: contactPageData.informations.addressLabel,
      address: contactPageData.informations.address,
    };

  return (
    <factory.section py={[10, null, 20]}>
      <Container>
        <factory.div
          display="flex"
          flexDirection={[`column`, null, null, `row`]}
        >
          <ContactPageFormSection data={contactPageFormSectionData} />
          <ContactPageInformationsSection
            data={contactPageInformationsSectionData}
          />
        </factory.div>
      </Container>
    </factory.section>
  );
}

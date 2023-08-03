import React from 'react';
import { graphql } from 'gatsby';

import { _ContactPageInformations } from '../../entities/_ContactPage';
import { DefaultProps } from '../../../../types/DefaultProps';
import { factory } from '../../../../theme/factory';
import { Text } from '../../../../components/text/Text';

export type ContactPageInformationsSectionData = _ContactPageInformations;

type Props = DefaultProps<ContactPageInformationsSectionData>;

export function ContactPageInformationsSection(props: Props) {
  const { data } = props;

  return (
    <factory.div
      width={[`100%`, null, null, `34%`]}
      pt={5}
      pl={[0, null, null, 5]}
    >
      <factory.div mb={10}>
        <factory.div mb={1}>
          <Text variant="contactLabel">{data.emailLabel}</Text>
        </factory.div>
        <factory.div>
          <Text variant="contactLink">{data.email}</Text>
        </factory.div>
      </factory.div>
      <factory.div mb={10}>
        <factory.div mb={1}>
          <Text variant="contactLabel">{data.phoneNumberLabel}</Text>
        </factory.div>
        <factory.div>
          <Text variant="contactLink">{data.phoneNumber}</Text>
        </factory.div>
      </factory.div>
      <factory.div mb={10}>
        <factory.div mb={1}>
          <Text variant="contactLabel">{data.addressLabel}</Text>
        </factory.div>
        <factory.div>{data.address}</factory.div>
      </factory.div>
    </factory.div>
  );
}

export const contactPageInformationsSectionFragment = graphql`
  fragment ContactPageInformationsSectionFragment on PrismicContactPageData {
    email_label {
      text
    }
    email {
      text
    }
    phone_number_label {
      text
    }
    phone_number {
      text
    }
    address_label {
      text
    }
    address {
      richText
    }
  }
`;

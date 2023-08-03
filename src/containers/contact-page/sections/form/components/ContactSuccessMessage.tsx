import React, { ReactNode } from 'react';
import { factory } from '../../../../../theme/factory';
import { Icon } from '../../../../../components/icon/Icon';
import { Heading } from '../../../../../components/heading/Heading';
import { DefaultProps } from '../../../../../types/DefaultProps';
import { Text } from '../../../../../components/text/Text';

export type ContactSuccessMessageData = {
  heading: ReactNode;
  text: ReactNode;
};

type Props = DefaultProps<ContactSuccessMessageData>;

export function ContactSuccessMessage(props: Props) {
  const { data } = props;
  return (
    <factory.div
      display="flex"
      px={10}
      py={5}
      borderRadius={20}
      borderWidth={1}
      borderColor="gray.50"
      maxWidth={720}
    >
      <factory.div>
        <factory.div
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="56px"
          height="56px"
          bg="brand.primary.lightest"
          borderRadius={12}
          borderWidth={1.5}
          borderColor="brand.primary.darkest"
          mr={5}
        >
          <Icon icon="circle-check" color="#057894" size="xl" />
        </factory.div>
      </factory.div>
      <factory.div>
        <factory.div mb={1}>
          <Heading variant="panel">{data.heading}</Heading>
        </factory.div>
        <factory.div>
          <Text>{data.text}</Text>
        </factory.div>
      </factory.div>
    </factory.div>
  );
}

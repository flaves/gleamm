import React from 'react';
import { factory } from '../../../../../theme/factory';
import { _Question } from '../../../entities/_HomePage';
import { Icon } from '../../../../../components/icon/Icon';
import { Heading } from '../../../../../components/heading/Heading';
import { Text } from '../../../../../components/text/Text';

type Props = _Question & {};

export function Question(props: Props) {
  const { heading, description, icon } = props;
  console.log(icon, `icon`);
  return (
    <factory.div display="flex" gap={6}>
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
        >
          <Icon icon="tooth" color="#057894" size="xl" />
        </factory.div>
      </factory.div>
      <factory.div>
        <factory.div mb={3}>
          <Heading variant="faq">{heading}</Heading>
        </factory.div>
        <factory.div>
          <Text>{description}</Text>
        </factory.div>
      </factory.div>
    </factory.div>
  );
}

import React from 'react';
import { factory } from '../../../../../theme/factory';
import { _Question } from '../../../entities/_HomePage';
import { Icon } from '../../../../../components/icon/Icon';
import { Heading } from '../../../../../components/heading/Heading';
import { Text } from '../../../../../components/text/Text';

type Props = _Question & {};

export function Question(props: Props) {
  const { heading, description, icon: _icon } = props;

  return (
    <factory.div
      display="flex"
      flexDirection={[`column`, `row`]}
      alignItems={[`center`, `flex-start`]}
      gap={6}
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
        >
          <Icon icon="tooth" color="#057894" size="xl" />
        </factory.div>
      </factory.div>
      <factory.div>
        <factory.div mb={3} textAlign={[`center`, `left`]}>
          <Heading variant="faq">{heading}</Heading>
        </factory.div>
        <factory.div textAlign={[`center`, `left`]}>
          <Text>{description}</Text>
        </factory.div>
      </factory.div>
    </factory.div>
  );
}

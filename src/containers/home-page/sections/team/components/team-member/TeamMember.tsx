import React from 'react';
import { _TeamMember } from '../../../../entities/_HomePage';

import { factory } from '../../../../../../theme/factory';
import { Image } from '../../../../../../components/image/Image';
import { Text } from '../../../../../../components/text/Text';

type Props = {
  member: _TeamMember;
};

export function TeamMember(props: Props) {
  const { member } = props;
  return (
    <factory.div textAlign="center">
      <factory.div mb={3}>
        <Image image={member.image} />
      </factory.div>
      <factory.div mb={1}>
        <Text variant="teamMember" color="text.primary">
          {member.name}
        </Text>
      </factory.div>
      <factory.div>
        <Text variant="reviewBody" color="brand.primary.base">
          {member.job}
        </Text>
      </factory.div>
    </factory.div>
  );
}

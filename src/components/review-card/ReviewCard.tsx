import React, { ReactNode } from 'react';
import { factory } from '../../theme/factory';
import { Badge } from '../badge/Badge';
import { Heading } from '../heading/Heading';
import { Star } from '../star/Star';
import { Text } from '../text/Text';

type Props = {
  badge: ReactNode;
  heading: ReactNode;
  number: number;
  description: ReactNode;
  author: ReactNode;
};

export function ReviewCard(props: Props) {
  const { badge, heading, number, description, author } = props;
  return (
    <factory.div
      width={384}
      py={8}
      px={10}
      boxShadow="0px 0px 40px 0px rgba(0, 0, 0, 0.20)"
      backgroundColor="rgba(255, 255, 255, 0.25)"
      backdropFilter="blur(10px)"
      borderRadius={20}
    >
      <factory.div mb={3}>
        <Badge icon="shield">{badge}</Badge>
      </factory.div>
      <factory.div mb={3}>
        <Heading variant="review">
          {heading} ({number}
          {` `}
          <Star
            variant="rating"
            additionalStyle={{ display: `inline-block` }}
          />
          )
        </Heading>
      </factory.div>
      <factory.div mb={3}>
        <Text variant="reviewBody">{description}</Text>
      </factory.div>
      <factory.div>
        <Text variant="reviewHelper">{author}</Text>
      </factory.div>
    </factory.div>
  );
}

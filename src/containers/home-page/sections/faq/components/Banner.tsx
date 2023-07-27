import React from 'react';
import { factory } from '../../../../../theme/factory';
import { _Banner } from '../../../entities/_HomePage';
import { Image } from '../../../../../components/image/Image';
import { Heading } from '../../../../../components/heading/Heading';
import { Text } from '../../../../../components/text/Text';
import { Link } from '../../../../../components/link/Link';
import { Button } from '../../../../../components/button/Button';

type Props = _Banner & {};

export function Banner(props: Props) {
  const { image, heading, description, button } = props;

  return (
    <factory.div
      display="flex"
      alignItems="center"
      py={5}
      px={10}
      borderRadius={20}
      borderWidth={1}
      borderColor="gray.100"
    >
      <factory.div mr={5} borderRadius="full" overflow="hidden">
        <Image image={image} />
      </factory.div>
      <factory.div
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <factory.div>
          <factory.div>
            <Heading variant="panel">{heading}</Heading>
          </factory.div>
          <factory.div>
            <Text>{description}</Text>
          </factory.div>
        </factory.div>
        <factory.div>
          <Link to={button.path || ``}>
            <Button icon="comments">{button.label}</Button>
          </Link>
        </factory.div>
      </factory.div>
    </factory.div>
  );
}

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
      flexDirection={[`column`, null, `row`]}
      alignItems="center"
      py={5}
      px={10}
      borderRadius={20}
      borderWidth={1}
      borderColor="gray.100"
    >
      <factory.div
        mr={[0, null, 5]}
        mb={[5, null, 0]}
        borderRadius="full"
        overflow="hidden"
      >
        <Image image={image} />
      </factory.div>
      <factory.div
        width="100%"
        display="flex"
        flexDirection={[`column`, null, `row`]}
        justifyContent="space-between"
        alignItems="center"
      >
        <factory.div>
          <factory.div textAlign={[`center`, null, `left`]} mb={[1, null, 0]}>
            <Heading variant="panel">{heading}</Heading>
          </factory.div>
          <factory.div textAlign={[`center`, null, `left`]} mb={[5, null, 0]}>
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

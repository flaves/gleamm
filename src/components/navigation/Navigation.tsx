import React from 'react';
import { factory } from '../../theme/factory';
import { Link } from '../link/Link';
import { Text } from '../text/Text';
import { Button } from '../button/Button';
import { Logo } from '../logo/Logo';
import { DefaultProps } from '../../types/DefaultProps';
import { Container } from '../container/Container';
import { mapNavigationQueryToNavigationProps } from './mapper/mapNavigationQueryToNavigationProps';

type NavigationData = Queries.PrismicNavigation;

type Props = DefaultProps<NavigationData>;

export function Navigation(props: Props) {
  const { data } = props;
  const navigation = mapNavigationQueryToNavigationProps(data);

  return (
    <factory.div
      width="100%"
      bg="rgba(255, 255, 255, 0.75)"
      backdropFilter="blur(10px)"
      position="sticky"
      top={0}
      zIndex={900}
      px={120}
      py={5}
      borderBottomWidth={1}
      borderBottomColor="gray.50"
    >
      <Container>
        <factory.div
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <factory.div width={200}>
            <Logo />
          </factory.div>
          <factory.div display="flex" justifyContent="center" gap={10}>
            {navigation.anchors.map((anchor, key) => (
              <Link key={key} to={anchor.path || ``}>
                <Text variant="navLink">{anchor.label}</Text>
              </Link>
            ))}
          </factory.div>
          <factory.div width={200}>
            <Link to={navigation.button.path || ``}>
              <Button>{navigation.button.label}</Button>
            </Link>
          </factory.div>
        </factory.div>
      </Container>
    </factory.div>
  );
}

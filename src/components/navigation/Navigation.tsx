import React, { useEffect, useState } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';
import { factory } from '../../theme/factory';
import { Link } from '../link/Link';
import { Text } from '../text/Text';
import { Button } from '../button/Button';
import { Logo } from '../logo/Logo';
import { DefaultProps } from '../../types/DefaultProps';
import { Container } from '../container/Container';
import { MobileNavigation } from '../mobile-navigation/MobileNavigation';
import { Hamburger } from '../hamburger/Hamburger';
import { mapNavigationQueryToNavigationProps } from './mapper/mapNavigationQueryToNavigationProps';
import { link } from '../../config/link';

type NavigationData = Queries.PrismicNavigation;

type Props = DefaultProps<NavigationData>;

if (typeof window !== `undefined`) {
  require(`smooth-scroll`)(`a[href*="#"]`);
}

export function Navigation(props: Props) {
  const { data } = props;
  const navigation = mapNavigationQueryToNavigationProps(data);
  const [isOpen, setIsOpen] = useState(false);
  const isLargerThanLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    if (isLargerThanLg) {
      setIsOpen(false);
    }
  }, [isLargerThanLg]);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <factory.div
        width="100%"
        bg="rgba(255, 255, 255, 0.75)"
        backdropFilter="blur(10px)"
        position="sticky"
        top={0}
        zIndex={900}
        px={[0, null, null, 100]}
        py={5}
        height={[108, null, null, `auto`]}
        borderBottomWidth={1}
        borderBottomColor="gray.50"
      >
        <factory.div
          width="100%"
          height="100%"
          display="flex"
          alignItems="flex-end"
        >
          <Container>
            <factory.div
              width="100%"
              height="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <factory.div>
                <Link to="/#top" type="anchor">
                  <Logo />
                </Link>
              </factory.div>
              <factory.div
                display={[`none`, null, null, `flex`]}
                justifyContent="center"
                gap={[5, null, null, null, 10]}
              >
                {navigation.anchors.map((anchor, key) => (
                  <Link key={key} to={anchor.path || ``} type="anchor">
                    <Text variant="navLink">{anchor.label}</Text>
                  </Link>
                ))}
              </factory.div>
              <factory.div display={[`none`, null, null, `flex`]}>
                <Link to={link.appointment} type="anchor" isExternal>
                  <Button>{navigation.button.label}</Button>
                </Link>
              </factory.div>
              <factory.button
                ml={4}
                onClick={() => toggleMenu()}
                display={[`block`, null, null, `none`]}
              >
                <Hamburger isOpen={isOpen} />
              </factory.button>
            </factory.div>
          </Container>
        </factory.div>
      </factory.div>
      <MobileNavigation
        navigation={navigation}
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />
    </>
  );
}

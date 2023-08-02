import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { factory } from '../../theme/factory';
import { Link } from '../link/Link';
import { _Navigation } from '../navigation/entities/navigation';
import { Button } from '../button/Button';
import { Text } from '../text/Text';

type Props = {
  navigation: _Navigation;
  isOpen: boolean;
  toggleMenu: (key?: number) => void;
};

const MotionDiv = motion(factory.div);

export function MobileNavigation(props: Props) {
  const { navigation, isOpen, toggleMenu } = props;
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start(`visible`);
    } else {
      controls.start(`hidden`);
    }
  }, [isOpen]);

  const variants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        opacity: {
          duration: 0.3,
        },
        x: {
          duration: 0,
        },
      },
    },
    hidden: {
      x: `200vw`,
      opacity: 0,
      transition: {
        opacity: {
          duration: 0.3,
        },
        x: {
          delay: 0.3,
          duration: 0,
        },
      },
    },
  };

  return (
    <MotionDiv
      bg="white"
      position="fixed"
      top={0}
      right={0}
      left={0}
      width="100vw"
      height="100vh"
      zIndex={899}
      pt={108}
      display={[`flex`, null, null, `none`]}
      flexDirection="column"
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      {navigation.anchors.map((anchor, key) => {
        if (anchor.path?.includes(`#galerie`)) {
          return <></>;
        }
        return (
          <factory.div
            key={key}
            px={4}
            py={5}
            borderBottomWidth={1}
            borderBottomColor="gray.50"
          >
            <Link to={anchor.path || ``} isAnchor>
              <Text
                variant="navLink"
                onClick={() => toggleMenu(key)}
                color="text.primary"
              >
                {anchor.label}
              </Text>
            </Link>
          </factory.div>
        );
      })}
      <factory.div textAlign="center" py={5}>
        <Link to={navigation.button.path || ``}>
          <Button>{navigation.button.label}</Button>
        </Link>
      </factory.div>
    </MotionDiv>
  );
}

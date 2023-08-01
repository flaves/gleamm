import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';

import { factory } from '../../theme/factory';

interface Props {
  isOpen: boolean;
}

const MotionDiv = motion(factory.div);

export function Hamburger(props: Props) {
  const { isOpen } = props;
  const controls = useAnimation();

  const topLineVariant = {
    visible: { x: 20, opacity: 0, transition: { duration: 0.3 } },
    hidden: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  const bottomLineVariant = {
    visible: { x: -20, opacity: 0, transition: { duration: 0.3 } },
    hidden: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  const centerLineVariant = {
    visible: {
      rotate: 45,
      transition: { delay: 0.2, duration: 0.3 },
    },
    hidden: {
      rotate: 0,
      transition: { duration: 0.3 },
    },
  };

  const centerLineHiddenVariant = {
    visible: {
      rotate: -45,
      transition: { delay: 0.2, duration: 0.3 },
    },
    hidden: {
      rotate: 0,
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    if (isOpen) {
      controls.start(`visible`);
    } else {
      controls.start(`hidden`);
    }
  }, [isOpen]);

  return (
    <MotionDiv
      width={25}
      height={25}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={1}
      py={1.5}
    >
      <MotionDiv
        width="100%"
        height={0.5}
        borderRadius="full"
        initial="hidden"
        variants={topLineVariant}
        animate={controls}
        backgroundColor="black"
        mb={1}
      />
      <factory.div width="100%" position="relative" mb={1}>
        <MotionDiv
          width="100%"
          height={0.5}
          borderRadius="full"
          backgroundColor="black"
          initial="hidden"
          variants={centerLineVariant}
          animate={controls}
        />
        <MotionDiv
          width="100%"
          height={0.5}
          borderRadius="full"
          backgroundColor="black"
          position="absolute"
          top={0}
          initial="hidden"
          variants={centerLineHiddenVariant}
          animate={controls}
        />
      </factory.div>
      <MotionDiv
        width="100%"
        height={0.5}
        borderRadius="full"
        backgroundColor="black"
        initial="hidden"
        variants={bottomLineVariant}
        animate={controls}
      />
    </MotionDiv>
  );
}

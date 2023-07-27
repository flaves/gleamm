import React from 'react';
import { factory } from '../../../../../theme/factory';

type Props = {
  number: string | null;
  isFirstStep?: boolean;
};

export function ProcessStepNumber(props: Props) {
  const { number, isFirstStep = false } = props;
  return (
    <factory.div>
      <factory.div
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {!isFirstStep && (
          <factory.div width={0.5} height={10} bg="brand.primary.darkest" />
        )}
        <factory.div
          display="flex"
          justifyContent="center"
          alignItems="center"
          width={14}
          height={14}
          bg="brand.primary.lightest"
          borderRadius={12}
          borderWidth={1.5}
          borderColor="brand.primary.darkest"
        >
          <factory.p
            fontSize={24}
            fontWeight={700}
            lineHeight="normal"
            color="brand.primary.darkest"
          >
            {number}
          </factory.p>
        </factory.div>
        <factory.div width={0.5} height={10} bg="brand.primary.darkest" />
      </factory.div>
    </factory.div>
  );
}

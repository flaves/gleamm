import React, { ReactNode } from 'react';
import { factory } from '../../../../../theme/factory';
import { Heading } from '../../../../../components/heading/Heading';
import { Text } from '../../../../../components/text/Text';
import { ProcessStepNumber } from './ProcessStepNumber';

type Props = {
  number: string | null;
  heading: ReactNode;
  description: ReactNode;
  isFirstStep?: boolean;
};

export function ProcessStep(props: Props) {
  const { number, heading, description, isFirstStep } = props;
  return (
    <factory.div textAlign="center" mb={5} maxWidth={640}>
      <ProcessStepNumber number={number} isFirstStep={isFirstStep} />
      <factory.div mt={5} mb={3}>
        <Heading variant="step">{heading}</Heading>
      </factory.div>
      <factory.div>
        <Text>{description}</Text>
      </factory.div>
    </factory.div>
  );
}

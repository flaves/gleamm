import React from 'react';
import { _PricingPlan } from '../../../entities/_HomePage';
import { factory } from '../../../../../theme/factory';
import { Text } from '../../../../../components/text/Text';
import { Heading } from '../../../../../components/heading/Heading';
import { Button } from '../../../../../components/button/Button';
import { Link } from '../../../../../components/link/Link';

type Props = {
  pricingPlan: _PricingPlan;
  variant?: `teal` | `gray`;
};

export function PricingPlan(props: Props) {
  const { pricingPlan, variant = `gray` } = props;
  return (
    <factory.div
      p={10}
      bg={variant === `gray` ? `gray.50` : `brand.primary.lightest`}
      borderWidth={1}
      borderColor={variant === `gray` ? `gray.100` : `brand.primary.lighter`}
      width="100%"
      maxW={420}
      minH={520}
      borderRadius={20}
      mr={[0, null, null, 5]}
      mb={[5, null, null, 0]}
      _last={{ mb: 0, mr: 0 }}
    >
      <factory.div pb={5} borderBottomWidth={1} borderBottomColor="gray.100">
        <factory.div mb={2}>
          <Text
            color={variant === `gray` ? `text.primary` : `brand.primary.darker`}
          >
            {pricingPlan.plan}
          </Text>
        </factory.div>
        <factory.div mb={5}>
          <Text>{pricingPlan.description}</Text>
        </factory.div>
        <factory.div mb={5}>
          <Heading variant="pricing">{pricingPlan.price}</Heading>
        </factory.div>
        <factory.div>
          <Link to={pricingPlan.button.path || ``}>
            <Button>{pricingPlan.button.label}</Button>
          </Link>
        </factory.div>
      </factory.div>
      <factory.div pt={5}>
        <factory.div mb={5}>
          <Text variant="teamMember" color="text.primary">
            {pricingPlan.detailsHeading}
          </Text>
        </factory.div>
        <factory.div sx={{ p: { mb: 3 } }}>
          {pricingPlan.detailsText}
        </factory.div>
      </factory.div>
    </factory.div>
  );
}

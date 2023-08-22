import React from 'react';
import { graphql } from 'gatsby';
import { DefaultProps } from '../../../../types/DefaultProps';
import { factory } from '../../../../theme/factory';
import { Container } from '../../../../components/container/Container';
import { _HomePagePricing } from '../../entities/_HomePage';
import { Badge } from '../../../../components/badge/Badge';
import { Heading } from '../../../../components/heading/Heading';
import { PricingPlan } from './components/PricingPlan';

export type HomePagePricingSectionData = _HomePagePricing;

type Props = DefaultProps<HomePagePricingSectionData>;

export function HomePagePricingSection(props: Props) {
  const { data } = props;

  return (
    <factory.div id="pricing" pt={20} pb={40}>
      <Container>
        <factory.div textAlign="center">
          <factory.div display="flex" justifyContent="center" mb={4}>
            <Badge icon="wallet">{data.badge}</Badge>
          </factory.div>
          <factory.div mb={20}>
            <Heading>{data.heading}</Heading>
          </factory.div>
        </factory.div>
        <factory.div
          display="flex"
          flexDirection={[`column`, null, null, `row`]}
          justifyContent={[`stretch`, null, null, `center`]}
          alignItems={[`center`, null, null, `stretch`]}
        >
          {data.pricingPlans.map((plan, key) => (
            <PricingPlan
              key={key}
              pricingPlan={plan}
              variant={key === 0 ? `gray` : `teal`}
            />
          ))}
        </factory.div>
      </Container>
    </factory.div>
  );
}

export const homePagePricingSectionFragment = graphql`
  fragment HomePagePricingSectionFragment on PrismicHomePageData {
    pricing_badge {
      text
    }
    pricing_heading {
      richText
    }
    pricing_plans {
      pricing_plan {
        text
      }
      pricing_plan_description {
        text
      }
      pricing_plan_price {
        text
      }
      pricing_plan_button_label {
        text
      }
      pricing_plan_button_path {
        text
      }
      pricing_plan_details_heading {
        text
      }
      pricing_plan_details_text {
        richText
      }
    }
  }
`;

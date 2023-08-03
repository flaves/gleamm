import React from 'react';
import { DefaultProps } from '../../types/DefaultProps';
import { factory } from '../../theme/factory';
import { mapLegalPageQueryToLegalPageProps } from './mapper/mapLegalPageQueryToLegalPageProps';
import {
  LegalPageBodySection,
  LegalPageBodySectionData,
} from './sections/LegalPageBodySection';

type LegalPageContainerData = {
  legalPage: Queries.PrismicLegalPage;
};

type Props = DefaultProps<LegalPageContainerData>;

export function LegalPageContainer(props: Props) {
  const { data } = props;
  const legalPageData = mapLegalPageQueryToLegalPageProps(data.legalPage);

  const legalPageBodySectionData: LegalPageBodySectionData = {
    heading: legalPageData.heading,
    body: legalPageData.body,
  };

  return (
    <factory.section py={20}>
      <LegalPageBodySection data={legalPageBodySectionData} />
    </factory.section>
  );
}

import { _LegalPage } from '../entities/_LegalPage';
import { toReactNode } from '../../../components/richtext/mapper/toReactNode';

export const mapLegalPageQueryToLegalPageProps = (
  legalPage?: Queries.PrismicLegalPage,
): _LegalPage => {
  if (
    !legalPage?.data?.heading?.text ||
    legalPage?.data?.body?.richText?.length === 0
  ) {
    throw new Error(`Missing legal page data`);
  }

  return {
    heading: legalPage?.data?.heading?.text,
    body: toReactNode(legalPage?.data?.body?.richText, true),
  };
};

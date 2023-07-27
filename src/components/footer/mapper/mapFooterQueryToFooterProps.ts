import { _Footer } from '../entities/_Footer';
import { toReactNode } from '../../richtext/mapper/toReactNode';

export const mapFooterQueryToFooterProps = (
  footer: Queries.PrismicFooter,
): _Footer => {
  const isAnchorsEmpty = footer?.data?.anchors?.some(
    (anchor) => !anchor.label || !anchor.path,
  );

  const isLegalLinksEmpty = footer?.data?.legal_links?.some(
    (link) => link.label === null || link.path === null,
  );

  const isSocialsEmpty = footer?.data?.socials?.some(
    (social) => social.social === null || social.path === null,
  );

  if (
    footer?.data?.contact_address?.richText?.length === 0 ||
    !footer?.data?.contact_email?.text ||
    !footer?.data?.anchors_heading?.text ||
    !footer?.data?.legal_heading?.text ||
    isAnchorsEmpty ||
    isLegalLinksEmpty ||
    isSocialsEmpty
  ) {
    throw new Error(`Missing footer data`);
  }
  return {
    address: toReactNode(footer?.data?.contact_address?.richText, true, {
      variant: `navLink`,
    }),
    email: {
      label: footer?.data?.contact_email?.text,
      path: `mailto:${footer?.data?.contact_email?.text}`,
    },
    anchorsHeading: footer?.data?.anchors_heading?.text,
    anchors: footer?.data?.anchors?.map((anchor) => ({
      label: anchor?.label,
      path: anchor?.path,
    })),
    legalHeading: footer?.data?.legal_heading?.text,
    legalLinks: footer?.data?.legal_links?.map((link) => ({
      label: link?.label,
      path: link?.path,
    })),
    socials: footer?.data?.socials?.map((social) => ({
      social: social?.social,
      path: social?.path,
    })),
  };
};

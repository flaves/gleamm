import { Maybe } from '../../../types/Maybe';
import { _Image } from '../entities/_Image';

type GatsbyPrismicImage = {
  alt?: Maybe<Scalars[`String`]>;
  copyright?: Maybe<Scalars[`String`]>;
  // dimensions?: Maybe<PrismicImageDimensionsType>;
  gatsbyImageData?: Maybe<Scalars[`JSON`]>;
  localFile?: Maybe<File>;
  url?: Maybe<Scalars[`String`]>;
};

export const toImage = (image?: GatsbyPrismicImage | null): _Image => ({
  ...image,
  parent: ``,
  children: [],
  internal: {
    type: ``,
    contentDigest: ``,
    owner: ``,
  },
  id: ``,
  alt: image?.alt || ``,
});

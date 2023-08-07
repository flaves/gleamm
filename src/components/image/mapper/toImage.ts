import { Maybe } from '../../../types/Maybe';
import { _Image } from '../entities/_Image';

type GatsbyPrismicImage = {
  alt?: Maybe<string>;
  copyright?: Maybe<string>;
  // dimensions?: Maybe<PrismicImageDimensionsType>;
  gatsbyImageData?: Maybe<any>;
  localFile?: Maybe<File>;
  url?: Maybe<string>;
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

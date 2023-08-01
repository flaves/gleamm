import React, { ElementType } from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { Image as ChakraImage, ImageProps } from '@chakra-ui/react';

export type Props = {
  image: ImageDataLike & { alt: string };
  height?: ImageProps[`height`];
  width?: ImageProps[`width`];
};

export const Image = (props: Props) => {
  const { image, ...rest } = props;
  const imageData = getImage(image);

  if (!imageData) {
    return <></>;
  }

  return (
    <ChakraImage
      as={
        ((props) => <GatsbyImage image={imageData} {...props} />) as ElementType
      }
      {...rest}
    />
  );
};

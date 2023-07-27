import React, { ElementType } from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { Image as ChakraImage } from '@chakra-ui/react';

export type Props = {
  image: ImageDataLike & { alt: string };
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

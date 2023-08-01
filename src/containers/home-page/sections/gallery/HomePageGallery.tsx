import React from 'react';
import { graphql } from 'gatsby';
import { DefaultProps } from '../../../../types/DefaultProps';
import { factory } from '../../../../theme/factory';
import { Container } from '../../../../components/container/Container';
import { _HomePageGallery } from '../../entities/_HomePage';
import { splitArrayIntoThree } from '../../../../utils/split-array-into-three';
import { DraggableGalleryItem } from './components/DraggableGalleryItem';

export type HomePageGallerySectionData = _HomePageGallery;

type Props = DefaultProps<HomePageGallerySectionData>;

let index = 0;

export function HomePageGallerySection(props: Props) {
  const { data } = props;

  const columns = splitArrayIntoThree(data.images);

  const leftImages = columns?.[0];
  const middleImages = columns?.[1];
  const rightImages = columns?.[2];

  return (
    <factory.div
      id="galerie"
      pt={20}
      mb={40}
      display={[`none`, null, null, `block`]}
    >
      <Container>
        <factory.div
          display="flex"
          justifyContent="center"
          gap={[0, null, 2]}
          sx={{
            '.process-grid-left-item-1': {
              height: 500,
            },
            '.process-grid-left-item-2': {
              height: 350,
            },
            '.process-grid-middle-item-1': {
              height: 350,
            },
            '.process-grid-middle-item-2': {
              height: 400,
            },
            '.process-grid-right-item-1': {
              height: 400,
            },
            '.process-grid-right-item-2': {
              height: 400,
            },
          }}
        >
          <factory.div
            display="flex"
            width={400}
            flexDirection="column"
            flexWrap="wrap"
          >
            {leftImages?.map((image, key) => {
              if (index === 2) {
                index = 0;
              }
              index++;
              return (
                <factory.div
                  key={key}
                  className={`process-grid-left-item-${index}`}
                  mb={2}
                  _last={{ mb: 0 }}
                >
                  <DraggableGalleryItem
                    imageBefore={image.imageBefore}
                    imageAfter={image.imageAfter}
                    leftText={data.leftText}
                    rightText={data.rightText}
                  />
                </factory.div>
              );
            })}
          </factory.div>
          <factory.div
            display="flex"
            width={400}
            flexDirection="column"
            flexWrap="wrap"
          >
            {middleImages?.map((image, key) => {
              if (index === 2) {
                index = 0;
              }
              index++;
              return (
                <factory.div
                  key={key}
                  className={`process-grid-middle-item-${index}`}
                  mb={2}
                  _last={{ mb: 0 }}
                >
                  <DraggableGalleryItem
                    imageBefore={image.imageBefore}
                    imageAfter={image.imageAfter}
                    leftText={data.leftText}
                    rightText={data.rightText}
                  />
                </factory.div>
              );
            })}
          </factory.div>
          <factory.div
            display="flex"
            width={400}
            flexDirection="column"
            flexWrap="wrap"
          >
            {rightImages?.map((image, key) => {
              if (index === 2) {
                index = 0;
              }
              index++;
              return (
                <factory.div
                  key={key}
                  className={`process-grid-right-item-${index}`}
                  mb={2}
                  _last={{ mb: 0 }}
                >
                  <DraggableGalleryItem
                    imageBefore={image.imageBefore}
                    imageAfter={image.imageAfter}
                    leftText={data.leftText}
                    rightText={data.rightText}
                  />
                </factory.div>
              );
            })}
          </factory.div>
        </factory.div>
      </Container>
    </factory.div>
  );
}

export const homePageGallerySectionFragment = graphql`
  fragment HomePageGallerySectionFragment on PrismicHomePageData {
    left_text {
      text
    }
    right_text {
      text
    }
    images {
      image_before {
        gatsbyImageData(placeholder: BLURRED, width: 400, height: 500)
        alt
      }
      image_after {
        gatsbyImageData(placeholder: BLURRED, width: 400, height: 500)
        alt
      }
    }
  }
`;

import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { factory } from '../../../../../theme/factory';
import { _Image } from '../../../../../components/image/entities/_Image';
import { Image } from '../../../../../components/image/Image';

type Props = {
  leftText: ReactNode;
  rightText: ReactNode;
  imageBefore: _Image;
  imageAfter: _Image;
};

export const DraggableGalleryItem = (props: Props) => {
  const { imageBefore, imageAfter } = props;
  const [isResizing, setIsResizing] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const setPositioning = useCallback((x: number) => {
    if (imageRef.current?.getBoundingClientRect()) {
      const { left, width } = imageRef?.current?.getBoundingClientRect();
      const handleWidth = handleRef?.current?.offsetWidth || 0;

      if (x >= left && x <= width + left - handleWidth && handleRef.current) {
        handleRef.current.style.left = `${((x - left) / width) * 100}%`;
        imageRef.current.style.clipPath = `inset(0 ${
          100 - ((x - left) / width) * 100
        }% 0 0)`;
      }
    }
  }, []);

  const handleResize = useCallback(
    (e: any) => {
      if (e.clientX && `clientX` in e) {
        setPositioning(e.clientX);
      } else if (e.touches[0] && e.touches[0].clientX) {
        setPositioning(e.touches[0].clientX);
      }
    },
    [setPositioning],
  );

  useEffect(() => {
    if (imageRef.current?.getBoundingClientRect() && handleRef.current) {
      const { left, width } = imageRef.current.getBoundingClientRect();
      const handleWidth = handleRef.current.offsetWidth;

      setPositioning(width / 2 + left - handleWidth / 2);
    }
  }, [setPositioning]);

  const handleResizeEnd = useCallback(() => {
    setIsResizing(false);

    if (typeof window !== `undefined`) {
      window.removeEventListener(`mousemove`, handleResize);
      window.removeEventListener(`touchmove`, handleResize);
      window.removeEventListener(`mouseup`, handleResizeEnd);
      window.removeEventListener(`touchend`, handleResizeEnd);
    }
  }, [handleResize]);

  useEffect(() => {
    if (isResizing && typeof window !== `undefined`) {
      window.addEventListener(`mousemove`, handleResize);
      window.addEventListener(`touchmove`, handleResize);
      window.addEventListener(`mouseup`, handleResizeEnd);
      window.addEventListener(`touchend`, handleResizeEnd);
    }

    return () => {
      if (typeof window !== `undefined`) {
        window.removeEventListener(`mousemove`, handleResize);
        window.addEventListener(`touchmove`, handleResize);
        window.removeEventListener(`mouseup`, handleResizeEnd);
        window.removeEventListener(`touchend`, handleResizeEnd);
      }
    };
  }, [isResizing, handleResize, handleResizeEnd]);

  return (
    <>
      <factory.div
        width="100%"
        height="100%"
        borderRadius={20}
        bg="gray.100"
        position="relative"
        overflow="hidden"
        sx={{
          img: {
            '-moz-user-select': `none`,
            '-webkit-user-select': `none`,
            userSelect: `none`,
            pointerEvents: `none`,
          },
        }}
      >
        <factory.div
          ref={handleRef}
          onMouseDown={() => setIsResizing(true)}
          onTouchStart={() => setIsResizing(true)}
          bg="rgba(255, 255, 255, 0.50)"
          backdropFilter="blur(25px)"
          position="absolute"
          top={0}
          width={1}
          height="100%"
          zIndex={3}
          cursor="col-resize"
        >
          <factory.div height="100%" width={1} position="relative">
            <factory.div
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="calc(50% - 32px)"
              left="calc(50% - 32px)"
              bg="rgba(255, 255, 255, 0.50)"
              backdropFilter="blur(12.5px)"
              width={16}
              height={16}
              borderRadius="full"
            >
              <factory.div
                height={6}
                width={1}
                bg="black"
                borderRadius="full"
                mr={1}
              />
              <factory.div
                height={6}
                width={1}
                bg="black"
                borderRadius="full"
              />
            </factory.div>
          </factory.div>
        </factory.div>
        <factory.div
          ref={imageRef}
          overflow="hidden"
          zIndex={1}
          position="absolute"
          top={0}
          height="100%"
          width="100%"
        >
          <Image width="100%" height="100%" image={imageBefore} />
        </factory.div>
        <factory.div filter="blur(5px)" overflow="hidden" height="100%">
          <Image width="100%" height="100%" image={imageAfter} />
        </factory.div>
      </factory.div>
    </>
  );
};

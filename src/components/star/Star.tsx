import React from 'react';
import { SystemStyleObject, useTheme } from '@chakra-ui/react';
import { factory } from '../../theme/factory';
import { colors } from '../../theme/foundations';

type Props = {
  additionalStyle?: SystemStyleObject;
  variant?: `rating` | `solid` | `outline`;
  fill?: keyof typeof colors.colors.brand.primary;
};

export function Star(props: Props) {
  const { additionalStyle, variant = `solid`, fill } = props;

  const { colors } = useTheme();

  return (
    <factory.div __css={additionalStyle}>
      {variant === `rating` && (
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
          <path
            d="M10.543 4.37891L14.4531 4.95312C14.7812 5.00781 15.0547 5.22656 15.1641 5.55469C15.2734 5.85547 15.1914 6.21094 14.9453 6.42969L12.1016 9.24609L12.7852 13.2383C12.8398 13.5664 12.7031 13.8945 12.4297 14.0859C12.1562 14.3047 11.8008 14.3047 11.5 14.168L8 12.2812L4.47266 14.168C4.19922 14.3047 3.81641 14.3047 3.57031 14.0859C3.29688 13.8945 3.16016 13.5664 3.21484 13.2383L3.87109 9.24609L1.02734 6.42969C0.78125 6.21094 0.699219 5.85547 0.808594 5.55469C0.917969 5.22656 1.19141 5.00781 1.51953 4.95312L5.45703 4.37891L7.20703 0.742188C7.34375 0.441406 7.64453 0.25 8 0.25C8.32812 0.25 8.62891 0.441406 8.76562 0.742188L10.543 4.37891Z"
            fill="url(#paint0_linear_121_36)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_121_36"
              x1="0"
              y1="0.5"
              x2="13.8761"
              y2="16.3584"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FDEB71" />
              <stop offset="1" stopColor="#F8D800" />
            </linearGradient>
          </defs>
        </svg>
      )}
      {variant === `solid` && (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8602 10.2069C20.0466 10.2494 20.0466 10.5045 19.8602 10.547C15.092 11.6033 11.0269 17.333 10.1668 20.6263C10.121 20.7963 9.87899 20.7963 9.83321 20.6263C8.9731 17.333 4.90802 11.6033 0.139809 10.547C-0.0466029 10.5045 -0.0466029 10.2494 0.139809 10.2069C4.90802 9.15052 8.9731 3.42082 9.83321 0.127545C9.87899 -0.0425149 10.121 -0.0425149 10.1668 0.127545C11.0269 3.42082 15.092 9.15052 19.8602 10.2069Z"
            fill={colors.brand.primary[fill || `base`]}
          />
        </svg>
      )}
      {variant === `outline` && (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8602 10.2069C20.0466 10.2494 20.0466 10.5045 19.8602 10.547C15.092 11.6033 11.0269 17.333 10.1668 20.6263C10.121 20.7963 9.87899 20.7963 9.83321 20.6263C8.9731 17.333 4.90802 11.6033 0.139809 10.547C-0.0466029 10.5045 -0.0466029 10.2494 0.139809 10.2069C4.90802 9.15052 8.9731 3.42082 9.83321 0.127545C9.87899 -0.0425149 10.121 -0.0425149 10.1668 0.127545C11.0269 3.42082 15.092 9.15052 19.8602 10.2069Z"
            stroke={colors.brand.primary[fill || `base`]}
          />
        </svg>
      )}
    </factory.div>
  );
}

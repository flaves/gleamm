import React, { ReactNode } from 'react';
import { useMultiStyleConfig } from '@chakra-ui/react';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { Icon } from '../icon/Icon';
import { Icons } from '../../config/icons';
import { factory } from '../../theme/factory';

export type Props = {
  children?: ReactNode;
  icon?: Icons;
};

export function Badge(props: Props) {
  const { children, icon, ...rest } = props;
  const styles = useMultiStyleConfig(`Badge`, props);

  const iconProps = {
    size: `sm` as SizeProp,
    color: styles.icon.color as string,
    style: {
      marginRight: styles.icon.marginRight as number,
    },
  };

  return (
    <factory.div sx={styles.root} {...rest}>
      {icon && <Icon icon={icon} {...iconProps} />}
      {children}
    </factory.div>
  );
}

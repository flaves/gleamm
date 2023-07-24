import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { Icon as icons, Icons } from '../../config/icons';

export type Props = Omit<FontAwesomeIconProps, `icon`> & {
  icon: Icons;
};

export function Icon(props: Props) {
  const { icon } = props;
  return <FontAwesomeIcon {...props} icon={icons[icon] || `paper-plane`} />;
}

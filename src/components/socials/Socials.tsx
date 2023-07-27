import React from 'react';
import { factory } from '../../theme/factory';
import { Link } from '../link/Link';
import { Icon } from '../icon/Icon';
import { Icons } from '../../config/icons';
import { _Footer } from '../footer/entities/_Footer';

type Props = {
  socials: _Footer[`socials`];
};

export function Socials(props: Props) {
  const { socials } = props;

  return (
    <factory.div
      display="flex"
      justifyContent={[`flex-start`, null, null, `flex-end`]}
      mt={[10, null, null, 0]}
    >
      {socials.map((social, key) => (
        <factory.div key={key} mr={7} _last={{ mr: 0 }}>
          <Link
            key={key}
            to={social.path || ``}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={social.social as Icons} size="lg" color="black" />
          </Link>
        </factory.div>
      ))}
    </factory.div>
  );
}

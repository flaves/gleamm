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
    <factory.div display="flex">
      {socials.map((social, key) => {
        if (!social.path) {
          return <></>;
        }
        return (
          <factory.div key={key} mr={7} _last={{ mr: 0 }}>
            <Link key={key} to={social.path} type="anchor" isExternal>
              <Icon icon={social.social as Icons} size="lg" color="black" />
            </Link>
          </factory.div>
        );
      })}
    </factory.div>
  );
}

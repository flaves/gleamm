import {
  faCircleCheck,
  faComment,
  faPaperPlane,
  faPlus,
  faTooth,
} from '@fortawesome/pro-regular-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { IconName } from '@fortawesome/fontawesome-svg-core';

export type Icons =
  | IconName
  | `${IconName}_light`
  | `${IconName}_regular`
  | `${IconName}_solid`;

export const Icon: { [K in Icons]?: IconDefinition } = {
  'circle-check': faCircleCheck,
  comment: faComment,
  tooth: faTooth,
  'paper-plane': faPaperPlane,
  facebook: faFacebook,
  linkedin: faLinkedin,
  instagram: faInstagram,
  plus: faPlus,
};

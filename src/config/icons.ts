import {
  faCircleCheck,
  faComments,
  faPaperPlane,
  faPlus,
  faSparkles,
  faTooth,
  faWallet,
} from '@fortawesome/pro-regular-svg-icons';
import { faCircleXmark, faShieldCheck } from '@fortawesome/pro-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faPinterest,
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
  comments: faComments,
  tooth: faTooth,
  'paper-plane': faPaperPlane,
  facebook: faFacebook,
  pinterest: faPinterest,
  instagram: faInstagram,
  plus: faPlus,
  sparkles: faSparkles,
  shield: faShieldCheck,
  xmark: faCircleXmark,
  wallet: faWallet,
};

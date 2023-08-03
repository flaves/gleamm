import { colors } from './foundations';
import {
  Badge,
  Button,
  Container,
  Heading,
  Input,
  Text,
  Textarea,
} from './components';

export const theme = {
  styles: {
    global: {
      body: {
        fontFamily: ``,
      },
    },
  },
  ...colors,
  components: {
    Badge,
    Button,
    Container,
    Heading,
    Input,
    Text,
    Textarea,
  },
};

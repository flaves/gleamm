import { colors } from './foundations';
import { Badge, Button, Heading, Text } from './components';

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
    Heading,
    Text,
  },
};

import { colors } from './foundations';
import { Badge, Button, Container, Heading, Text } from './components';

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
    Text,
  },
};

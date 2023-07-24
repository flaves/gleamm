import { colors, typography } from './foundations';
import { Heading } from './components';

export const theme = {
  styles: {
    global: {
      body: {
        fontFamily: ``,
      },
    },
  },
  colors,
  ...typography,
  components: {
    Heading,
  },
};

import 'styled-components';
import { Dark } from '~/theme/colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof Dark;
  }
}

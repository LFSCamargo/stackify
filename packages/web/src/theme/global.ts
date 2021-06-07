import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  body {
    background: ${(p) => p.theme.colors.background};
    color: ${(p) => p.theme.colors.textColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;

import styled, { css } from 'styled-components';

const titleSize = {
  // eslint-disable-next-line no-unused-vars
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  // eslint-disable-next-line no-unused-vars
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  // eslint-disable-next-line no-unused-vars
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  // eslint-disable-next-line no-unused-vars
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
  `}
`;

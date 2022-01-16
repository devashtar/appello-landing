const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopM: '1200px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}

/*

import { device } from '@breakpoints';

const Page = styled.div`
  margin: auto;
  font-family: "sans-serif";
  text-align: center;

  @media ${device.laptop} { 
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;

=========== other variant ============

const size = {
 xs: '320px',
 sm: '768px',
 md: '1024px',
 lg: '1200px',
 xl: '1600px'
}

const device = {
 xs: `(min-width: ${size.xs})`,
 sm: `(min-width: ${size.sm})`,
 xs: `(min-width: ${size.md})`,
 lg: `(min-width: ${size.lg})`,
 xs: `(min-width: ${size.xl})`
}

*/

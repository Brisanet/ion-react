import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 400;
    src: local('Source Sans Pro'),
      url(https://fonts.cdnfonts.com/s/12183/SourceSansPro-Regular.woff)
        format('woff');
  }

  @font-face {
    font-family: Source Sans Pro;
    font-style: italic;
    font-weight: 400;
    src: local('Source Sans Pro'),
      url(https://fonts.cdnfonts.com/s/12183/SourceSansPro-It.woff) format('woff');
  }

  @font-face {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 200;
    src: local('Source Sans Pro'),
      url(https://fonts.cdnfonts.com/s/12183/SourceSansPro-ExtraLight.woff)
        format('woff');
  }

  @font-face {
    font-family: Source Sans Pro;
    font-style: italic;
    font-weight: 200;
    src: local('Source Sans Pro'),
      url(https://fonts.cdnfonts.com/s/12183/SourceSansPro-ExtraLightIt.woff)
        format('woff');
  }

  @font-face {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 300;
    src: local('Source Sans Pro'),
      url(https://fonts.cdnfonts.com/s/12183/SourceSansPro-Light.woff)
        format('woff');
  }

  @font-face {
    font-family: Source Sans Pro;
    font-style: italic;
    font-weight: 300;
    src: local('Source Sans Pro'),
      url(https://fonts.cdnfonts.com/s/12183/SourceSansPro-LightIt.woff)
        format('woff');
  }

  @font-face {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    src: local('Source Sans Pro'),
      url(https://fonts.cdnfonts.com/s/12183/SourceSansPro-Semibold.woff)
        format('woff');
  }

  @font-face {
    font-family: Source Sans Pro;
    font-style: italic;
    font-weight: 600;
    src: local('Source Sans Pro'),
      url(https://fonts.cdnfonts.com/s/12183/SourceSansPro-SemiboldIt.woff)
        format('woff');
  }

  @font-face {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 700;
    src: local('Source Sans Pro'),
      url(https://fonts.cdnfonts.com/s/12183/SourceSansPro-Bold.woff)
        format('woff');
  }

  @font-face {
    font-family: Source Sans Pro;
    font-style: italic;
    font-weight: 700;
    src: local('Source Sans Pro'),
      url(https://fonts.cdnfonts.com/s/12183/SourceSansPro-BoldIt.woff)
        format('woff');
  }
  
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: ${theme.font.family};

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-size: 1.6rem;
    }
  `}
`;

export default GlobalStyles;

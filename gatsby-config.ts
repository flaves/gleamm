import type { GatsbyConfig } from 'gatsby';

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gleamm`,
    siteUrl: `https://www.gleamm.be`,
    description: `Gleamm`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `@chakra-ui/gatsby-plugin`,
      options: {
        resetCSS: true,
        portalZIndex: undefined,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        imageImgixParams: {
          auto: `compress,format`,
          fit: `max`,
          q: 50,
        },
        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },
      },
    },
  ],
};

export default config;

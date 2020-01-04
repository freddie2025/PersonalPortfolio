module.exports = {
  siteMetadata: {
    title: `Personal Portfolio`,
    titleTemplate: "Personal Portfolio",
    description: `Personal Portfolio, powered with React, Bulma and Gatsby. Hosted on Netlify.`,
    author: `Fred James`,
    url: "https://fredjames.co.uk", // No trailing slash allowed!
    image: "../images/thumbnail.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@freddie2025"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: ``,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

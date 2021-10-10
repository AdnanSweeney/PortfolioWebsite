/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#564EFF`,
        theme_color: `#9055FF`,
        display: `standalone`,
        icon: `src/assets/v2Logos/FaviconPngNoBackground.png`,
      },
    },
  ],
}

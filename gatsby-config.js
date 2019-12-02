module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `GitHub Actions Advent Calendar`,
    author: `Benjamin Lannon`,
    description: `A GitHub Actions Advent Calendar during December 2019`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/lannonbr`,
      },
      {
        name: `github`,
        url: `https://github.com/lannonbr/ActionsAdventCalendar`,
      },
    ],
  },
}

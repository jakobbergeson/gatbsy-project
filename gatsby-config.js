module.exports = {
  siteMetadata: {
    title: "Jakob B",
    author: "Jakob Bergeson",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
          },
          "gatsby-remark-relative-images",
          "gatsby-plugin-image",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
            },
          },
        ],
      },
    },
  ],
}

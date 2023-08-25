/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `technofest`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        // Ignore files starting with a dot
        ignore: [`**/\.*`],
        // Use "mtime" and "inode" to fingerprint files (to check if file has changed)
        fastHash: true,
      },
    },
    `gatsby-transformer-json`,

    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'EventsJson',
        imagePath: 'image_link',
        name: 'downloadedImages',
      },
    },

  ]
};
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `yeqingkong.com`,
    siteUrl: `https://www.yeqingkong.com`,
    viewport: `initial-scale=1, width=device-width`,
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "0ZNI183dYDqOhwz6Lw2WMYsqY1FDmfIq1SVAGd5zMSM",
      "spaceId": "lulclwb7b150"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp"]
};
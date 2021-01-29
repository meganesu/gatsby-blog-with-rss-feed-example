module.exports = {
  siteMetadata: {
    title: "my-personal-blog",
    siteUrl: "https://my-personal-blog.com",
    description:
      "An example Gatsby blog with an automatically generated RSS feed.",
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./src/blog/",
      },
      __key: "blog",
    },
  ],
};

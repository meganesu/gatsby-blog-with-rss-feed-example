module.exports = {
  siteMetadata: {
    title: "my-personal-blog",
    siteUrl: "https://my-personal-blog.com",
    description:
      "An example Gatsby blog with an automatically generated RSS feed.",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            title: "My Personal Blog RSS Feed",
            output: "rss.xml",
            query: `
            {
              allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
                nodes {
                  frontmatter {
                    title
                    date
                    description
                  }
                  html
                  slug: gatsbyPath(filePath: "/{MarkdownRemark.frontmatter__title}")
                }
              }
            }
            `,
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  url: `${site.siteMetadata.siteUrl}${node.slug}`,
                  guid: `${site.siteMetadata.siteUrl}${node.slug}`,
                })
              })
            },
          }
        ]
      }
    },
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

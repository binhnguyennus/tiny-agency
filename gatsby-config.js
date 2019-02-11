module.exports = {
  // Customize me!
  siteMetadata: {
    company: "Fox and Geese",
    domain: "https://foxandgeese.com",
    defaultTitle: "Website Change Monitoring Products and Services",
    preamble:
      "We're a Portland, Oregon-based team of data scientists and software engineers.",
    defaultDescription:
      "We create products and provide services that surface business insights from website changes.",
    contact: {
      email: "hi@foxandgeese.com",
    },
    menuLinks: [],
  },
  pathPrefix: "/simple-react-company-starter",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./images/logo.png",
      },
    },
  ],
};

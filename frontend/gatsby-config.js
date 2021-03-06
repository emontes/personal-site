module.exports = {
  siteMetadata: {
    title: `Enrique Montes`,
    description: `Desarrollo sistemas web utilizando Frameworks como Gastby y React para el Front,
    y para el Back uso Headless CMS como Strapi, Contentful o Wordpress`,
    author: `@el_ade`,
    twitterUsername: "@_el_ade",
    image: "/desarrollador-web.jpg",
    siteUrl: "https://enriquemontes.com"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Enrique Montes`,
        short_name: `el_ade`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: ["desarrollo","recurso","recurso-tipo","medio","pagina"],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`es`, `en`, `ru`, `he`, `de`],
        // language file path
        defaultLanguage: `es`,
        // option to redirect to `/es` when connecting `/`
        redirect: false,
      },
    },
    
  ],
}

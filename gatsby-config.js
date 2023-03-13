/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Hammer3",
    description: "Eat Drink Murder",
    author: "Hammer3",
    telephoneNumber: "+44 7942 26489",
    emailContact: "clare@some_site.com",
    twitterUsername: "",
    facebookUsername: "SloughDentalHygiene",
    instagramUsername: "",
    linkedinUsername: "",
    image: "/smile-1.png",
    siteUrl: `https://www.yourdomain.tld`,
    developerName: "Hammer3",
    developerUrl: "https://www.hammer3.de",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Montserrat`,
            file: `https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap`,
          },
          {
            name: `Raleway`,
            file: `https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,500;1,300;1,700&display=swap`,
          },
          {
            name: `Scope One`,
            file: `https://fonts.googleapis.com/css2?family=Scope+One&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap`,
          },
          {
            name: `Hind`,
            file: `link href="https://fonts.googleapis.com/css2?family=Hind:wght300&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
};

import { useStaticQuery, graphql } from "gatsby";

export const GetBannerImages = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query BannerImages {
        allFile(filter: { name: { regex: "/banner/" } }) {
          totalCount
          nodes {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                jpgOptions: { quality: 100 }
                placeholder: BLURRED
                blurredOptions: { width: 100 }
              )
            }
          }
        }
      }
    `
  );

  return allFile;
};

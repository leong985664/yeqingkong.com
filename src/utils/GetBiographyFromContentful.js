import { graphql, useStaticQuery } from 'gatsby';

const GetBiographyFromContentful = () => {
    const query = useStaticQuery(graphql`
        query contentfulBiography {
            contentfulBiography {
                name
                jobTitle
                content {
                    raw
                }
                avatar {
                    url
                }
                cv {
                    url
                }
            }
        }
    `)

    return query.contentfulBiography;
};

export default GetBiographyFromContentful;

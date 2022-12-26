import { graphql, useStaticQuery } from 'gatsby';

const GetSpecialtiesFromContentful = () => {
    const query = useStaticQuery(graphql`
        query allContentfulSpecialties {
            allContentfulSpecialties(sort: {fields: createdAt, order: ASC}) {
                nodes {
                    name
                }
            }
        }           
    `)

    return query.allContentfulSpecialties.nodes;
}

export default GetSpecialtiesFromContentful;

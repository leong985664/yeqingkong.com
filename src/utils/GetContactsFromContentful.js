import { graphql, useStaticQuery } from 'gatsby';

const GetContactsFromContentful = () => {
    const query = useStaticQuery(graphql`
        query allContentfulContacts {
            allContentfulContacts(sort: {order: ASC, fields: createdAt}) {
                nodes {
                    name
                    url
                }
            }
        }      
    `)

    return query.allContentfulContacts.nodes;
}

export default GetContactsFromContentful;

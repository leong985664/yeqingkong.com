import { renderRichText } from 'gatsby-source-contentful/rich-text'
import * as React from "react"
import { INLINES } from '@contentful/rich-text-types'
import ArticleIcon from '@mui/icons-material/Article';
import { Button, Container, Typography } from "@mui/material";

const Biography = (props) => {
  const { content, cv } = props;

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} sx={{ color: "red", textDecoration: null }}>
            {children}
          </a>
        )
      },
    },
  }

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>Biography</Typography>
      {renderRichText(content, options)}
      <Button target="_blank" href={cv} color="secondary" variant="outlined" startIcon={<ArticleIcon />}>
        View CV
      </Button>
    </Container>
  )
}

export default Biography;

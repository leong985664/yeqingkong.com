import * as React from "react"
import NavigationBar from './NavigationBar';
import Introduction from './Introduction';

const IndexPage = () => {
  return (
    <>
      <NavigationBar />
      <Introduction />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

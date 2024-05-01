import React, { Fragment } from "react"
import Navbar from "./Navbar"
import { Container } from "react-bootstrap"
import AddFolderButton from "./AddFolderButton"

export default function Dashboard() {
  return (
    <Fragment>
      <Navbar />
      <Container fluid>
        <AddFolderButton />
      </Container>
    </Fragment>
  )
}

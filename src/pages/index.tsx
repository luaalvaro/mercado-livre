import { Box } from "@chakra-ui/react"
import { NextPage } from "next"

import { Header, Subheader, Slide } from '../components'

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <Subheader />
      <Slide />
    </Box>
  )
}

export default Home

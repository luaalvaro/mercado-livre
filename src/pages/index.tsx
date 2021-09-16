import { Box } from "@chakra-ui/react"
import { NextPage } from "next"

import { Header, Subheader } from '../components'

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <Subheader />
    </Box>
  )
}

export default Home

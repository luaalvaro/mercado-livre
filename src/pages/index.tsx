import { Box } from "@chakra-ui/react"
import { NextPage } from "next"

import { Header, Subheader, Slide, CardStaticImage } from '../components'

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <Subheader />
      <Slide />
      <CardStaticImage strImg="card-static-01" />
      <CardStaticImage strImg="card-static-02" />
    </Box>
  )
}

export default Home

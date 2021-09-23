import { Box } from "@chakra-ui/react"
import { NextPage } from "next"

import {
  Header,
  Subheader,
  Slide,
  CardStaticImage,
  Offers,
  OffersHeader,
  Card
} from '../components'

const Home: NextPage = () => {
  return (
    <Box bg="#f7f7f7" paddingBottom="50px">
      <Header />
      <Subheader />
      <Slide />
      <CardStaticImage strImg="card-static-01" />
      <CardStaticImage strImg="card-static-02" />
      <Offers>
        <OffersHeader />
        <Card />
      </Offers>
    </Box>
  )
}

export default Home

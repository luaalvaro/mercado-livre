import { Flex, Text, Link as A } from '@chakra-ui/react'

const OffersHeader = () => {
    return (
        <Flex
            align="flex-end"
        >
            <Text
                fontSize="26px"
                color="#666"
                marginRight="16px"
            >
                Ofertas do dia
            </Text>
            <A href="#" color="#3483fa" mb="4px">Ver todas</A>
        </Flex>
    )
}

export default OffersHeader

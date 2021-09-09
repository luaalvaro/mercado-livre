import { Flex, Image, InputGroup, InputLeftElement, Input, Box } from '@chakra-ui/react'

import { BiSearch } from 'react-icons/bi'
import { AiOutlineBars, AiOutlineShoppingCart } from 'react-icons/ai'

const Header = () => {
    return (
        <Flex
            height="48px"
            background="#FFF159"
            align="center"
            paddingX="10px"
        >
            <Image
                src="/img/logo-mobile.png"
                alt="Logo"
                width="44px"
                height="32px"
                marginRight="10px"
            />

            <InputGroup
                display="flex"
                alignItems="center"
            >
                <InputLeftElement>
                    <Box mt="-6px">
                        <BiSearch color="rgba(0,0,0,0.2)" />
                    </Box>
                </InputLeftElement>
                <Input
                    width="217px"
                    height="32px"
                    background="#fff"
                    placeholder="Buscar produtos, marcas..."
                    borderRadius="2px"
                    border="none"
                    fontFamily="Montserrat"
                    fontSize="14px"
                />
            </InputGroup>

            <Flex
                width="120px"
                justifyContent="space-between"
            >
                <AiOutlineBars fontSize="30px" />

                <AiOutlineShoppingCart fontSize="28px" />
            </Flex>

        </Flex>
    )
}

export default Header

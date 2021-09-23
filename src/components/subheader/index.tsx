import { Flex, Text } from '@chakra-ui/react'
import { BiMap } from 'react-icons/bi'
import { RiArrowDropRightLine } from 'react-icons/ri'

const Subheader: React.FC = () => {
    return (
        <Flex
            height="39px"
            background="#FFF159"
            borderTop="1px solid rgba(0,0,0,0.1)"
            align="center"
            justifyContent="space-between"
            color="#736c28"
            paddingLeft="10px"
        >
            <Flex
                align="center"
            >
                <BiMap />
                <Text
                    ml="5px"
                    fontSize="12px"
                >
                    Informe seu CEP
                </Text>
            </Flex>

            <RiArrowDropRightLine fontSize="30px" />
        </Flex>
    )
}

export default Subheader

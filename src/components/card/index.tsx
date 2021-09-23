import { Flex, Text } from '@chakra-ui/react'

const Card = () => {
    return (
        <Flex
            width="224px"
            height="330px"
            borderBottomRadius="5px"
            border="1px solid rgba(0,0,0,0.05)"
            mt="20px"
            bg="#fff"
            direction="column"
            boxShadow="lg"
        >
            <Flex
                width="100%"
                height="224px"
                background="transparent url('/img/computador.png') center center / cover"
            />

            <Flex
                flex="1"
                borderTop="1px solid rgba(0,0,0,0.1)"
                borderBottomRadius="5px"
                padding="10px"
                direction="column"
            >
                <Text
                    fontSize="14px"
                    lineHeight="14px"
                >
                    Notebook ideapad s145 8GM RAM processador i5
                </Text>

                <Flex
                    mt="5px"
                >
                    <Text
                        fontSize="20px"
                        color="#333"
                    >
                        R$ 3.099
                    </Text>
                    <Text
                        color="#00a650"
                        ml="5px"
                        mt="5px"
                        fontSize="12px"
                    >
                        22% OFF
                    </Text>
                </Flex>

                <Text
                    color="#00a650"
                    fontSize="12px"
                >
                    12x R$ 258²³ sem juros
                </Text>

                <Text
                    color="#00a650"
                    fontSize="14px"
                    fontWeight="500"
                >
                    Frete grátis
                </Text>

            </Flex>
        </Flex>
    )
}

export default Card

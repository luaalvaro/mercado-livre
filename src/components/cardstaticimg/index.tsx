import { Flex, Image, Box } from '@chakra-ui/react'

interface IProps {
    strImg: string
}

const CardStaticImage: React.FC<IProps> = ({ strImg }) => {

    console.log(strImg)

    return (
        <Flex
            mx="10px"
            my="20px"
            mb="10px"
            boxShadow="2px 3px 5px rgba(0,0,0,0.1)"
        >
            <Image src={`/img/${strImg}.png`} alt="card static 01" width="100%" height="130px" borderRadius="4px" />
        </Flex >
    )
}

export default CardStaticImage

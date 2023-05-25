import React from "react";
import {
    Box, Text, useColorModeValue, Heading, VStack, HStack, Tag, TagLabel, TagRightIcon, Button, IconButton

} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";

const TagsPage = (props) => {
    const borderColor = useColorModeValue('gray.200', 'gray.600')
    const bgColor = useColorModeValue('whiteAlpha.800', 'gray.700')

    // const articles = [
    //     {
    //         title: "Exploring the Wonders of Nature",
    //         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae odio a dui ultricies tincidunt. Curabitur dignissim lectus in dui aliquam, sed rutrum mauris eleifend. Vivamus commodo, ipsum in fermentum scelerisque, velit lacus malesuada risus, at sagittis diam lectus nec nisi.",
    //     },
    //     {
    //         title: "The Art of Balancing Work and Life",
    //         content: "Fusce fermentum metus non mauris consequat, ac aliquam mauris pulvinar. Morbi sed justo eget justo feugiat congue. Vivamus elementum ligula vel turpis convallis, non vulputate tellus eleifend. Quisque quis sapien ligula. Donec commodo quam non interdum facilisis.",
    //     },
    // ];

    return (
        <Box w="100%" minH="100%" p="5">


            <Box
                borderWidth="1px"
                borderStyle="solid"
                borderColor={borderColor}
                p="5"
                minH="100%"
                bgColor={bgColor}
                borderRadius="2xl"
            >
                <Heading as="h1" mb="6">
                    Tags
                </Heading>


                <VStack spacing="6" align="start">
                    <HStack spacing='24px'>
                        <Link to="/">
                            <Tag variant='solid' colorScheme='twitter' cursor='pointer'>
                                Algorithm
                                {/* <TagLabel variant='solid' colorScheme='white'></TagLabel> */}
                                <TagRightIcon as="" />
                            </Tag>
                        </Link>
                        <Link to="/">
                            <Tag variant='solid' colorScheme='twitter' cursor='pointer'>
                                Alien
                                {/* <TagLabel variant='solid' colorScheme='white'></TagLabel> */}
                                <TagRightIcon as="" />
                            </Tag>
                        </Link>
                        <Link to="/">
                            <Tag variant='solid' colorScheme='twitter' cursor='pointer'>
                                BFS
                                {/* <TagLabel variant='solid' colorScheme='white'></TagLabel> */}
                                <TagRightIcon as="" />
                            </Tag>
                        </Link>
                        <Link to="/">
                            <Tag variant='solid' colorScheme='twitter' cursor='pointer'>
                                CPP
                                {/* <TagLabel variant='solid' colorScheme='white'></TagLabel> */}
                                <TagRightIcon as="" />
                            </Tag>
                        </Link>
                    </HStack>
                    <HStack spacing='24px'>
                        <Link to="/">
                            <Tag variant='solid' colorScheme='twitter' cursor='pointer'>
                                CNN
                                {/* <TagLabel variant='solid' colorScheme='white'></TagLabel> */}
                                <TagRightIcon as="" />
                            </Tag>
                        </Link>
                        <Link to="/">
                            <Tag variant='solid' colorScheme='twitter' cursor='pointer'>
                                Cmake
                                {/* <TagLabel variant='solid' colorScheme='white'></TagLabel> */}
                                <TagRightIcon as="" />
                            </Tag>
                        </Link>
                        <Link to="/">
                            <Tag variant='solid' colorScheme='twitter' cursor='pointer'>
                                CSS
                                {/* <TagLabel variant='solid' colorScheme='white'></TagLabel> */}
                                <TagRightIcon as="" />
                            </Tag>
                        </Link>
                        <Link to="/">
                            <Tag variant='solid' colorScheme='twitter' cursor='pointer'>
                                CPU
                                {/* <TagLabel variant='solid' colorScheme='white'></TagLabel> */}
                                <TagRightIcon as="" />
                            </Tag>
                        </Link>
                    </HStack>
                    <HStack spacing='24px'>
                        <Link to="/">
                            <Tag variant='solid' colorScheme='twitter' cursor='pointer'>
                                CNN
                                {/* <TagLabel variant='solid' colorScheme='white'></TagLabel> */}
                                <TagRightIcon as="" />
                            </Tag>
                        </Link>
                        <Link to="/">
                            <Tag variant='solid' colorScheme='twitter' cursor='pointer'>
                                Cmake
                                {/* <TagLabel variant='solid' colorScheme='white'></TagLabel> */}
                                <TagRightIcon as="" />
                            </Tag>
                        </Link>
                        <Link to="/">
                            <Tag variant='solid' colorScheme='twitter' cursor='pointer'>
                                CSS
                                {/* <TagLabel variant='solid' colorScheme='white'></TagLabel> */}
                                <TagRightIcon as="" />
                            </Tag>
                        </Link>
                        <Link to="/">
                            <Tag variant='solid' colorScheme='twitter' cursor='pointer'>
                                CPU
                                {/* <TagLabel variant='solid' colorScheme='white'></TagLabel> */}
                                <TagRightIcon as="" />
                            </Tag>
                        </Link>
                    </HStack>

                </VStack>

            </Box>


            <Box>
                <HStack direction='row' spacing={4}>
                    <IconButton icon={<ChevronLeftIcon />} colorScheme='twitter' variant='outline'/>
                    <Button colorScheme='twitter' variant='link'>1</Button>
                    <Button colorScheme='twitter' variant='link'>2</Button>
                    <Button colorScheme='twitter' variant='link'>3</Button>
                    <Button colorScheme='twitter' variant='link'>4</Button>
                    <Button colorScheme='twitter' variant='link'>5</Button>
                    <IconButton icon={<ChevronRightIcon />} colorScheme='twitter' variant='outline'/>
                </HStack>                 
            </Box>

        </Box>
    )
}
export default TagsPage;

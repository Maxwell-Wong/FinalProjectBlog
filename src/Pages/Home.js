/**
 * @author {Jingyun Huang}
 * @date 2023/5/24
 * @author {Shiyu Chen}
 * @date 2023/5/28
 */

import React from "react";
import {
    Box, Text, useColorModeValue, Heading, VStack, Link

} from "@chakra-ui/react";

import { ExternalLinkIcon } from '@chakra-ui/icons';


const HomePage = (props) => {
    
    const borderColor = useColorModeValue('gray.200', 'gray.600')
    const bgColor = useColorModeValue('whiteAlpha.800', 'gray.700')

    const articles = [
        {
            title: "Exploring the Wonders of Nature",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae odio a dui ultricies tincidunt. Curabitur dignissim lectus in dui aliquam, sed rutrum mauris eleifend. Vivamus commodo, ipsum in fermentum scelerisque, velit lacus malesuada risus, at sagittis diam lectus nec nisi.",
            location: "http://localhost:3000/article1"
        },
        {
            title: "The Art of Balancing Work and Life",
            content: "Fusce fermentum metus non mauris consequat, ac aliquam mauris pulvinar. Morbi sed justo eget justo feugiat congue. Vivamus elementum ligula vel turpis convallis, non vulputate tellus eleifend. Quisque quis sapien ligula. Donec commodo quam non interdum facilisis.",
            location: "http://localhost:3000/article2"
        },
    ];
    
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
                    Recent Posts
                </Heading>

                <VStack spacing="6" align="start">
                    {articles.map((article, index) => (
                        <Box key={index} borderWidth="1px" p="4" borderRadius="lg">
                            <Link color='blackAlpha.900' href = {article.location} >
                            <Heading as="h2" size="lg" mb="2">
                                {article.title}
                            </Heading>
                            </Link>
                            <Text>{article.content}</Text>
                        </Box>
                    ))}
                </VStack>
            </Box>
        </Box>
    )

};
export default HomePage;

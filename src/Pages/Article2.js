/**
 * @author {Shiyu Chen}
 * @date 2023/5/29
 */

import React from "react";
// import marked from 'marked';

import {
    Box, Text, useColorModeValue, Heading, VStack, Link

} from "@chakra-ui/react";

import ReactMarkdown from 'react-markdown';

const markdown = 'There is nothing quite like experiencing the beauty and majesty of nature firsthand.Stepping outside the built environment and into the natural world allows us to reconnect with something primal and awe-inspiring. Exploring nature\'s wonders can be a healing, restorative experience.The sights, sounds and scents of the great outdoors work their magic on our senses. The cascading laughter of a mountain stream over stone soothes our soul. The vastness of the horizon as we stand atop a hill reignites our sense of wonder. The perfume of wildflowers in bloom transfixes us. Nature\'s symphony - the combined song of wind, water and wildlife - fills our mind with peace.Up close, we see the intricate patterns of a spider\'s web, the geometrical precision of snowflakes, and the vibrant colors of a bird\'s feather -tiny miracles that remind us of nature\'s grandeur. We watch in fascination as animals go about their busy lives, independent of human affairs. We marvel at the tenacity of plants pushing through rock and soil to reach the light.When we explore nature, we leave behind our constructed roles and status. We are leveled back to our most basic - creatures of the Earth. The worries of our daily lives fade into the background. Time slows down and connections form - with ourselves, each other and the natural world that sustains us. Despite our differences, we are united in wonder and gratitude for the beauty that surrounds us.So the next chance you get, go explore the wonders of nature - hike a trail, sit by a pond or simply gaze at the stars. Let nature\'s beauty recharge you and remind you of life\'s simplest pleasure'

const ArticlePage2 = (props) => {
    const borderColor = useColorModeValue('gray.200', 'gray.600')
    const bgColor = useColorModeValue('whiteAlpha.800', 'gray.700')


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
                    {"The Art of Balancing Work and Life"}
                </Heading>   
                <Box borderWidth="1px" p="4" borderRadius="lg">
                <ReactMarkdown>
                    {markdown}
                </ReactMarkdown>
                </Box>
            </Box>
        </Box>
    )

};
export default ArticlePage2;

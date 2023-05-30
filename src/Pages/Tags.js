import React, {useState} from "react";
import {
    Box, useColorModeValue, Heading, VStack, HStack, Tag, TagLabel, TagRightIcon, Button, IconButton, Flex,

} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";


/**
 * page of tags
 * @param {*} props 
 * @returns 
 */
const TagsPage = (props) => {
    /**
     * turn to some page
     * @param {*} props the page number
     */
    const PageAt = (props) => {
        // TODO:
        // 1. 翻页后 pageNum 的变动
        // 3. 首尾页禁用按钮
        const maxPage = 10; // 取决于数据量
        if (props >= 1 && props <= maxPage) {
            setcurrentPage( currentPage => props );
            alert("props.page=" + props);

        } else {
            alert("page number error");
        }
    }

    
    /**
     * components of turning page buttons, 
     * including '<','1', '2', ..., '5', '>'
     * @param {*} props
     * @returns
     */
    const PageTurningButtons = (props) => {
        // TODO:
        // 2. pageNum 应该由数据库中的信息计算得到
        var pageNum = [1, 2, 3, 4, 5];
        pageNum = pageNum.map((item) => {
            /* 当前页是黑色的，其他页是主题颜色 */
            return item == currentPage ? <Button colorScheme='' 
                                                 variant='link' 
                                                 onClick={() => PageAt(item)}>{item}</Button>
                                       : <Button colorScheme='twitter' 
                                                 variant='link'
                                                 onClick={() => PageAt(item)} >{item}</Button>;
        })
        
        return (
            <Flex w="full" alignItems="center" justifyContent="center" >
                <IconButton icon={<ChevronLeftIcon />} 
                            colorScheme='twitter' 
                            variant='outline' 
                            onClick={() => PageAt(currentPage - 1)}
                            // disabled={true}
                            />
                {pageNum}
                <IconButton icon={<ChevronRightIcon />} 
                            colorScheme='twitter' 
                            variant='outline' 
                            onClick={() => PageAt(currentPage + 1)}
                            // disabled={true}
                            />
            </Flex>
        );
    }

    /**
     * components of tags
     * @param {*} props 
     * @returns 
     */
    const TagsShowing = (props) => {
        // TODO:
        // 1. tags 从数据库中获得
        // 2. TagRightIcon ？
        var tags = [['Algorithm', 'Alien', 'BFS', 'CPP', 'CNN', 'Cmake', 'CSS', 'CPU'],
                    ['Python', 'Java', 'JavaScript', 'jsp', 'VSCode', 'MySQL', 'A', 'B']]

        tags = tags.map(item => (
            <HStack spacing='24px'>
            {item.map(i => (
                <Link to="/"> {/* TODO: 此处实现传参跳转，到 Archive 页面 */}
                    <Tag variant='solid' colorScheme='twitter' cursor='pointer'>
                        {i}
                        <TagRightIcon as="" />
                    </Tag>
                </Link>            
            ))}
            </HStack>
        ))

        return (<VStack spacing="6" align="start">{tags}</VStack>);
    }

// ---------------- PAGE ----------------------------
    const borderColor = useColorModeValue('gray.200', 'gray.600')
    const bgColor = useColorModeValue('whiteAlpha.800', 'gray.700')

    const [currentPage, setcurrentPage] = useState(3);
    // const [state, setState] = useState(
    //     {
    //     currentPage:3,
    //     pageRange:[],            
    //     }
    // );

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
                <Heading as="h1" mb="6">Tags</Heading>
                <TagsShowing cp={currentPage} /> {/* the tags */}
            </Box>
            <PageTurningButtons cp={currentPage} /> {/* the buttons for page turning */}
        </Box>
    );
}
export default TagsPage;

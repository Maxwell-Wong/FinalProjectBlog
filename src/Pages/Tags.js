import React, {useState} from "react";
import {
    Box, useColorModeValue, Heading, VStack, HStack, Tag, TagRightIcon, Button, IconButton, Flex,

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
        if (props >= 1 && props <= maxPage) {
            // update current page
            setcurrentPage( currentPage => props );

            // when new current page is out of range, update page numbers
            if (props > pageNums[pageNums.length - 1]) {
                let newPageNums = [];
                for (let i = props; i < props + 5 && i <= maxPage; i++) {
                    newPageNums.push(i);
                }
                setpageNums(newPageNums);
            } else if (props < pageNums[0]) {
                let newPageNums = [];
                for (let i = props - 4; i <= props; i++) {
                    newPageNums.push(i);
                }
                setpageNums(newPageNums);
            }
        }
    }

    
    /**
     * components of turning page buttons, 
     * including '<','1', '2', ..., '5', '>'
     * @param {*} props the array of page numbers
     * @returns turning page buttons
     */
    const PageTurningButtons = (props) => {
        // 1. page number buttons
        let pageNumButtons = props.pageNum.map((item) => {
            /* 当前页是黑色的，其他页是主题颜色 */
            return item == currentPage ? <Button colorScheme='' 
                                                 variant='link' 
                                                 onClick={() => PageAt(item)}>{item}</Button>
                                       : <Button colorScheme='twitter' 
                                                 variant='link'
                                                 onClick={() => PageAt(item)} >{item}</Button>;
        });
        
        // 2. previous page button
        if (currentPage > 1) {
            var prevButton = <IconButton icon={<ChevronLeftIcon />} 
                                     colorScheme='twitter' 
                                     variant='outline' 
                                     onClick={() => PageAt(currentPage - 1)}
                                     />            
        }

        // 3. next page button
        if (currentPage < maxPage) {
            var nextButton = <IconButton icon={<ChevronRightIcon />} 
                                         colorScheme='twitter' 
                                         variant='outline' 
                                         onClick={() => PageAt(currentPage + 1)}
                                         />
        }

        return (
            <Flex w="full" alignItems="center" justifyContent="center" >
                {prevButton}
                {pageNumButtons}
                {nextButton}
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
        var data = ['Algorithm', 'Alien', 'BFS', 'CPP', 'CNN', 'Cmake', 'CSS', 'CPU',
                    'Python', 'Java', 'JavaScript', 'jsp', 'VSCode', 'MySQL', 'A', 'B',
                    'Algorithm', 'Alien', 'BFS', 'CPP', 'CNN', 'Cmake', 'CSS', 'CPU',
                    'Python', 'Java', 'JavaScript', 'jsp', 'VSCode', 'MySQL', 'A', 'B',
                    'Algorithm', 'Alien', 'BFS', 'CPP', 'CNN', 'Cmake', 'CSS', 'CPU',
                    'Python', 'Java', 'JavaScript', 'jsp', 'VSCode', 'MySQL', 'A', 'B',
                    'Algorithm', 'Alien', 'BFS', 'CPP', 'CNN', 'Cmake', 'CSS', 'CPU',
                    'Python', 'Java', 'JavaScript', 'jsp', 'VSCode', 'MySQL', 'A', 'B']
        
        let tags = []
        let base = (currentPage - 1) * 8; // 4 * 2 tags each page
        for (let i = 0; i < 2; i++) {
            let temp = []
            for (let j = 0; j < 4; j++) {
                let idx = base + 4 * i + j; // index = base + offset
                // TODO：这里加越界判断
                temp.push(data[idx]);
            }
            tags.push(temp);
        }

        tags = tags.map(item => (
            <HStack spacing='24px'>
            {item.map(i => (
                <Link to="/"> {/* TODO: 此处实现传参跳转，跳转到 Archive 页面 */}
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

    const [currentPage, setcurrentPage] = useState(1);
    const [pageNums, setpageNums] = useState([1, 2, 3, 4, 5]);

    const maxPage = 8; // 需要从数据库所获信息计算

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
                <TagsShowing /> {/* the tags */}
            </Box>
            <PageTurningButtons pageNum={pageNums}/> {/* the buttons for page turning */}
        </Box>
    );
}
export default TagsPage;

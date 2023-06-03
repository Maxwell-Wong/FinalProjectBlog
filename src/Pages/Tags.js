import React, {useState} from "react";
import {
    Box, useColorModeValue, Heading, VStack, HStack, Tag, Button, IconButton, Flex,TagLabel

} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";

import { getTagList } from "../Api/getTagList";
import { useEffect } from "react";
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
        if (currentPage < props.maxPage) {
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
        // get tags in current page
        let tags = [];
        let base = (currentPage - 1) * rows * columns; // 4 * 2 tags each page
        let over = false;
        for (let i = 0; i < rows && !over; i++) {
            let temp = []
            for (let j = 0; j < columns; j++) {
                let idx = base + 4 * i + j; // index = base + offset
                if (idx < data.length) {
                    temp.push(data[idx]);
                } else {
                    over = true;
                    break;
                }
            }
            tags.push(temp);
        }

        // transform tags to corresponding Tag components
        tags = tags.map(item => (
            <HStack spacing='24px'> { /* TODO: 此处实现传参跳转，跳转到 Archive 页面 */}
            {item.map(i => ( i['tag'] ? <Link to={"/search?taglike=" + i['tag']}>
                                            <Tag variant='solid' colorScheme='twitter' cursor='pointer' 
                                                borderTopLeftRadius='20%' borderBottomLeftRadius='20%'
                                                borderTopRightRadius='0%' borderBottomRightRadius='0%'>
                                                <TagLabel >{i['tag']}</TagLabel>
                                            </Tag>
                                            <Tag variant='solid' colorScheme='gray' cursor='pointer' 
                                                borderTopRightRadius='20%' borderBottomRightRadius='20%'
                                                borderTopLeftRadius='0%' borderBottomLeftRadius='0%'>
                                                <TagLabel >{i['count']}</TagLabel>
                                            </Tag>
                                 </Link>
                               : null
            ))}
            </HStack>
        ))

        return (<VStack spacing="6" align="start">{tags}</VStack>);
    }

// ---------------- PAGE ----------------------------
    const borderColor = useColorModeValue('gray.200', 'gray.600')
    const bgColor = useColorModeValue('whiteAlpha.800', 'gray.700')

    // TODO: get data from database
    const [data, setData] = React.useState([]);
    // some parameters
    const rows = 2;     // 每页 rows 行
    const columns = 4;  // 每页 columns 列
    const [maxPage, setMaxPage] = React.useState(1);
    

    // state
    const [currentPage, setcurrentPage] = useState(1);
    
    const [pageNums, setpageNums] = useState([]);
    useEffect(() => {
        getData(); // 在组件挂载后获取标签列表
      }, []);
    async function getData() {
        var msg = await getTagList('TagList/','GET')
        let initData = [];
        if(msg.status == 200) {
            let curDictList = JSON.parse(msg.data)
            for (let i = 0; i < curDictList.length; i++) {
                initData.push(curDictList[i]);
            }
        }
        let initPageNums = [];
        
        let maxNum = Math.ceil(initData.length / (rows * columns));
        for (let i = 1; i <= 5 && i <= maxNum; i++) initPageNums.push(i);
        setMaxPage(maxNum); // 最大页数
        setData(initData);
        setpageNums(initPageNums);
        return initData;
    }

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
            <PageTurningButtons pageNum={pageNums} maxPage={maxPage}/> {/* the buttons for page turning */}
        </Box>
    );
}
export default TagsPage;

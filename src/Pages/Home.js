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
import { blogMd } from "../Api/blogMd";
// import marked from 'marked';

import remarkGfm from 'remark-gfm';// 划线、表、任务列表和直接url等的语法扩展
import rehypeRaw from 'rehype-raw'// 解析标签，支持html语法
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter' // 代码高亮
//高亮的主题，还有很多别的主题，可以自行选择
import { tomorrow,dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import 'github-markdown-css';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import ReactMarkdown from 'react-markdown';
class HomePage extends React.Component {
// const HomePage = (props) => {
    
    // const borderColor = useColorModeValue('gray.200', 'gray.600')
    // const bgColor = useColorModeValue('whiteAlpha.800', 'gray.700')
    
    // const articles = [
    //     {
    //         title: "Exploring the Wonders of Nature",
    //         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae odio a dui ultricies tincidunt. Curabitur dignissim lectus in dui aliquam, sed rutrum mauris eleifend. Vivamus commodo, ipsum in fermentum scelerisque, velit lacus malesuada risus, at sagittis diam lectus nec nisi.",
    //         location: "http://localhost:3000/article1"
    //     },
    //     {
    //         title: "The Art of Balancing Work and Life",
    //         content: "Fusce fermentum metus non mauris consequat, ac aliquam mauris pulvinar. Morbi sed justo eget justo feugiat congue. Vivamus elementum ligula vel turpis convallis, non vulputate tellus eleifend. Quisque quis sapien ligula. Donec commodo quam non interdum facilisis.",
    //         location: "http://localhost:3000/article2"
    //     },
    // ];
    state = {
        markdown:" ",
        title:"博客介绍",
    };
    componentDidMount() {
        this.getData();
    }
    async getData() {
        
        let msg = await blogMd('getBLOGMd/','get');
        console.log(msg)
        this.setState({markdown:msg.data}) 
    }
    render() {
        // return (
        //     <Box w="100%" minH="100%" p="5">
        //         <Box
        //             borderWidth="1px"
        //             borderStyle="solid"
        //             borderColor={borderColor}
        //             p="5"
        //             minH="100%"
        //             bgColor={bgColor}
        //             borderRadius="2xl"
        //         >
        //             <Heading as="h1" mb="6">
        //                 Recent Posts
        //             </Heading>

        //             <VStack spacing="6" align="start">
        //                 {articles.map((article, index) => (
        //                     <Box key={index} borderWidth="1px" p="4" borderRadius="lg">
        //                         <Link color='blackAlpha.900' href = {article.location} >
        //                         <Heading as="h2" size="lg" mb="2">
        //                             {article.title}
        //                         </Heading>
        //                         </Link>
        //                         <Text>{article.content}</Text>
        //                     </Box>
        //                 ))}
        //             </VStack>
        //         </Box>
        //     </Box>
        // );
        return (
            <Box w="100%" minH="100%" p="5">
                <Box  
                    borderWidth="1px"
                    borderStyle="solid"
                    borderColor={'gray.200'}
                    p="5"
                    minH="100%"
                    bgColor={'whiteAlpha.800'}
                    borderRadius="2xl"
                >
                    <Heading as="h1" mb="6">
                        {this.state.title}
                    </Heading>   
                    <Box borderWidth="1px" p="4" borderRadius="lg">
                    <ReactMarkdown
                        className='markdown-body'
                        children={this.state.markdown}
                        remarkPlugins={[remarkGfm, { singleTilde: false },remarkMath]}
                        rehypePlugins={[rehypeRaw,rehypeKatex]}
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        children={String(children).replace(/\n$/, '')}
                                        style={dracula}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    />
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                )
                            }
                        }}
                    />
                    </Box>
                </Box>
            </Box>
        );
    }

};
export default HomePage;

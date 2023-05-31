/**
 * @author {Shiyu Chen}
 * @date 2023/5/29
 */

import React from "react";
import { downloadFile } from "../Api/downloadFile";
// import marked from 'marked';

import remarkGfm from 'remark-gfm';// 划线、表、任务列表和直接url等的语法扩展
import rehypeRaw from 'rehype-raw'// 解析标签，支持html语法
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter' // 代码高亮
//高亮的主题，还有很多别的主题，可以自行选择
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import 'github-markdown-css';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'


import {
    Box, Heading, 
} from "@chakra-ui/react";

import ReactMarkdown from 'react-markdown';



class ArticlePage extends React.Component {
    //第一次挂载读取数据
    state = {
        markdown:" ",
        title:" ",
    };
    componentDidMount() {
        this.getData();
    }
    async getData() {
        
        const params = this.props.location.search.split('?')[1].split('&').reduce((acc, val) => {
            const [key, value] = val.split('=');
            acc[key] = value;
            return acc;
          }, {});
        const name = decodeURIComponent(params.title);
        this.setState({title:name})
        const articleID = params.id;
        let formData = {
            id:articleID
        };
        let msg = await downloadFile('downloadFile/','get',formData);
        console.log(msg)
        this.setState({markdown:msg.data}) 
    }
    render() {
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
                                        style={tomorrow}
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
        )
    }
}

export default ArticlePage;

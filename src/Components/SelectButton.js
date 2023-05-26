import * as React from 'react'
import { 
    Box,Flex,Spacer,Button
} from '@chakra-ui/react';
class PageSelect extends React.Component {
    render() {
        let prevFlag = false;
        let nextFlag = false;
        if(this.props.curIndex === 1) {
            prevFlag = true;
        }
        if(this.props.curIndex === this.props.allIndex) {
            nextFlag = true;
        }
        return(
            <Flex>
                <Box position='relative' left='30px' w='70px' h='30px' >
                <center><PrevButton
                    isFirst={prevFlag}
                />
                </center>
                </Box>
                <Spacer />
                <Box position='relative'>
                <PageList
                    pageNum={this.props.allIndex}
                    curIndex={this.props.curIndex}
                />
                </Box>
                <Spacer />
                <Box position='relative' right='30px' w='70px' h='30px' >
                <center><NextButton
                    isLast={nextFlag}
                /></center>
                </Box>
            </Flex>
        );
    }
}

class PrevButton extends React.Component {
    render() {
        if(this.props.isFirst) {
            return(
                <Box/>
            );
        }else {
            return(
                <Button  borderRadius='15%'>
                    Prev
                </Button>
            );
        }
    }
}

class NextButton extends React.Component {
    render() {
        if(this.props.isLast) {
            return(
                <Box/>
            );
        }else {
            return(
                <Button  borderRadius='15%'>
                    Next
                </Button>
            );
        }
    }
}
class PageList extends React.Component {
    render() {
        let componentList = []
        //左边是否需要省略号
        if(this.props.curIndex-3>0) {
            componentList.push(<Button variant="unstyled">...</Button>);
        }
        //添加标号
        for(let i = this.props.curIndex-3; i<this.props.curIndex; i++) {
            if(i>0) {
                componentList.push(
                    <Button w='70px' h='30px'>
                        <center>{i}</center>
                    </Button>)
            }
        }
        //添加当前标号
        componentList.push(
            <Button w='70px' h='30px' bg='gray.300'>
                <center>{this.props.curIndex}</center>
            </Button>)
        //添加标号
        for(let i = this.props.curIndex+1; i<this.props.pageNum && i<this.props.curIndex+4 ; i++) {
            if(i>=0) {
                componentList.push(
                    <Button w='70px' h='30px'>
                        <center>{i}</center>
                    </Button>)
            }
        }
        //右边是否需要省略号
        if(this.props.curIndex+3 < this.props.pageNum) {
            componentList.push(<Button variant="unstyled"><center>...</center></Button>);
        }
        return (
            <Box>
                {componentList}
            </Box>
        );
    }
}
export default PageSelect;
import * as React from 'react'
import { 
    Box,Flex,Spacer,Button,Text
} from '@chakra-ui/react';
class PageSelect extends React.Component {
    render() {
        return(
            <Flex>
                <Box position='relative' left='30px' w='70px' h='30px' >
                <center><PrevButton
                    isFirst={false}
                />
                </center>
                </Box>
                <Spacer />
                <Box position='relative'>
                <PageList
                    pageNum={6}
                />
                </Box>
                <Spacer />
                <Box position='relative' right='30px' w='70px' h='30px' >
                <center><NextButton
                    isLast={false}
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
        
        if(this.props.pageNum <= 7) {
            let arr = [undefined*this.props.pageNum]
            for(let i = 0; i<this.props.pageNum; ++i) {
                arr[i] = i+1;
            }
            const ButtonComponents = arr.map((key)=>(
                <Button w='70px' h='30px'>
                    <center>{key}</center>
                </Button>
            ));
            return(
                <Box>
                {ButtonComponents}
                </Box>
            );
        }else {
            let arr1 = [undefined*3];
            for(let i = 0; i<=2; ++i) {
                arr1[i] = i+1;
            }
            const ButtonComponents1 = arr1.map((key)=>(
                <Button w='70px' h='30px'>
                    <center>{key}</center>
                </Button>
            ));
            let arr2 = [undefined*4];
            for(let i = this.props.pageNum-3; i<=this.props.pageNum; ++i) {
                arr2[i-this.props.pageNum+3] = i;
            }
            
            const ButtonComponents2 = arr2.map((key)=>(
                <Button w='70px' h='30px'>
                    <center>{key}</center>
                </Button>
            ));
            return(
                <Box>
                {ButtonComponents1}
                <Text>...</Text>
                {ButtonComponents2}
                </Box>
            );
        }
        
    }
}
export default PageSelect;
/**
 * @author {小倪酱}
 * @date 2023/5/24
 */
import * as React from 'react'
import {
    Box,
    Button,
    Flex,
    Link,
    Text,
} from '@chakra-ui/react'
import { CalendarIcon, } from '@chakra-ui/icons'
import { removeFile } from '../Api/removeFile';
import { useSession } from '../utils/user';
class EventList extends React.Component {
    render() {
        let hashTable = {};
        for(let event of this.props.events){
            if(event.year in hashTable) {
                hashTable[event.year].push(event);
            }else {
                hashTable[event.year] = [event];
            }
        }
        const EventPageComponents = Object.keys(hashTable).map((key) => 
            <EventPage
                year = {key}
                events={hashTable[key]}
                UpdateCompoments={this.props.UpdateCompoments}
            />
        );
        return(
            <Flex direction="column"  position='relative' >
                {EventPageComponents}
            </Flex>
        );
    }
}
class EventPage extends React.Component {
    render() {
        const EventComponents = this.props.events.map((event) => (

            <Event
                id={event.id}
                date={event.day}
                name={event.title}
                category={event.tag}
                url={'Article?id='+event.id+'&title='+event.title}
                UpdateCompoments={this.props.UpdateCompoments}
            />
        ));
        return(
            <Box>
            <Flex direction="column" w="100%" boxShadow='dark-lg' position='relative' borderRadius="2%">
                <CalendarIcon w='30px' h='30px' position='relative' left='10px' top='25px'/>
                <Box boxShadow='dark' bg='blue.300' w="40px" left='50px' position='relative' borderRadius='20%'>
                    <Text color='white'>{this.props.year}</Text>
                </Box>
                <Box w="0px" h="20px"/>
                {EventComponents}
            </Flex>
            <Box w="0px" h="20px"/>
            </Box>
        );
    }
}
const Event = (props) => {
    const session = useSession();
    function removeArticle(){
        if(session.user != null) {
            let formData = new FormData();
            formData.append('id',props.id)
            var msg = removeFile('removeFile/','POST',formData);
            console.log(msg)
            props.UpdateCompoments()
        }else {
            alert('请先进行用户登录！')
        }
    }
    return (
        <Flex alignItems="flex-start" mb={0}  position='relative' overflow='visible' left='50px'>
            <Box
                w="2px"
                h="90px"
                bg="blue.300"
                position="relative"
                top="-20px"
                left="12px"
                transform="translateX(-50%)"
                zIndex="0"
            ></Box>
            <Box
                w="20px"
                h="20px"
                borderRadius="50%"
                bg="blue.300"
                zIndex="1"
            ></Box>
            <Box ml={4}>
                <Box fontSize="lg" fontWeight="bold">
                {props.date}
                </Box>
                <Link mt={1} display='block' fontSize='lg' lineHeight='normal' fontWeight='semibold' href={props.url} >
                {props.name}
                </Link>
                <Box>{props.category}</Box>
            </Box>
            <Button left='1500px' position='absolute' onClick={removeArticle}>delete</Button>
        </Flex>
        
    );
}
export default EventList;

import * as React from 'react'
import {
    Box,
    Flex,
    Link,
    Text,
} from '@chakra-ui/react'
import { CalendarIcon, } from '@chakra-ui/icons'
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
                date={event.date}
                name={event.name}
                category={event.category}
            />
        ));
        return(
            <Box>
            <Flex direction="column" w="100%" boxShadow='dark-lg' position='relative' borderRadius="2%">
                <CalendarIcon w='30px' h='30px' position='relative' left='10px' top='25px'/>
                <Box boxShadow='dark' bg='black' w="40px" left='50px' position='relative' borderRadius='20%'>
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
class Event extends React.Component {
    render() {
        return (
            <Flex alignItems="flex-start" mb={0}  position='relative' overflow='visible' left='50px'>
            <Box
                w="2px"
                h="90px"
                bg="black"
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
            bg="black"
            zIndex="1"
          ></Box>
          <Box ml={4}>
            <Box fontSize="lg" fontWeight="bold">
              {this.props.date}
            </Box>
            <Link mt={1} display='block' fontSize='lg' lineHeight='normal' fontWeight='semibold' href='#' >
              {this.props.name}
            </Link>
            <Box>{this.props.category}</Box>
          </Box>
          </Flex>
            
        );
    }
}
export default EventList;

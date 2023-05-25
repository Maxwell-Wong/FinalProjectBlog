import * as React from 'react'
import {
    Box,
    Flex,
    Link,
    Text,
} from '@chakra-ui/react'
import { CalendarIcon, } from '@chakra-ui/icons'
class EventList extends React.Component {
    state = {
        events:[
            {
                date:'05-02',
                name:'ROS从入门到入土',
                category:'essay'
            },
            {
                date:'05-03',
                name:'C++从出土到下葬',
                category:'essay'
            },
            {
              date:'05-04',
              name:'python从入门到放弃',
              category:'essay'
            },
            {
                date:'05-05',
                name:'React从开始到放弃',
                category:'essay'
            },
            {
              date:'05-06',
              name:'HappyBirthday',
              category:'essay'
            },
            {
              date:'05-07',
              name:'HappyBirthday',
              category:'essay'
            },
        ],
    };
    render() {
        const EventComponents = this.state.events.map((event) => (
            <Event
                date={event.date}
                name={event.name}
                category={event.category}
            />
        ));
        return(
            <Flex direction="column" mx="auto" boxShadow='dark-lg' position='relative' >
              <CalendarIcon w='30px' h='30px' position='relative' left='10px' top='25px'/>
              <Box boxShadow='dark' bg='black' w="40px" left='50px' position='relative' borderRadius='20%'>
                <Text color='white'>2023</Text>
              </Box>
              <Box w="0px" h="20px"/>
              {EventComponents}
              
            </Flex>
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

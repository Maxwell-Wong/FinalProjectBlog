import * as React from 'react'
import EventList from '../Components/event';
import PageSelect from '../Components/SelectButton';
import { 
    Box,VStack
} from '@chakra-ui/react';
class ArchivePage extends React.Component {
    
    render() {
        return(
            <Box w="100%" minH="100%" p="5">
                <VStack spacing="11%"  position='relative' >
                    <Box w='80%' h='90%' position='relative' top='30px'>
                        <EventList/>
                    </Box>
                    <Box w='80%' h='10%'  position='relative' bottom='50px'>
                        <PageSelect/>
                    </Box>
                </VStack>
                
                
            </Box>
        );
    }
}
export default ArchivePage;

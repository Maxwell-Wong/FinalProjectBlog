import React from 'react'
import EventList from '../Components/event';
import PageSelect from '../Components/SelectButton';
import { 
    Box,VStack
} from '@chakra-ui/react';
class ArchivePage extends React.Component {
    state = {
        curIndex:2,
        events:[
            {
                year:'2023',
                date:'05-02',
                name:'ROS从入门到入土',
                category:'essay',
                url:'#',
            },
            {
                year:'2023',
                date:'05-03',
                name:'C++从出土到下葬',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-04',
                name:'python从入门到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-05',
                name:'React从开始到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-06',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-07',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
            {
                year:'2023',
                date:'05-02',
                name:'ROS从入门到入土',
                category:'essay',
                url:'#',
            },
            {
                year:'2023',
                date:'05-03',
                name:'C++从出土到下葬',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-04',
                name:'python从入门到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-05',
                name:'React从开始到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-06',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-07',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
            {
                year:'2023',
                date:'05-02',
                name:'ROS从入门到入土',
                category:'essay',
                url:'#',
            },
            {
                year:'2023',
                date:'05-03',
                name:'C++从出土到下葬',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-04',
                name:'python从入门到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-05',
                name:'React从开始到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-06',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-07',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
            {
                year:'2023',
                date:'05-02',
                name:'ROS从入门到入土',
                category:'essay',
                url:'#',
            },
            {
                year:'2023',
                date:'05-03',
                name:'C++从出土到下葬',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-04',
                name:'python从入门到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-05',
                name:'React从开始到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-06',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-07',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
            {
                year:'2023',
                date:'05-02',
                name:'ROS从入门到入土',
                category:'essay',
                url:'#',
            },
            {
                year:'2023',
                date:'05-03',
                name:'C++从出土到下葬',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-04',
                name:'python从入门到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-05',
                name:'React从开始到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-06',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-07',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
            {
                year:'2023',
                date:'05-02',
                name:'ROS从入门到入土',
                category:'essay',
                url:'#',
            },
            {
                year:'2023',
                date:'05-03',
                name:'C++从出土到下葬',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-04',
                name:'python从入门到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-05',
                name:'React从开始到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-06',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-07',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
            {
                year:'2023',
                date:'05-02',
                name:'ROS从入门到入土',
                category:'essay',
                url:'#',
            },
            {
                year:'2023',
                date:'05-03',
                name:'C++从出土到下葬',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-04',
                name:'python从入门到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-05',
                name:'React从开始到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-06',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-07',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
            {
                year:'2023',
                date:'05-02',
                name:'ROS从入门到入土',
                category:'essay',
                url:'#',
            },
            {
                year:'2023',
                date:'05-03',
                name:'C++从出土到下葬',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-04',
                name:'python从入门到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-05',
                name:'React从开始到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-06',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-07',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
            {
                year:'2023',
                date:'05-02',
                name:'ROS从入门到入土',
                category:'essay',
                url:'#',
            },
            {
                year:'2023',
                date:'05-03',
                name:'C++从出土到下葬',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-04',
                name:'python从入门到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-05',
                name:'React从开始到放弃',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-06',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
            {
                year:'2022',
                date:'05-07',
                name:'HappyBirthday',
                category:'essay',
                url:'#',
            },
        ]
    };
    UpdateCurIndex = (index) => {
        this.setState({curIndex:index});
    }

    render() {
        //每个页面10条
        console.log(this.state.events.length);
        let eventList = []
        for(let i = (this.state.curIndex-1)*10; i<(this.state.curIndex)*10-1 && i<this.state.events.length; i++) {
            eventList.push(this.state.events[i]);
        }
        const pageNum = Math.ceil(this.state.events.length / 10);
        return(
            <Box w="100%" minH="100%" p="5">
                <VStack spacing="11%"  position='relative' >
                    <Box w='80%' h='90%' position='relative' top='30px'>
                        <EventList
                            events = {eventList}
                        />
                    </Box>
                    <Box w='80%' h='10%'  position='relative' bottom='50px'>
                        <PageSelect
                            curIndex = {this.state.curIndex}
                            allIndex = {pageNum}
                            selectPage = {this.UpdateCurIndex}
                        />
                    </Box>
                </VStack>
                
                
            </Box>
        );
    }
}
export default ArchivePage;

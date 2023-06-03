/**
 * @author {小倪酱}
 * @date 2023/5/24
 */
import React from 'react'
import EventList from '../Components/event';
import PageSelect from '../Components/SelectButton';
import  {getEventList}  from '../Api/EventApi';
import { getLikeTitleList } from '../Api/getLikeTitleList';
import { getTagLikeList } from '../Api/getTagLikeList';
import { withRouter } from '../utils/withRouter';
import { 
    Box,VStack
} from '@chakra-ui/react';
class ArchivePage extends React.Component {
    
    
    location = this.props;
    state = {
        curIndex:1,
        events:[],
    };
    //重新获取数据，渲染组件
    UpdatePage=()=>{
        this.getData();
    }
    //第一次挂载读取数据
    componentDidMount() {
        this.getData();
    }
    async getData() {
        var msg;
        if(this.location.location.search) {
            const params = this.location.location.search.split('?')[1].split('&').reduce((acc, val) => {
                const [key, value] = val.split('=');
                acc[key] = value;
                return acc;
            }, {});
            console.log(params)
            if(params.likeTitle) {
                const likeTitle = decodeURIComponent(params.likeTitle);
                let formData = {
                    likeTitle:likeTitle
                };
                msg = await getLikeTitleList('getTitleLikeList/', 'get',formData);
            }else{
                const taglike = decodeURIComponent(params.taglike);
                console.log(taglike);
                let formData = {
                    taglike:taglike
                };
                msg = await getTagLikeList('TagLikeList/', 'get',formData);
            }
        } else {
            msg = await getEventList('ArticleList/', 'get');
        }
        console.log((JSON.parse(msg.data)))
        if (msg.status == 200) {
            let curEventList = [];
            const arr = JSON.parse(msg.data);
            console.log('200');
            arr.forEach(function(element,index){
                curEventList.push(element);
            });
            this.setState({ events:curEventList });
            console.log(curEventList);
        }
    }
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
                            UpdateCompoments={this.UpdatePage}
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
export default withRouter(ArchivePage);

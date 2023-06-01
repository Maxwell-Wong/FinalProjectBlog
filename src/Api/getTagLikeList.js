import request from '../utils/request'
 
 
export function getTagLikeList(url, method,data) {
    return request({
        url: url,
        method: method,
        params:data
    })
}
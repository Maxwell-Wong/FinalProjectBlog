import request from '../utils/request'
 
 
export function getEventList(url, method) {
    return request({
        url: url,
        method: method,
    })
}
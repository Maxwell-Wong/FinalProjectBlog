import request from '../utils/request'
 
 
export function getLikeTitleList(url, method,data) {
    return request({
        url: url,
        method: method,
        params:data
    })
}
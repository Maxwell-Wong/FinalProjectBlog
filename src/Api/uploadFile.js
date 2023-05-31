import request from '../utils/request'
 
 
export function uploadFile(url, method,data) {
    return request({
        url: url,
        method: method,
        data:data
    })
}
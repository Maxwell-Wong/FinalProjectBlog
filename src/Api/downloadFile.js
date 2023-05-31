import request from '../utils/request'
 
 
export function downloadFile(url, method,data) {
    return request({
        url: url,
        method: method,
        params:data
    })
}
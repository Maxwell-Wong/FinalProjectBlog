import request from '../utils/request'
 
 
export function removeFile(url, method,data) {
    return request({
        url: url,
        method: method,
        data:data
    })
}

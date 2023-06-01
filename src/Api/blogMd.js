import request from '../utils/request'
 
 
export function blogMd(url, method) {
    return request({
        url: url,
        method: method,
    })
}
import request from '../utils/request'
 
 
export function login(url, method,data) {
    return request({
        url: url,
        method: method,
        data:data
    })
}
import request from '../utils/request'

export function getTagList(url, method) {
    return request({
        url: url,
        method: method,
    })
}
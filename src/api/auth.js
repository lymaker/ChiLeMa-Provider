import request from '@/util/request.js';

export function loginApi(data) {
    return request.post('/auth/login', data);
}

export function logoutApi() {
    return request.delete('/auth/logout');
}
export function checkApi() {
    return request.get('/auth/check');
}

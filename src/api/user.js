import request from '@/util/request.js';

export function checkUsernameApi(username) {
    return request.get('/user/check-username', {
        params: {
            username
        }
    });
}

export function selectApi() {
    return request.get('/user/select');
}

export function createApi(data) {
    return request.post('/user/create', data);
}

export function updateApi(param) {
    return request.put('/user/update', param);
}
import request from '@/util/request.js';

export function generate(type) {
    return request.post('/captcha/generate', {
        type
    });
}

export function verify(param) {
    return request.post('/captcha/verify', param);
}
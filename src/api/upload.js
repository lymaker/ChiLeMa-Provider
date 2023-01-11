import request from '@/util/request.js';

export function imageApi(file,) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('contentType', file.type);
    return request.post('/upload/image', formData, {
        'Content-type' : 'multipart/form-data',
    });
}
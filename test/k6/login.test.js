import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {

    iterations: 1,

};

export default function () {
    const url = 'http://localhost:3000/users/login';

    const payload = JSON.stringify({
        'username': 'julio',
        'senha': '123456',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };


    const res = http.post(url, payload, params);
    console.log('Status:', res.status);
    console.log('Body:', res.body);

    check(res, {
        'Validar que o Status é 200': (r) => r.status === 200,
        
    })


    sleep(1);

};
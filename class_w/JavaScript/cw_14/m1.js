export class Car {
    constructor(name) {
        this.name = name;
    }
    info(){
        return this.name;
    }
}
export function helloFromModuleOneFromTwo(){
    console.log('Hello');
}


export class DataFetch{
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async request(path, method = 'GET', body = null, headers = {}) {
        const config = {
            method,
            headers: {
            'Content-Type': 'application/json', ...headers,
            }
        };
        if(body){
            config.body = JSON.stringify(body);
        }
        const response = await fetch(`${this.baseUrl}/${path}`, config)

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    }
    get(path, headers) {
        return this.request(path, 'GET', null,headers)
    }

    put(path, body,header ){
        return this.request(path, 'PUT', body,header)
    }

    post(path, body, headers){
        return this.request(path, 'POST', body,headers)
    }
    delete(path, headers){
        return this.request(path, 'DELETE', null,headers)
    }
}

export const api = new DataFetch('https://65dcf161e7edadead7ed27ba.mockapi.io');


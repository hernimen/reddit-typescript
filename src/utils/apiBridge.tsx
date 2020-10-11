import axios, { Method } from 'axios';
interface Options {
    headers?: object;
    params?: object;
    data?: object;
}

const OptionsDefaults: Options = {
    headers: {},
    params: {},
}

async function request<T = any>(
    method: Method,
    path: string,
    headers: object = {},
    params: object = {}
): Promise<T> {
    return axios.request({
        method,
        url: path,
        headers,
        params,
    })
}
export default class ApiBridge {
    public static get<T = any>(path: string, options: Options = OptionsDefaults): Promise<T> {
        return request('GET', path, options.headers, options.params);
    }
}
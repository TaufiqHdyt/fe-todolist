import { baseApi } from '@/services';

const api = `/auth`;

const login = (body) => baseApi.post(`${api}/login`, body);

export { login };

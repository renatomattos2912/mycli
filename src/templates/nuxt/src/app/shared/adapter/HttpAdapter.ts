import axios from 'axios';

interface GetParams {
  path: string;
  queryString?: string;
  headers?: object;
}

interface PostParams {
  path: string;
  queryString?: string;
  headers?: object;
  body?: any;
}

export interface IHttpAdapter {
  get(p: GetParams): Promise<any>;
  post(p: PostParams): Promise<any>;
  // put(request?: any): Promise<any>;
  // delete(request?: any): Promise<any>;
}

export class HttpAdapter implements IHttpAdapter {
  private baseUrl: string;
  private initialHeaders: object;

  constructor(baseUrl: string, initialHeaders?: object) {
    this.baseUrl = baseUrl;
    this.initialHeaders = initialHeaders || {};
  }

  post(p: PostParams): Promise<any> {
    const qs = p.queryString ? `?${p.queryString}` : '';
    const urlCall = `${this.baseUrl}${p.path}${qs}`;
    const headers = { ...this.initialHeaders, ...p.headers };
    return axios.post(urlCall, p.body, { headers, timeout: 240000 });
  }

  get(p: GetParams): Promise<any> {
    const qs = p.queryString ? `?${p.queryString}` : '';
    const urlCall = `${this.baseUrl}${p.path}${qs}`;
    const headers = { ...this.initialHeaders, ...p.headers };
    return axios.get(urlCall, { headers });
  }
}

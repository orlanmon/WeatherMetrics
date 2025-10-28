import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { ResponseResult } from './responseresult';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  public baseApiUrl: string = "";

  constructor(private http: HttpClient) { }

  /*
  public get<T>(url: string, options?: { token?: string }): Observable<T> {
    const uri = this.fullUri(url);
    const result = this.http.get<T>(uri, { headers: this.headers_json(options?.token) });
    return result;
  }

  public post<T>(url: string, body: any, options?: { token?: string }): Observable<T> {
    const uri = this.fullUri(url);
    const result = this.http.post<T>(uri, body, { headers: this.headers_json(options?.token) });
    return result;
  }

  public put<T>(url: string, body: any, options?: { token?: string }): Observable<T> {
    const uri = this.fullUri(url);
    const result = this.http.put<T>(uri, body, { headers: this.headers_json(options?.token) });
    return result;
  }
  */


  public get<T>(url: string): Observable<T> {
    const uri = this.fullUri(url);
    const result = this.http.get<T>(uri);
    return result;
  }

  public get_response<T>(url: string): Observable<ResponseResult<T>> {
    
    const uri = this.fullUri(url);
    
    var result = this.http.get<T>(uri, { observe: 'response' })
      .pipe(map((response: HttpResponse<T>) => {
        const responseResult: ResponseResult<T> = { statusCode: response.status, data: response.body };
        return responseResult;
      }))

    return result;
  }

  public post<T>(url: string, body: any ): Observable<T> {
    const uri = this.fullUri(url);
    const result = this.http.post<T>(uri, body);
    return result;
  }

  public post_response<T>(url: string, body: any ): Observable<ResponseResult<T>> {
    
    const uri = this.fullUri(url);

     var result = this.http.post<T>(uri, body, { observe: 'response' })
      .pipe(map((response: HttpResponse<T>) => {
        const responseResult: ResponseResult<T> = { statusCode: response.status, data: response.body };
        return responseResult;
      }))

    return result;
  }

  public put<T>(url: string, body: any): Observable<T> {
    const uri = this.fullUri(url);
    const result = this.http.put<T>(uri, body);
    return result;
  }


  public put_response<T>(url: string, body: any): Observable<ResponseResult<T>> {

    const uri = this.fullUri(url);
    
     var result = this.http.put<T>(uri, body, { observe: 'response' })
      .pipe(map((response: HttpResponse<T>) => {
        const responseResult: ResponseResult<T> = { statusCode: response.status, data: response.body };
        return responseResult;
      }))
    
    return result;
  }


  public delete<T>(url: string): Observable<T> {
    const uri = this.fullUri(url);
    const result = this.http.delete<T>(uri);
    return result;
  }

public delete_response<T>(url: string): Observable<ResponseResult<T>> {
    
    const uri = this.fullUri(url);
    
    var result = this.http.delete<T>(uri, { observe: 'response' })
      .pipe(map((response: HttpResponse<T>) => {
        const responseResult: ResponseResult<T> = { statusCode: response.status, data: response.body };
        return responseResult;
      }))

    return result;
  }

  private fullUri(url: string): string {
    return `${this.baseApiUrl}${url}`;
  }

  private headers_json(token?: string): HttpHeaders {
    return token == undefined ? new HttpHeaders({ "content-type": "application/json" })
      : new HttpHeaders({ "content-type": "application/json", "authorization": `Bearer ${token}` });
  }

}







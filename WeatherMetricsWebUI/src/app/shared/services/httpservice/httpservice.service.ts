import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root' // Or specify a module if you want to limit its scope
})

export class HttpService {

  public baseApiUrl: string = "";

  constructor(private http: HttpClient) { }

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

  private fullUri(url: string): string {
    return `${this.baseApiUrl}${url}`;
  }

  private headers_json(token?: string): HttpHeaders {
    return token == undefined ? new HttpHeaders({ "content-type": "application/json" })
      : new HttpHeaders({ "content-type": "application/json", "authorization": `Bearer ${token}` });
  }

}

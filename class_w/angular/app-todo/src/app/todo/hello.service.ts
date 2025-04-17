import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  urlBase = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  public getPost(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlBase}/posts`).pipe(
      catchError(this.handelError)
    );
  }

  public createPost(post: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.urlBase}`, post).pipe(
      catchError(this.handelError)
    );
  }

  public putPost(post: any): Observable<any[]> {
    return this.http.put<any[]>(`${this.urlBase}`, post).pipe(
      catchError(this.handelError)
    );
  }

  public deletePost(post: any): Observable<any[]> {
    return this.http.delete<any[]>(`${this.urlBase}`).pipe(
      catchError(this.handelError)
    );
  }

  private handelError(error: HttpErrorResponse): Observable<any[]> {

    return throwError(() => new Error(error.message));
  }
}

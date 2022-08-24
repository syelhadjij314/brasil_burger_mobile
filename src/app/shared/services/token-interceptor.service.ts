import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private inject: Injector) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url !== "http://localhost:8000/api/login_check") {
      const token = localStorage.getItem('token');
      request = request.clone({
        setHeaders: {
          "Authorization": 'Bearer ' + token
        }
      });
    }
    return next.handle(request);
  }
}

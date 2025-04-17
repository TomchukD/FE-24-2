import { HttpInterceptorFn } from '@angular/common/http';

export const helloInterceptor: HttpInterceptorFn = (req, next) => {
debugger
  const newparam = req.clone({
    url :'https://65dcf161e7edadead7ed27ba.mockapi.io/Orders',
  })
  return next(newparam);
};

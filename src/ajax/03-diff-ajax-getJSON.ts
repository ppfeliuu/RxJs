import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const url = "https://httpbin.org/delay/1";

const getError = (err: AjaxError) => {
  console.warn("err: ", err.message);
  return of({
    ok: false,
    usuarios: [],
  });
};

/* const obs$ = ajax.getJSON(url).pipe(catchError(getError));
const obs2$ = ajax(url).pipe(catchError(getError)); */

/* obs$.subscribe((data) => console.log("getJSON", data));
obs2$.subscribe((data) => console.log("ajax", data)); */

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

obs$.pipe(catchError(getError)).subscribe({
  next: (val) => console.log("next:", val),
  error: (err) => console.warn("error en subs:", err),
  complete: () => console.log("complete"),
});

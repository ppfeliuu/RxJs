import { throwError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { map, pluck, catchError } from "rxjs/operators";

const url = "https://api.github.com/users?per_page=5";

const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
};

const getError = (err: AjaxError) => {
  console.warn("err: ", err.message);
  return of([]);
};

const fetchPromesa = fetch(url);

/* fetchPromesa
  .then(manejaErrores)
  .then((res) => res.json())
  .then((data) => console.log("data", data))
  .catch((err) => console.warn(err)); */

/* ajax(url)
  .pipe(map((res) => res.response))
  .subscribe(console.log); */

ajax(url)
  .pipe(pluck("response"), catchError(getError))
  .subscribe((users) => console.log("users", users));

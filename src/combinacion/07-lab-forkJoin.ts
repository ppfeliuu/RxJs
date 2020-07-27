import { of, interval, forkJoin } from "rxjs";
import { take, delay, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const GITHUB_API = "https://api.github.com/users";
const GITHUB_USER = "ppfeliuu";

// forkJoin(numeros$, intervalo$, letras$).subscribe(console.log);

forkJoin({
  usuario: ajax.getJSON(`${GITHUB_API}/${GITHUB_USER}`),
  repos: ajax
    .getJSON(`${GITHUB_API}/${GITHUB_USER}/repos`)
    .pipe(catchError((err) => of([]))),
  gists: ajax.getJSON(`${GITHUB_API}/${GITHUB_USER}/gists`),
})
  .pipe(catchError((err) => of(err.message)))
  .subscribe((res) => console.log(res));

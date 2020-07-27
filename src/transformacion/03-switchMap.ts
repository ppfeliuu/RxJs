import { GithubUsers } from "../interfaces/github-users.interface";
import { fromEvent, Observable } from "rxjs";
import {
  debounceTime,
  map,
  pluck,
  mergeAll,
  mergeMap,
  switchMap,
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";

const body = document.querySelector("body");
const textInput = document.createElement("input");
const orlderList = document.createElement("ol");
body.append(textInput, orlderList);

//Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
  orlderList.innerHTML = "";
  for (const usuario of usuarios) {
    const li = document.createElement("li");
    const img = document.createElement("img");

    img.src = usuario.avatar_url;
    const anchor = document.createElement("a");
    anchor.href = usuario.html_url;
    anchor.text = "Ver...";
    anchor.target = "_blank";

    li.append(img);
    li.append(usuario.login + "");
    li.append(anchor);

    orlderList.append(li);
  }
};

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$.pipe(
  debounceTime<KeyboardEvent>(500),
  pluck<KeyboardEvent, string>("target", "value"),
  mergeMap<string, Observable<GithubUsers>>((texto) => {
    return ajax.getJSON(`https://api.github.com/search/users?q=${texto}`);
  }),
  pluck<GithubUsers, GithubUser[]>("items")
);
//.subscribe(mostrarUsuarios);
/* .subscribe((users) => {
    console.log(users[0].login);
  }); */

const url = "https://httpbin.org/delay/1?arg=";

input$
  .pipe(
    pluck("target", "value"),
    switchMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);

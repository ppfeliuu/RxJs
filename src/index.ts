import { fromEvent } from "rxjs";
import { debounceTime, map, pluck, mergeAll } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const body = document.querySelector("body");
const textInput = document.createElement("input");
const orlderList = document.createElement("ol");
body.append(textInput, orlderList);

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$
  .pipe(
    debounceTime(500),
    pluck("target", "value"),
    map((texto) => {
      return ajax.getJSON(`https://api.github.com/search/users?q=${texto}`);
    }),
    mergeAll(),
    pluck("items")
  )
  .subscribe((res) => {
    console.log(res);
  });

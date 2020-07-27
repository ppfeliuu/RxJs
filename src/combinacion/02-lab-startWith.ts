import { of } from "rxjs";
import { startWith, endWith } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const loadingDiv = document.createElement("div");
loadingDiv.classList.add("loading");
loadingDiv.innerHTML = "Cargando...";

const body = document.querySelector("body");

//stream
ajax
  .getJSON("https://reqres.in/api/users?delay=3")
  .pipe(startWith(true))
  .subscribe((res) => {
    if (res === true) {
      body.append(loadingDiv);
    } else {
      document.querySelector(".loading").remove();
    }
    console.log(res);
  });

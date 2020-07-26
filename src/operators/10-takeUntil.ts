import { interval, fromEvent } from "rxjs";
import { takeUntil, skip, tap } from "rxjs/operators";

const boton = document.createElement("button");
boton.innerHTML = "Detener";

document.querySelector("body").append(boton);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(boton, "click");

const clickBtn$ = fromEvent(boton, "click").pipe(
  tap(() => console.log("Antes de skip")),
  skip(1),
  tap(() => console.log("Despues de skip"))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (val) => console.log("next: ", val),
  complete: () => console.log("Complete"),
});

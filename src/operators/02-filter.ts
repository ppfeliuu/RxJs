import { range, from, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

/* range(1, 10)
  .pipe(filter((val) => val % 2 === 0))
  .subscribe(console.log); */

range(1, 10).pipe(
  filter((val, i) => {
    console.log("index ", i);
    return val % 2 === 0;
  })
);
//.subscribe(console.log);

interface Personaje {
  tipo: String;
  nombre: String;
}

const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Superman",
  },
  {
    tipo: "villano",
    nombre: "Joker",
  },
];

from(personajes)
  .pipe(filter((p) => p.tipo !== "heroe"))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code),
  filter((key) => key === "Enter")
);

keyup$.subscribe(console.log);

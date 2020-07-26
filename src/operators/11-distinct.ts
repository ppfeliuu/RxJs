import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of(1, 1, 2, 1, 1, 3, 3, 3, 4, 5, 2, 3, 4);

numeros$.pipe(distinct()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: "Megaman",
  },
  {
    nombre: "X",
  },
  {
    nombre: "Zero",
  },
  {
    nombre: "Megaman",
  },
  {
    nombre: "Megaman",
  },
  {
    nombre: "Dr.Willy",
  },
  {
    nombre: "Megaman",
  },
];

from(personajes)
  .pipe(distinct((p) => p.nombre))
  .subscribe(console.log);

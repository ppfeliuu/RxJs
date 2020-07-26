import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalAcc = (acc, cur) => acc + cur;

from(numbers).pipe(reduce(totalAcc)).subscribe(console.log);

from(numbers).pipe(scan(totalAcc)).subscribe(console.log);

// Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  {
    id: "aa",
    autenticado: false,
    token: null,
  },
  {
    id: "bb",
    autenticado: true,
    token: "asd",
  },

  {
    id: "cc",
    autenticado: true,
    token: "asda1213",
  },
];

const state$ = from(user).pipe(
  scan<Usuario>(
    (acc, cur) => {
      return { ...acc, ...cur };
    },
    { edad: 33 }
  )
);

const id$ = state$.pipe(map((state) => state));

id$.subscribe(console.log);

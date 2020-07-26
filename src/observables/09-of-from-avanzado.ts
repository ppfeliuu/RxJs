import { of, from } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const iterable = miGenerador();

/* for (let id of iterable) {
  console.log(id);
} */
from(iterable).subscribe(observer);

//const source$ = from([1, 2, 3, 4, 5]);
//const source$ = of(...[1, 2, 3, 4, 5]);
//const source$ = from("Pedro");
//source$.subscribe(observer);

const source$ = from(fetch("https://api.github.com/users/klerith"));
source$.subscribe(async (res) => {
  const data = await res.json();
  console.log(data);
});

import { of, range, asyncScheduler } from "rxjs";

const src$ = range(1, 5, asyncScheduler);

console.log("Inicio");
src$.subscribe(console.log);
console.log("fin");

import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log(value),
  error: (error) => console.warn(error),
  complete: () => console.log("Observer completed"),
};
//const obs$ = Observable.create();
const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo1");

  /* const a = undefined;
  a.nom = "kksksk"; */
  subs.complete();

  subs.next("Hola");
  subs.next("Mundo");
});

obs$.subscribe(observer);

/* 
obs$.subscribe(
  (valor) => console.log(valor),
  (error) => console.warn(error),
  () => console.log("Completed")
); */

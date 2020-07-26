import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.log("Observer completed"),
};

const intervalos$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => {
    subs.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(intervalID);
    console.log("Intervalo destroy");
  };
});

/* const subs1 = intervalos$.subscribe((rnd) => console.log("subs1", rnd));
const subs2 = intervalos$.subscribe((rnd) => console.log("subs2", rnd)); */

/* 
1.- Multi cast
2.- Es un Observer
3.- Next, error, complete

*/

const subject$ = new Subject();
const subscription = intervalos$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);

  subject$.complete();

  subscription.unsubscribe();
}, 3000);

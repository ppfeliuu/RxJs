import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.log("Observer completed"),
};

const intervalos$ = new Observable<number>((subscriber) => {
  let i = 0;
  const interval = setInterval(() => {
    i++;
    subscriber.next(i);
    console.log(i);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("Set Interval stop");
  };
});

const subcription1 = intervalos$.subscribe(observer);
const subcription2 = intervalos$.subscribe(observer);
const subcription3 = intervalos$.subscribe(observer);

subcription1.add(subcription2).add(subcription3);

setTimeout(() => {
  subcription1.unsubscribe();
  /*   subcription2.unsubscribe();
  subcription3.unsubscribe(); */
}, 6000);

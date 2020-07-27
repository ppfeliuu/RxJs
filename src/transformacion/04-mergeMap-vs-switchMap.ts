import { mergeMap, switchMap } from "rxjs/operators";
import { fromEvent, interval } from "rxjs";

const click$ = fromEvent(document, "click");
const interval$ = interval(1000);

click$.pipe(switchMap(() => interval$)).subscribe(console.log);

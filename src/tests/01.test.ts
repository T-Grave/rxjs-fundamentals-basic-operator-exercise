import { observable$ } from "../01";
import { marbles } from "rxjs-marbles/jest";

it(
  "must return an observable with values 1, 2, 3",
  marbles(m => {
    const expected$ = m.cold("(abc|)", { a: 1, b: 2, c: 3 });
    // const expected$ = m.cold("-a-b-c|", { a: 10, b: 20, c: 30 });

    m.expect(observable$).toBeObservable(expected$);
  })
);

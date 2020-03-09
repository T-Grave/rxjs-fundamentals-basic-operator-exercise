import { observable$ } from "../10";
import { marbles } from "rxjs-marbles/jest";

it(
  "must return an observable with values: 'FOO', 'FOO', 'FOO'",
  marbles(m => {
    const expected$ = m.cold("(abc|)", { a: "FOO", b: "FOO", c: "FOO" });

    m.expect(observable$).toBeObservable(expected$);
  })
);

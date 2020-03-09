import { of } from "rxjs";
import { skip } from "rxjs/operators";

// TODO: Skip the first 2 values

const source$ = of(1, 2, 3);

export const observable$ = source$.pipe(skip(2));

import { from } from "rxjs";

// TODO: Turn the elements of the following array into an observable:

const array = [1, 2, 3];

export const observable$ = from(array);

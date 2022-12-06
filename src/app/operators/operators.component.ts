import { Component, OnInit } from '@angular/core';
import {
  catchError, filter, find,
  first,
  interval,
  last,
  map,
  mergeMap,
  of,
  pluck,
  reduce,
  retry,
  scan,
  take,
  tap,
  throwError
} from "rxjs";

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const newOf = of(1,2,3,4,5,6,7,8,9,10);
    //
    // of({
    //   data :{
    //     name: 'Vlad',
    //     age: 30
    //   }
    // })
    //   .pipe(
    //     pluck('data'),
    //     pluck('name'),
    //   )
    //   .subscribe((v) => console.log(v));

    // of(1, 2, 3)
    //   .pipe(
    //     // scan((acc, value) => {
    //     //   return acc + value;
    //     // }, 0)
    //     reduce((acc, value) => {
    //       return acc + value;
    //     }, 0)
    //   )
    //   .subscribe((v) => console.log(v));


    // of(1, 2, 3, 4, 5)
    //   .pipe(
    //     map(n => {
    //       if (n === 4) {
    //         throw 'four!';
    //       }
    //       return n;
    //     }),
    //     catchError(err =>  of(err))
    //   )
    //   .subscribe(x => console.log(x));


    // of(1, 2, 3, 4, 5)
    //   .pipe(
    //     map(n => {
    //       if (n === 4) {
    //         throw 'four!';
    //       }
    //       return n;
    //     }),
    //     catchError((err, caught) => caught),
    //     take(30)
    //   )
    //   .subscribe(x => console.log(x));


    // const source = interval(1000);
    // const result = source.pipe(
    //   mergeMap(val => val > 5 ? throwError(() => 'Error!') : of(val)),
    //   retry(2) // retry 2 times on error
    // );
    //
    // result.subscribe({
    //   next: value => console.log(value),
    //   error: err => console.log(`${ err }: Retried 2 times then quit!`)
    // });


    //
    // of(Math.random()).pipe(
    //   tap( (res) => {
    //     console.log('tap', res);
    //   }),
    //   map(n => n > 0.5 ? 'big' : 'small')
    // ).subscribe(console.log);


    // of(1, 2, 3, 4, 5)
    //   .pipe(
    //     // filter(n => n % 2 === 1),
    //     find(n => n === 3),
    //   )
    //   .subscribe(x => console.log(x));
  }

}

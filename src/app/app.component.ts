import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {from, Observable, of, fromEvent, map, tap, interval, timer, range} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';

  @ViewChild('canvasEl') canvasEl!: ElementRef;
  @ViewChild('button') button!: ElementRef;

  ngOnInit() {

    // const stream$ = of(1, 2, 3, 4, 5);
    // const stream$ = from([1, 2, 3, 4, 5, 6, 7, 8]);
    //
    // stream$.subscribe((value) => {
    //     console.log(value);
    //   }
    // )

    // const promise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('Promise resolved');
    //   }, 2000);
    // })
    //
    // promise.then((value) => {
    //   console.log(value);
    // })
    //   .catch((error) => {
    //     console.log(error);
    //   })


    // const stream$ = new Observable((observer) => {
    //   setTimeout(() => {
    //     observer.next('Data after 5000 sec');
    //   }, 5000)
    //
    //   setTimeout(() => {
    //     observer.next('Data after 2000 sec');
    //   }, 2000)
    //
    //   observer.next('Hello');
    //   observer.next('World');
    //   observer.next('from');
    //
    //   // observer.error('Observable Error');
    //   // observer.complete();
    // })
    //
    // stream$.subscribe({
    //   next(value) {
    //     console.log('Next: ',value);
    //   },
    //   error(error) {
    //     console.log('Error: ',error);
    //   },
    //   complete() {
    //     console.log('Completed');
    //   }
    // })

    // interval
    // const interval$ =  interval(1000).subscribe((value) => {
    //   console.log(value);
    // })
    //
    // setTimeout(() => {
    //   interval$.unsubscribe();
    // },5000)

    // timer
    timer(5000).subscribe((value) => {
      console.log(value);
    })

    //range
    const stream$ = range(42, 10)
      .subscribe((value) => {
        console.log(value);
      });
  }

  ngAfterViewInit(): void {
    // const stream$ = fromEvent(this.canvasEl.nativeElement, 'mousemove')
    //   .pipe(
    //     map((event: any) => {
    //       return {
    //         x: event.offsetX,
    //         y: event.offsetY,
    //         context: this.canvasEl.nativeElement.getContext('2d')
    //       }
    //     })
    //   )
    //
    // stream$.subscribe((event: any) => {
    //   console.log(event);
    //   event.context.fillRect(event.x, event.y, 3, 3);
    // })
    //
    //
    // fromEvent(this.button.nativeElement, 'click')
    //   .subscribe(() => {
    //     this.canvasEl.nativeElement.getContext('2d').clearRect(0, 0, 400, 300);
    //   })
  }

}

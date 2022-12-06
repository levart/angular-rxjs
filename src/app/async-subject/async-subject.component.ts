import { Component, OnInit } from '@angular/core';
import {AsyncSubject, ReplaySubject} from "rxjs";

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  usersSubject$ = new AsyncSubject();

  constructor() { }

  ngOnInit(): void {
    this.usersSubject$.next('Hello');
    this.usersSubject$.next('Hello');
    this.usersSubject$.next('Hello');
    this.usersSubject$.next('Hello');
    this.usersSubject$.next('World');
    this.usersSubject$.next('from');
    this.usersSubject$.next('Async Subject');

    this.usersSubject$.subscribe({
      next(value) {
        console.log('Next: ', value);
      },
      error(error) {
        console.log('Error: ', error);
      },
      complete() {
        console.log('Complete');
      }
    })
  }

  addnext() {
    console.log('addnext');
    this.usersSubject$.next('I am new value');
    this.usersSubject$.next('Hello');
    this.usersSubject$.next('World');
    this.usersSubject$.next('from');
    this.usersSubject$.next('Subject');

    setTimeout(() => {
      this.usersSubject$.next('I am new value after 2 sec');
    },2000)
  }

  complete() {
    this.usersSubject$.complete();
  }

  error() {
    this.usersSubject$.error('Error from Subject');
  }

}

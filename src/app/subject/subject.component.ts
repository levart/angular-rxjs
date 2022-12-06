import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  usersSubject$ = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.usersSubject$.next('Hello');
    this.usersSubject$.next('World');
    this.usersSubject$.next('from');
    this.usersSubject$.next('Subject');

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

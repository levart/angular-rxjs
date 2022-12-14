import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { OperatorsComponent } from './operators/operators.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    OperatorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

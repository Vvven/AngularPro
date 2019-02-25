import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscussionareaComponent } from './components/discussionarea/discussionarea.component';
import { MyQuestionAnswerComponent } from './components/discussionarea/my-question-answer/my-question-answer.component';
import { QueAnsDetailComponent } from './components/discussionarea/que-ans-detail/que-ans-detail.component';
import { QueDetailComponent } from './components/discussionarea/que-ans-detail/que-detail/que-detail.component';
import { AnsDetailComponent } from './components/discussionarea/que-ans-detail/ans-detail/ans-detail.component';
import { ToQuestionComponent } from './components/discussionarea/to-question/to-question.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscussionareaComponent,
    MyQuestionAnswerComponent,
    QueAnsDetailComponent,
    QueDetailComponent,
    AnsDetailComponent,
    ToQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

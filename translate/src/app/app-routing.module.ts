import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscussionareaComponent } from './components/discussionarea/discussionarea.component';
    import { MyQuestionAnswerComponent } from './components/discussionarea/my-question-answer/my-question-answer.component';
        import { QueAnsDetailComponent } from './components/discussionarea/que-ans-detail/que-ans-detail.component';
            import { QueDetailComponent } from './components/discussionarea/que-ans-detail/que-detail/que-detail.component';
            import { AnsDetailComponent } from './components/discussionarea/que-ans-detail/ans-detail/ans-detail.component';
        import { ToQuestionComponent } from './components/discussionarea/to-question/to-question.component';


const routes: Routes = [
  {
    path:'discussion',component:DiscussionareaComponent,
    children:[
      { 
        path:'myqueans',component:MyQuestionAnswerComponent
       
      }
    ]
  },
  {
    path:'queansdetail',component:QueAnsDetailComponent,
        children:[
          { path:'myquestion',component:QueDetailComponent },
          { path:'myanswer',component:AnsDetailComponent }
        ] 
  },
  { path:'toquestion',component:ToQuestionComponent },
  
  {
    path:'**',redirectTo:'discussion'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

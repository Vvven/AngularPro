import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-que-ans-detail',
  templateUrl: './que-ans-detail.component.html',
  styleUrls: ['./que-ans-detail.component.css']
})
export class QueAnsDetailComponent implements OnInit {

  // 选择状态（补充，此状态不重要）
  public QAStatus:number=1;

  //提问、回答 列表
  public QueList:any;
  public AnsList:any;



  constructor(public router:Router,public route:ActivatedRoute) { }

  ngOnInit() {

    //补充，不重要

    // console.log(this.route);

    // this.route.params.subscribe((date:any)=>{
    //   console.log(date);
    //   this.QAStatus=date.aid;
    //   console.log(this.QAStatus);
    // })
  }

  //返回我的问答页面
  detailReturn(){

    this.router.navigate(['/discussion/myqueans']);
  }

  //显示提问列表
  detailMyQue(){

    this.QAStatus=1;
    console.log(this.QAStatus);
  }

  //显示回答列表
  detailMyAns(){

    this.QAStatus=2;
    console.log(this.QAStatus);
  }

}

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-my-question-answer',
  templateUrl: './my-question-answer.component.html',
  styleUrls: ['./my-question-answer.component.css']
})
export class MyQuestionAnswerComponent implements OnInit {

  // 个人信息
  public UserId:number=1;
  public UserName:string='qq_sasx';
  public Integral:number=5;
  public MyQueCount:number=0;
  public MyAnsCount:number=0;

  // 个人信息、提问、回答 列表
  public Userinfo:any;
  public QueList:any;
  public AnsList:any;


  constructor(public router:Router,public http:HttpClient) { }

  ngOnInit() {

    this.loadUserInfo();
    this.loadQueList();
    this.loadAnsList();

  }

  // 加载列表
  //加载个人信息
  loadUserInfo(){

    const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
    let api="http://127.0.0.1:4000/showuserinfo";    
    var postdate = {userid:this.UserId,username:"",password:"",email:"",integral:0};
    this.http.post(api,postdate,httpOptions).subscribe((response:any)=>{
      console.log(response);
        this.Userinfo=response;
        
        this.UserName=this.Userinfo.username;
        this.Integral=this.Userinfo.integral;
    })
  }
  // 加载提问列表，取数量
  loadQueList(){

    const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
    let api="http://127.0.0.1:4000/showuserquelist";    
    this.http.post(api,{userid:this.UserId},httpOptions).subscribe((response:any)=>{
      console.log(response);
        this.QueList=response;
        
        this.MyQueCount=response.length;
    })
  }
  // 加载回答列表，取数量
  loadAnsList(){

    const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
    let api="http://127.0.0.1:4000/showuseranslist";    
    this.http.post(api,{userid:this.UserId},httpOptions).subscribe((response:any)=>{
      console.log(response);
        this.AnsList=response;
        
        this.MyAnsCount=response.length;
    })
  }

}

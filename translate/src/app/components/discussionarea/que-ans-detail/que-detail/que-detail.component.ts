import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-que-detail',
  templateUrl: './que-detail.component.html',
  styleUrls: ['./que-detail.component.css']
})
export class QueDetailComponent implements OnInit {

  // 个人信息
  public UserId:number=1;
  public UserName:string='qq_sasx';
  public MyQueCount:number=3;

  // 回答 列表
  public Userinfo:any;
  public QueList:any;

  //显示数量
  public DisplayCount:number=3;

  constructor(public router:Router,public http:HttpClient) { }

  ngOnInit() {

    this.loadUserInfo();
    this.loadQueList();
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
    })
  }
  // 加载提问列表
  loadQueList(){

    const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
    let api="http://127.0.0.1:4000/showuserquelist";    
    this.http.post(api,{userid:this.UserId},httpOptions).subscribe((response:any)=>{
      console.log(response);
        this.QueList=response;
        
        this.MyQueCount=response.length;
    })
  }

  // 加载更多
  loadMore(){
    if(this.DisplayCount<this.MyQueCount)
    this.DisplayCount+=5;
    console.log(this.DisplayCount);
  }

}

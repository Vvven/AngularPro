# AngularPro

#### 前言

怪我忘记push了 。。orz。。我的锅。。

组件名字略长。。有些是简写

可下载Typora观看

**以下为速查信息**

# discussionarea组件下

- 热门、标签、我的问答，头部



## my-question-answer

- 我的问答首页

```
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
```

```
// 加载列表
  //加载个人信息
  loadUserInfo()
  
  // 加载提问列表，取数量
  loadQueList()
  
  // 加载回答列表，取数量
  loadAnsList()
```



## que-ans-detail

- 回答列表与提问列表详情

其实主要是放一个头部

### ans-detail

- 回答列表

```
  // 个人信息
  public UserId:number=1;
  public UserName:string='qq_sasx';
  public MyAnsCount:number=0;

  // 回答 列表
  public Userinfo:any;
  public AnsList:any;

  //显示数量
  public DisplayCount:number=3;
```

```
// 加载列表
  //加载个人信息
  loadUserInfo()
  
  // 加载回答列表
  loadAnsList()
  
  // 加载更多
  loadMore()
```



### que-detail

- 提问列表

```
  // 个人信息
  public UserId:number=1;
  public UserName:string='qq_sasx';
  public MyQueCount:number=3;

  // 提问 列表
  public Userinfo:any;
  public QueList:any;

  //显示数量
  public DisplayCount:number=3;
```

```
// 加载列表
  //加载个人信息
  loadUserInfo()
  
  // 加载提问列表
  loadQueList()
  
  // 加载更多
  loadMore()
```



## to-queation

- 提问页面

```
// 新增主贴信息
  public UserId:number=1;
  public TopicTitle:string='';
  public TopicContent:string='';
  public TopicLabel:any[]=[];
```

```
// 新增主贴函数
  addTopics()
```


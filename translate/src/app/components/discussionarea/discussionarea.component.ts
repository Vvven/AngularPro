import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-discussionarea',
  templateUrl: './discussionarea.component.html',
  styleUrls: ['./discussionarea.component.css']
})
export class DiscussionareaComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

}

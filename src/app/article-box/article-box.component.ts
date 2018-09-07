import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-box',
  templateUrl: './article-box.component.html',
  styleUrls: ['./article-box.component.css']
})
export class ArticleBoxComponent implements OnInit {
  @Input() articleName:string;
  constructor() { }

  ngOnInit() {
  }

}

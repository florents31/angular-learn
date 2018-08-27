import { Component, OnInit } from '@angular/core';
import {TopicService} from "../topic/topic.service";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  current:  any;
  constructor(public service: TopicService) {
    this.service.fetchTopics();
  }

  ngOnInit() {
  }

  onClick(topic){
   this.current = this.service.showComments(topic);
   console.log(this.current);
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {TopicService} from "../topic.service";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input()topic:any;

  newContent = "";

  constructor(public service: TopicService) {

    service.selectedTopic = this.topic

  }

  ngOnInit() {
  }

  onSubmit(topicId) {
    this.service.createComment(this.newContent, topicId);
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {TopicService} from "../topic.service";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input()topic:any;

  constructor(public service: TopicService) {

  }

  ngOnInit() {
  }

}

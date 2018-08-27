import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


export interface User {
  id: number;
  name: string;
  admin?: boolean;
  email: string;
  statement?: string; // Ouch !!
}


export interface Admin extends User {
  statement: string;
}

export interface IComment {
  id: number;
  content: string;
  user?: User;
  anonymous?: boolean;
  tags?: Array<String>;
  score?: number;
}


export interface Topic {
  id?: number;
  title: string;
  content: string;
  comments: Array<IComment>;
  user: User;
  tags?: Array<String>;
}

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  selectedTopic;

  constructor(public http: HttpClient) {
  }

  topics: Topic[] = [];

  fetchTopics() {
    this.http.get<any[]>('http://localhost:8000/api/topics')
      .subscribe((r: any[]) => {
        this.topics = r
        console.log(this.topics)
      })
  }

  showComments(topic){
    this.selectedTopic = topic;
    return this.selectedTopic.comments;
  }

}




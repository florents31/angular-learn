import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user/user.service";


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

  constructor(public http: HttpClient, public service: UserService) {
  }

  topics: Topic[] = [];

  newComment: IComment;

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

  createComment(newContent, topicId){

    this.newComment={
      id:-1,
      content:newContent,
      user:this.service.loggedUser,
      score:0
    }


  this.http.post<any>('http://localhost:8000/api/comments/topic/'+topicId, this.newComment).subscribe(r =>console.log(r));

  }
}




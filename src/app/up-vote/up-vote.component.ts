import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Quote} from "../quote";

@Component({
  selector: 'app-up-vote',
  templateUrl: './up-vote.component.html',
  styleUrls: ['./up-vote.component.scss']
})
export class UpVoteComponent implements OnInit {

  @Output() isRead = new EventEmitter <boolean>();
  upVotes = 0;
  downVotes = 0;

  upVote(){
    this.upVotes = this.upVotes +1;

  }

  downVote(){
    this.downVotes = this.downVotes + 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

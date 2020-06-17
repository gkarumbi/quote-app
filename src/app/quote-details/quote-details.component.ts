import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  quoteRead(complete:boolean){
    this.isRead.emit(complete);
  }
  quoteDelete(complete: boolean) {
    this.isRead.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

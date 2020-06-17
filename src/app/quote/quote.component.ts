import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
   new Quote("William Shakespeare", "To be or not to be is the question","George Karumbi"),
    new Quote("Chinua Achebe","Until the lion tells his side of the story, the tale of the hunt will always glorify the hunter","Liz Nderitu"),
   new Quote ("George .W. Bush", "Fool me once, shame on you fool me twice...well if you get fooled you can't get fooled again","Mjuaji OO1")
  ];

  toggleDetails(index){
    this.quotes[index].showMore = !this.quotes[index].showMore;

  }
  quoteDelete(isRead, index){
    if(isRead){
      this.quotes.splice(index,1);

    }
  }
  addNewQuote(quote){

    let quoteLength = this.quotes.length;
    this.quotes.push(quote);
 
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  @Output() public buscadorEmmiter: EventEmitter<string> = new EventEmitter()

  constructor() {}
  ngOnInit(): void {

  }

  public buscador(value: string){
    console.log(value)
    /* this.buscadorEmmiter.emit(value) */
  }
}

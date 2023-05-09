import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent {

  @Input()
  public placeholder: string = 'Search...';

  @Output()
  onValue = new EventEmitter<string>();

  emitInput(text:string):void {
    this.onValue.emit(text);
  }

}

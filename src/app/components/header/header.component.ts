import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() showSideBar: Boolean
  @Output() showHide: EventEmitter<Boolean> = new EventEmitter<Boolean>()

  constructor() { }

  ngOnInit() {
  }


  hideShow() {

    this.showSideBar = !this.showSideBar
    this.showHide.emit(this.showSideBar)


  }

}

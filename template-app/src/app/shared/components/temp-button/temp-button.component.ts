import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'temp-button',
  templateUrl: './temp-button.component.html',
  styleUrls: ['./temp-button.component.scss'],
})
export class TempButtonComponent implements OnInit {
  // Parameters
  @Input() disabled: boolean;
  @Input() onlyIconButton: boolean;
  @Input() type: string; // reset, submit, button
  @Input() role: string; // primary, secondary, tertiary.
  @Input() size: string; // default, small.
  @Input() icon: string = '';
  @Input() loading?: boolean;
  @Input() customColor: string = '';
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() onActionClick: EventEmitter<any> = new EventEmitter();

  //Variables
  randomBtnId = Math.floor(Math.random() * Math.floor(50)) + 'split-btn';

  constructor() {
    // Initialize Default Properties
    this.onlyIconButton = false;
    this.size = 'default';
    this.type = 'button'; // reset, submit, button
    this.role = 'primary'; //primary, secondary, tertiary, custom
    this.disabled = false;
    this.icon = '';
    // this.SplitConfig == null;
    // customColor Pass Color Code when type is custom;
  }

  clickBtn(button: any) {
    this.onClick.emit(button);
  }

  actionClick(button: any) {
    this.onActionClick.emit(button);
  }

  ngOnInit(): void {}

  ngDoCheck() {
    // Set Width of Split DropDown Panel Dynamically Based on Button Size
    const button = document.getElementById(this.randomBtnId);
    let btnWidth;
    if (button) {
      btnWidth = button.offsetWidth;
    }
    var elems = document.getElementsByClassName(
      'mat-menu-panel ' + this.randomBtnId
    );
    if (elems.length != 0) {
      for (var i = 0; i < elems.length; i++) {
        const element: any = elems[i];
        element.style.width = btnWidth + 'px';
      }
    }
  }
}

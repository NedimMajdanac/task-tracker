import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button implements OnInit{

  @Input() text!: string;
  @Input() color!: string;

  @Output() btnClick = new EventEmitter();

  onClick() { 
    this.btnClick.emit();
  }

  constructor() { }
  ngOnInit(): void{}
}

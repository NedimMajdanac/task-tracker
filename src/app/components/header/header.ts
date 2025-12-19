import { Component, OnInit } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  title: string  = "task-tracker"
  constructor() {}
  ngOnInit(): void{ }
  onAdd(){
    console.log("Add button clicked from Header component");
  }
}

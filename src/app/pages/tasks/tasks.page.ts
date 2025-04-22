import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule ]
})
export class TasksPage implements OnInit {

  schoolData = [
    { 
      roomId: 1, 
      roomName: "Chamber of Secrets", 
      tasks: [
        {taskId: 1, taskName: "Kill Snake"}, 
        {taskId: 2, taskName: "Destory Diary"}
      ], 
      items: [
        {itemId: 1, itemName: "Scary Snake"}, 
        {itemId: 2, itemName: "Friendly Bird"}
      ] 
    },
    { 
      roomId: 2, 
      roomName: "Room of Requirement", 
      tasks: [
        {taskId: 3, taskName: "Kill Snake"}, 
        {taskId: 4, taskName: "Destory Diary"}
      ], 
      items: [
        {itemId: 1, itemName: "Secret Society"}, 
        {itemId: 2, itemName: "Magic Cabinet"}
      ] 
    },
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToAddPage(){
    (document.activeElement as HTMLElement)?.blur();
    this.router.navigate(['/add']);
  }

}

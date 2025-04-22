import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; 
import { Router } from '@angular/router';
import { RoomsService } from '../service/rooms.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule ]
})
export class RoomsPage implements OnInit {

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
      ],
      selectedTab: 'tasks'
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
      ],
      selectedTab: 'tasks'
    },
  ];

  constructor(private router: Router, private roomsService: RoomsService) {
  }

  async ngOnInit() {
    try {
      this.schoolData = await this.roomsService.getRooms();
      console.log("this.schoolData", this.schoolData);
      
      this.schoolData = this.schoolData.map(room => ({
        ...room,
        selectedTab: 'tasks'
      }));
    } catch (err) {
      console.error('Failed to load rooms:', err);
    }
  }

  goToAddPage(){
    (document.activeElement as HTMLElement)?.blur();
    this.router.navigate(['/add']);
  }
}
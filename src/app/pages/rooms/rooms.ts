import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; 
import { Router } from '@angular/router';
import { RoomsService } from '../service/rooms.service';
import { Room } from 'src/app/models/room';


@Component({
  selector: 'app-tasks',
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule ]
})
export class RoomsPage {

  schoolData: Room[] = [];

  constructor(private router: Router, private roomsService: RoomsService) {
  }

  ionViewWillEnter(){
    this.prepareData();
  }

  async prepareData(){
    try {
      this.schoolData = await this.roomsService.getRooms();
      this.schoolData = this.schoolData.map(room => ({
        ...room,
        selectedTab: 'tasks',
        updatedName: room.name
      }));
    } catch (err) {
      console.error('Failed to load rooms:', err);
    }
  }

  goToAddPage(){
    (document.activeElement as HTMLElement)?.blur();
    this.router.navigate(['/add']);
  }

  async deleteRoom(id: number){
    console.log("id", id);
    try {
      await this.roomsService.deleteRooms(id);
      this.prepareData();
    } catch (err) {
      console.error('Failed to delete room:', err);
    }
  }

  async updateRoomName(id: number, newName: string) {
    if (!newName) return;
  
    try {
      await this.roomsService.updateRoomName(id, newName);
      this.prepareData();
    } catch (err) {
      console.error('Failed to update room:', err);
    }
  }
}
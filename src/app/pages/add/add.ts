import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RoomsService } from '../service/rooms.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.html',
  styleUrls: ['./add.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule ]
})
export class AddPage implements OnInit {

  roomForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private roomsService: RoomsService) { }

  ngOnInit() {
    this.roomForm = this.fb.group({
      roomName: ['', Validators.required],
      tasks: this.fb.array([this.fb.control('', Validators.required)]),
      items: this.fb.array([this.fb.control('', Validators.required)]),
    });
  }

  get tasks() {
    return this.roomForm.get('tasks') as FormArray;
  }

  get items() {
    return this.roomForm.get('items') as FormArray;
  }

  addTask() {
    this.tasks.push(this.fb.control('', Validators.required));
  }

  removeTask(index: number) {
    this.tasks.removeAt(index);
  }

  addItem() {
    this.items.push(this.fb.control('', Validators.required));
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  async onSubmit() {
    if (this.roomForm.valid) {
      const newRoom = {
        name: this.roomForm.value.roomName,
        tasks: this.roomForm.value.tasks,
        items: this.roomForm.value.items,
      };
      
      try {
        await this.roomsService.addRoom(newRoom);
        this.router.navigate(['/tasks']);
      } catch (err) {
        console.error('Failed to save room:', err);
      }
    }
  }

  onCancel(){
    this.roomForm = this.fb.group({
      roomName: ['', Validators.required],
      tasks: this.fb.array([this.fb.control('', Validators.required)]),
      items: this.fb.array([this.fb.control('', Validators.required)]),
    });
    this.router.navigate(['/tasks']);
  }
}

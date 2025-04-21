import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class AddPage implements OnInit {

  taskTitle: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitTask() {
    (document.activeElement as HTMLElement)?.blur();
    this.router.navigate(['/tasks']);
  }

}

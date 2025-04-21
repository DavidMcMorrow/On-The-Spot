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

  tasks = [
    { title: 'Check fire exits' },
    { title: 'Inspect lights in hallway' },
    { title: 'Replace broken AC panel' }
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

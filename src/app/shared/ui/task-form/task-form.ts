import { Component, output,input } from '@angular/core';
import { Task } from '../../../features/tasks/task';

@Component({
  selector: 'app-task-form',
  imports: [],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  agregado = output<string>(); // Esto va a emitir un evento al padre para que actualice la tarea

}

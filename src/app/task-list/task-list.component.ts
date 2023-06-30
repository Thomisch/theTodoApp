import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: string[] = ['Tâche 1', 'Tâche 2', 'Tâche 3'];
  newTask: string = ''; // Nouvelle tâche à ajouter

  // Ajouter une tâche
  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = ''; // Réinitialiser la nouvelle tâche après l'ajout
    }
  }

  // Supprimer une tâche
  deleteTask(task: string) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}

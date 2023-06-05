import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { TodosService } from 'src/app/service/todos.service';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {

    tasks!: Todo[];
    titoloTask: string | undefined;

    constructor(private todoSrv: TodosService) {
        this.recupera();
    }

    ngOnInit(): void {
    }

    recupera() {
        this.todoSrv.getTodo().then((todos: Todo[]) => {
            this.tasks = todos;
        });
    }

    addTask() {
        const newTodo = this.todoSrv.addTodo({title: this.titoloTask as string, completed: false}).then((todo: Todo) => {
            this.tasks.push(todo);
        });
        this.titoloTask = '';
        console.log(this.tasks);
    }

    async completeTask(todo: Todo, index: number) {
        await this.todoSrv.updateTodo({completed: true}, todo.id);
        this.tasks.splice(index, 1);
        this.recupera();
    }
}

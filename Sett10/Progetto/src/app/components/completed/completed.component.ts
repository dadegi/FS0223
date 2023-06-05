import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { TodosService } from 'src/app/service/todos.service';

@Component({
    selector: 'app-completed',
    templateUrl: './completed.component.html',
    styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {

    tasks!: Todo[];

    constructor(private todoSrv: TodosService) {
        this.todoSrv.getTodo().then((todos: Todo[]) => {
            this.tasks = todos.filter(todo => todo.completed);
        });
    }

    ngOnInit(): void {}

    async deleteTask(id: number, index: number) {
        await this.todoSrv.deleteTodo(id);
        this.tasks.splice(index, 1);
    }
}

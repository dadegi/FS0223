import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.interface';

@Injectable({
    providedIn: 'root',
})

export class TodosService {

    todos: Todo[] = [];

    constructor() {}

    getTodo(): Promise<Todo[]> {
        return new Promise((res) => {
            setTimeout(() => {
                res(this.todos);
            }, 2000);
        });
    }

    addTodo (data: Partial<Todo>): Promise<Todo> {
        return new Promise(() => {
            setTimeout(() => {
                const newTodo: Todo = {...data, id: this.todos.length + 1};
                this.todos.push(newTodo);
            }, 2000);
        });
    }

    updateTodo(data: Partial<Todo>, id: number): Promise<Todo> {
        return new Promise((res, rej) => {
            setTimeout(() => {
                this.todos = this.todos.map((todo) => {
                    return todo.id === id ? {...todo, ...data} : todo;
                });
                const updatedTodo: Todo | undefined = this.todos.find((todo) => todo.id === id);
                if (updatedTodo) {
                    res(updatedTodo);
                } else {
                    rej('Errore di aggiornamento');
                }
            }, 2000);
        });
    }

    deleteTodo(id: number): Promise<Todo> {
        return new Promise((res, rej) => {
            setTimeout(() => {
                const deletedTodo: Todo | undefined = this.todos.find((todo) => todo.id == id);
                if (deletedTodo) {
                    const indexDeleted: number = this.todos.indexOf(deletedTodo);
                    this.todos.splice(indexDeleted, 1);
                    res(deletedTodo);
                } else {
                    rej('Errore di cancellazione');
                }
            }, 2000);
        });
    }
}

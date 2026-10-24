import $api from "../http";
import type { ITodo } from "../interfaces/todo.interface";

export default async function updateTodo(id: number, data: Pick<ITodo, 'title' | 'description' | 'isCompleted'>) {
    const res = await $api.put<ITodo>(`/todos/${id}`, { todo: data });
    return res.data;
}

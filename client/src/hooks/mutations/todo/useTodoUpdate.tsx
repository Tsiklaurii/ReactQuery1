import { useMutation } from "@tanstack/react-query"
import updateTodo from "../../../api/updateTodo"
import type { ITodo } from "../../../interfaces/todo.interface"
import { client } from "../../../reactquery/client"

const useTodoUpdate = (id: number) => {
    const result = useMutation({
        mutationFn: (data: Pick<ITodo, 'title' | 'description' | 'isCompleted'>) => updateTodo(id, data),
        onError: (err) => console.log(err),
        onSuccess: (todo) => {
            client.setQueryData(['todo', String(id)], todo)
            client.invalidateQueries({ queryKey: ['todos'] })
        }
    })

    return result
}

export default useTodoUpdate

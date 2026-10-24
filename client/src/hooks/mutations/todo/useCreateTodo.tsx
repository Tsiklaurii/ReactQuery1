import { useMutation } from "@tanstack/react-query"
import type { ITodo } from "../../../interfaces/todo.interface"
import createTodo from "../../../api/createTodo"
import { client } from "../../../reactquery/client"

const useCreateTodo = () => {
    const result = useMutation({
        mutationFn: (data: Partial<ITodo>) => createTodo(data),
        onError: (err) => console.log(err),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ["todos"] })
        }

    })

    return result
}

export default useCreateTodo
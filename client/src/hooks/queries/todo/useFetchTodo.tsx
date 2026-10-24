import { useQuery } from "@tanstack/react-query"
import type { ITodo } from "../../../interfaces/todo.interface"
import fetchTodo from "../../../api/fetchTodo"

const useFetchTodo = (id: string) => {
    const result = useQuery<ITodo>({
        queryKey: ['todo', id],
        queryFn: () => fetchTodo(id)
    })
    return result
}

export default useFetchTodo
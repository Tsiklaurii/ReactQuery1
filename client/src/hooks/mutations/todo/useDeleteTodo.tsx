import { useMutation } from "@tanstack/react-query"
import { client } from "../../../reactquery/client"
import deleteTodo from "../../../api/deleteTodo"

const useDeleteTodo = () => {
    const result = useMutation({
        mutationFn: (id: number) => deleteTodo(id),
        onError: (err) => console.log(err),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ["todos"] })
        }
    })

    return result
}

export default useDeleteTodo
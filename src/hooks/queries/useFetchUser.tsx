import { useQuery } from "@tanstack/react-query"
import type { IUser } from "../../interfaces/user.interface"
import fetchUser from "../../api/fetchUser"

const useFetchUser = (id: string) => {
    const result = useQuery<IUser>({
        queryKey: ['user', id],
        queryFn: () => fetchUser(id)
    })
    return result
}

export default useFetchUser
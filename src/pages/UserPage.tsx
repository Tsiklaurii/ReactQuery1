import { useParams } from "react-router-dom"
import type { IUser } from "../interfaces/user.interface"
import UserItem from "../components/user/UserItem"
import useFetchUser from "../hooks/queries/useFetchUser"

const UserPage = () => {
    const { id } = useParams()
    const { data, error, isLoading } = useFetchUser(id!)
    const { id: userId, name, username, email } = data || ({} as IUser)

    if (error) return <h3>{error.message}</h3>
    if (isLoading) return <h3>Loading...</h3>

    return (
        <div className="p-2.5">
            <UserItem id={userId} name={name} username={username} email={email} />
        </div>
    )
}

export default UserPage
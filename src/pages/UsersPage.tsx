import UserList from "../components/user/UserList"
import useFetchUsers from "../hooks/queries/useFetchUsers"

const UsersPage = () => {
    const { data: users, error, isLoading } = useFetchUsers()

    if (error) return <h3>{error.message}</h3>
    if (isLoading) return <h3>Loading...</h3>

    return (
        <UserList users={users} />
    )
}

export default UsersPage
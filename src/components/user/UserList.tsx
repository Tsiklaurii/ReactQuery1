import type { IUser } from "../../interfaces/user.interface"
import UserItem from "./UserItem"

interface UserListProps {
    users: IUser[] | undefined
}

const UserList = ({ users }: UserListProps) => {
    return (
        <div className="p-1.25 flex flex-col gap-2">
            {users?.map(({ id, name, username, email }) => (
                <UserItem key={id} id={id} name={name} username={username} email={email} />
            ))}
        </div>
    )
}

export default UserList
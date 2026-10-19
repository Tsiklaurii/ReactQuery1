import { useNavigate } from "react-router-dom"

interface UserItemProps {
    id: number
    name: string
    username: string
    email: string
}

const UserItem = ({ id, name, username, email }: UserItemProps) => {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/users/${id}`)} key={id} className="border-gray-400 border cursor-pointer p-2.5 rounded-2xl">
            <h3>{name}</h3>
            <h3 className="text-red-500">{username}</h3>
            <h3>{email}</h3>
        </div>
    )
}

export default UserItem
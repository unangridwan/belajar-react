import React from "react"

const UserTable = (props) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th colSpan={2} className="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                { props.users.length > 0 ?
                props.users.map((user) =>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td className="text-end">
                        <button type="button" className="btn btn-info" onClick={()=>{props.editRow(user)}}><i className="bi bi-pencil-square"></i></button>
                        </td>
                        <td className="text-start">
                            <button type="button" className="btn btn-danger" onClick={()=>props.deleteUser(user.id)}><i className="bi bi-trash"></i></button>
                        </td>
                
                    </tr>
                )):
                (
                    <tr colSpan={4}> No User</tr>
                )
            }

            </tbody>
        </table>
    )
       

    
}

export default UserTable
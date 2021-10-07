import React, {Fragment, useState} from "react"
import UserTable from "./UserTable"
import AddUserForm from "./addUserForm"
import EditUserFrom from "./EditUSerForm"

const App = ()=>{
    const usersData = [
        { id: 1, name : 'Unang', username: 'Unang17'},
        { id: 2, name : 'ridwan', username: 'ridwan17'},
        { id: 3, name : 'Arsya', username: 'fatih19'}
    ]

    const [users, setUsers] = useState(usersData)

    const [editing, setEditing] = useState(false)

    const initialFormState = {  id: null, name : '', username:''}

    const [currentUser, setCursentUser] = useState(initialFormState)

    const editRow = (user) =>{
        setEditing(true)
        setCursentUser({id: user.id, name : user.name, username: user.username})
    }

    const updateUser = (id, updatedUser) =>{
        setEditing(false)
        setUsers(users.map( (user) => (user.id === id ? updatedUser: user)))
    }

    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    return(
        <div className="container">
            <div className="row">
                <h2 className="text-center">CRUD Hooks</h2>
            </div>
            <div className="row">
                <div className="col-6">
                    
                    { editing ? (
                        <Fragment>
                        <h3 className="text-center">Edit User </h3>
                        <EditUserFrom 
                        currentUser ={currentUser}
                        setEdting = {setEditing}
                        updateUser ={updateUser}
                        />
                        </Fragment>

                    ) : (
                        <Fragment>
                        <h3 className="text-center">Add User</h3>
                        <AddUserForm addUser = {addUser} />
                        </Fragment>
                    )
                    }
                    
                    
                </div>
                <div className="col-6">
                    <h3 className="text-center">View Users</h3>
                    <UserTable users ={users} deleteUser={deleteUser} editRow={editRow} />
                </div>
            </div>
        </div>
    )
}

export default App
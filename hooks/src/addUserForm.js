import React, {useState} from "react"



const AddUserForm = (props) =>{

    const intialUserState = {
        id: null, name : '', username:''
    }
     
    const [user, setUser] = useState(intialUserState)

    const handleChange = (event) => {
        const {name,value} = event.target
        setUser({...user,[name]:value})
       // console.log(event.target)
    }
    

    return(
        <form 
        onSubmit = { (event) => {
            event.preventDefault()
            if(!user.name || !user.username) return

            props.addUser(user)
            setUser(intialUserState)
        }}
        >
            <div className="mb-3">
                <label htmlFor="name" className="form-label" >Name</label>
                <input type="text" className="form-control" id="name" 
                name="name"
                value = {user.name}
                onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" 
                name="username"
                value = {user.username}
                onChange={handleChange}/>
            </div>
            <button className="btn btn-primary">Add User  <i className="bi bi-arrow-right-circle"></i></button>
        </form>
    )
}

export default AddUserForm
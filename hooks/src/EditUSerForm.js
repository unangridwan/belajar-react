import React, {useState, useEffect} from "react"

const EditUserFrom = (props) =>{

    useEffect(()=>
    {
        setUser(props.currentUser)
    },[props])

    const [user, setUser] = useState(props.currentUser)

    const handleChange = (event) =>{
        const {name,value} = event.target
        setUser({...user,[name]:value})
    }

    return(
        <form 
        onSubmit = { (event) => {
            event.preventDefault()

            props.updateUser(user.id, user)
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
            <button className="btn btn-info" style={{marginRight:"15px"}}>Edit <i className="bi bi-arrow-right-circle"></i></button>
            <button className="btn btn-warning"
            onClick={()=>props.setEdting(false)}>Cancel <i className="bi bi-x-circle"></i></button>
        </form>
    )

}

export default EditUserFrom
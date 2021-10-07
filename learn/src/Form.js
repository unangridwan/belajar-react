import React, {Component} from 'react'
import {TextInput, Button} from 'react-materialize'

class Form extends Component{
    initialState = {
        name : '',
        job : '',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name,value} = event.target

        this.setState(
            {
                [name] : value,
            }
        )
        //console.log(event);
    }

    submitForm = () =>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){
        const {name, job} = this.state
        return (
            <form>
                <TextInput
                id="name"
                label="Name"
                value={name}
                name="name"
                onChange= {this.handleChange}
                />
                 <TextInput
                id="job"
                label="Job"
                value={job}
                name="job"
                onChange= {this.handleChange}
                />
                <input type="button" 
                    className="btn"
                    onClick= {this.submitForm}
                    value="Submit"/>
            </form>
        )
    }
}

export default Form
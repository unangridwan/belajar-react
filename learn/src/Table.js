import React, {Component} from "react"
import {Button} from 'react-materialize'

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Job
                </th>
                <th>
                    Action
                </th>
            </tr>
        </thead>
    )
}

const TableBody = (props)=>{
    const rows = props.characterData.map((row,index)=>
    {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <Button node="button"
                    waves="light"
                    onClick= {() =>props.removeCharacter(index)}>Delete</Button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

const Table = (props) => { 
    const {characterData, removeCharacter} = props;
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
            </table>
        )
    }
    


export default Table
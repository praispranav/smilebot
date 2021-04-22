import React,{useState} from 'react'

function MailBody(props) {
    return (
        <div>
            <h1>{props.email}</h1>
            <h4>{props.subject}</h4>
            <p>{props.content}</p>
        </div>
    )
}

export default MailBody

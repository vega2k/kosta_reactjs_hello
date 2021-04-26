import React, { useState } from 'react';

export const MyComponentFunc = ({name, children}) => {
    const [number, setNumber] = useState(0);

    //useState를 여러개를 사용하는 경우
    const [inputs, setInputs] = useState({
        message:'',
        username:''
    });
    const {message, username} = inputs;

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
    
    return (
        <div>
            <h5>부모 컴포넌트가 보내준 값 : {name}</h5>
            Children : {children}
            <p>Number 값 : {number}</p>
            <button onClick={() => setNumber(number + 1)}>증가</button>
            <button onClick={() => setNumber(number - 1)}>감소</button> <br/>
            Message : <input type="text" name="message" value={message} onChange={handleChange}/><br/>
            Username : <input type="text" name="username" value={username} onChange={handleChange}/>

        </div>
    );
};

import React, { useState, useRef } from 'react';
import './MyComponent.css';

export const MyComponentFunc = ({name, children}) => {
    const [number, setNumber] = useState(0);

    //useState를 여러개를 사용하는 경우
    const [inputs, setInputs] = useState({
        message:'',
        username:''
    });
    const {message, username} = inputs;

    const [messages, setMessages] = useState(['Angular', 'React', 'Vue', 'Ember']);

    const myUsername = useRef(null);
    
    const [validate, setValidate] = useState(false);

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const handleKeyPress = (e) => {
        if(e.key == 'Enter') {
            setMessages(messages.concat(message));
            //message변수 초기화
            setInputs({
                message: ''
            });
        }
    };

    const handleFocus = () => {
        setValidate(true);
        myUsername.current.focus();
    };

    const msg_list = messages.map((msg, idx) => {
        return  <li key={idx}>
                    {msg}
                </li>
    });
    
    return (
        <div>
            <h5>부모 컴포넌트가 보내준 값 : {name}</h5>
            Children : {children}
            <p>Number 값 : {number}</p>
            <button onClick={() => setNumber(number + 1)}>증가</button>
            <button onClick={() => setNumber(number - 1)}>감소</button> <br/>
            Message : <input type="text" name="message" value={message} 
                onChange={handleChange}
                onKeyPress={handleKeyPress} /><br/>
            <ul>
                {msg_list}
            </ul>
            <button onClick={handleFocus}>Focus 주기</button><br/>
            Username : <input type="text" name="username" value={username} 
                onChange={handleChange}
                ref={myUsername} className={validate ? 'success':'fail'}
                />

        </div>
    );
};

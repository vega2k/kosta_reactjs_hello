import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyComponent.css';

class MyComponent extends Component {
    //상태변수 선언
    state = {
        number: 0,
        message: '',
        username: '',
        validate: false,
        messages: ['Angular', 'React', 'Vue', 'Ember']
    };

    //상태변수 number 값을 감소시키는 함수
    handleDec = () => {
        const { number } = this.state;
        this.setState({
            number: number - 1
        });
    };
    //상태변수 message 값의 onChange 이벤트 핸들링 함수
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    // validate변수를 true로 변경하고, myUsername 필드에 focus주기
    handleFocus = () => {
        this.setState({
            validate: true
        });
        //ref:DOM 사용
        this.myUsername.focus();
    }
    // message input에서 입력값을 messages배열에 추가하기
    handleKeyPress = (e) => {
        const { messages, message } = this.state;
        //if(e.key === 'Enter') {
        if(e.keyCode === 13) {
            this.setState({
                //messages: this.state.messages.concat(this.state.message),
                //messages: messages.concat(message),
                messages: [...messages, message],
                message:''
            });
        }
    }
    // <li>를 더블클릭 했을때 message 삭제하기
    handleDoubleClick = (index) => {
        this.setState({
            messages: this.state.messages.filter((item,idx) => idx !== index)
        });
    }


    render() {
        //destructuring assignment 
        const { name, age } = this.props;
        const { number, message, username, validate, messages } = this.state;
        const { handleDec, handleChange, handleFocus, handleKeyPress, setState, handleDoubleClick } = this;
        const msg_list = messages.map((msg, idx) => {
            return  <li key={idx} onDoubleClick={() => handleDoubleClick(idx)}>
                        {msg}
                    </li>
        });

        return (
            <div>
                <h5>부모로 부터 받는 변수 Props </h5>
                <p>
                    Hello {name} / Age {age}
                </p>
                <h5>내부에 선언한 변수 State</h5>
                <p>
                    Number : {number}<br />
                    <button onClick={() => (setState({
                        number: number + 1
                    }))}>증가</button>
                    <button onClick={handleDec}>감소</button> <br />
                </p>
                Message : {message} <br />
                <input type="text" name="message" value={message} onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    //onKeyPress={handleKeyPress}
                />
                <br />

                <ul>
                    {msg_list}
                </ul>
                <button onClick={handleFocus}>Focus 주기</button>
                    Username : {username} <br />
                <input type="text" name="username" value={username} onChange={handleChange}
                    className={validate ? 'success' : 'fail'}
                    ref={(ref) => this.myUsername = ref}
                />

            </div>
        );
    }
}
//defaultProps는 rdp 단축키로 생성
MyComponent.defaultProps = {
    name: 'ReactJS'
};
// propType는 rpt 단축키로 생성
MyComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
};
export default MyComponent;
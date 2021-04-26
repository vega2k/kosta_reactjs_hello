import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyComponent.css';

class MyComponent extends Component {
    //상태변수 선언
    state = {
        number: 0,
        message: '',
        username: '',
        validate: false
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
    
    handleFocus = () => {

    }

    render() {
        //destructuring assignment 
        const { name, age } = this.props;
        const { number, message, username, validate } = this.state;
        const { handleDec, handleChange, handleFocus } = this;
        return (
            <div>
                <h5>부모로 부터 받는 변수 Props </h5>
                <p>
                    Hello {name} / Age {age}
                </p>
                <h5>내부에 선언한 변수 State</h5>
                <p>
                    Number : {number}<br/>
                    <button onClick={() => (this.setState({
                        number: number + 1
                    }))}>증가</button>
                    <button onClick={handleDec}>감소</button> <br/>
                    Message : {message} <br/>
                    <input type="text" name="message" value={message} onChange={handleChange} />                    
                    <br/>
                    <button onClick={handleFocus}>Focus 주기</button>                   
                    Username : {username} <br/>
                    <input type="text" name="username" value={username} onChange={handleChange} 
                        className={validate ? 'success':'fail'}
                        ref={(ref) => this.myUsername = ref}
                    />
                </p>
            </div>
        );
    }
}
//defaultProps는 rdp 단축키로 생성
MyComponent.defaultProps = {
    name:'ReactJS'
};
// propType는 rpt 단축키로 생성
MyComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired    
};
export default MyComponent;
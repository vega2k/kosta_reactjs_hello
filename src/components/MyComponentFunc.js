import React, { useState } from 'react';

export const MyComponentFunc = ({name, children}) => {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <h5>부모 컴포넌트가 보내준 값 : {name}</h5>
            Children : {children}
            <p>Number 값 : {number}</p>
            <button onClick={() => setNumber(number + 1)}>증가</button>
            <button onClick={() => setNumber(number - 1)}>감소</button>
        </div>
    );
};

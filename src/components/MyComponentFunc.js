import React from 'react';

export const MyComponentFunc = ({name, children}) => {
    return (
        <div>
            <h5>부모 컴포넌트가 보내준 값 : {name}</h5>
            Children : {children}
        </div>
    );
};

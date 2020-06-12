import React, { FunctionComponent } from 'react';
import { Alert } from 'antd';

interface ErrorProp {
    message: string;
}

const Error: FunctionComponent<ErrorProp> = ({ message }) => {
    return (
        <Alert
            style={{ marginTop: 15 }}
            message={message}
            type="error"
            showIcon
        />
    );
};

export default Error;

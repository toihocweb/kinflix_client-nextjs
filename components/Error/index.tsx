import { Alert } from 'antd';
import React, { FunctionComponent } from 'react';

interface ErrorProp {
    message: string;
}

const Error: FunctionComponent<ErrorProp> = (props) => {
    return (
        <Alert
            style={{ marginTop: 15 }}
            message={props.message}
            type="error"
            showIcon
        />
    );
};

export default Error;

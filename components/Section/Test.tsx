import React, { Component } from 'react';

interface Props {}
interface State {}

export default class Test extends Component<Props, State> {
    state = {
        selectedItem: { title: '' },
    };

    handleClick = () => {
        this.setState({
            selectedItem: {
                title: 'hello',
            },
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
                <h1>{this.state.selectedItem.title}</h1>
            </div>
        );
    }
}

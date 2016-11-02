import React from "react";

export default class Title extends React.Component {
    render() {
        return (
            <p>Title: {this.props.title}</p>
        );
    }
}
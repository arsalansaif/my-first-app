import React from 'react';

class Header extends React.Component {
    getStyle = () => {
        return {
            background: "#000",
            padding: "10px",
            color: "#FFF",
            borderBottom: "1px #ccc dotted",
        };
    };
    render() {
        return <div style={this.getStyle()}>To-Do List</div>
    }
}
export default header;

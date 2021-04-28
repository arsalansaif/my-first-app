import React from 'react';

const axios = require('axios').default;

class Todos extends React.Component {
    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
        };
    };
    state = {
        users: [],
        isLoading: true,
        errors: null
    };
    componentDidMount() {
        this.getUsers();
    }
    getUsers() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            this.setState({
                users: response.data.slice(0,Math.min(30,response.data.length)),
                isLoading: false
            })
        })
        .catch(error => {
            console.error('There was an error!', error);
            this.setState({ error, isLoading: false });
        });
    }
    render() {
        const { isLoading, users } = this.state;
        return (
                <React.Fragment>
                <div>
                {!isLoading ? (
                    users.map(user => {
                    return (
                        <div style={this.getStyle()}>
                        {user.title}
                        </div>
                    );
                    })
                ) : (
                    <p>Loading...</p>
                )}
                </div>
            </React.Fragment>
        );
    }
}

export default Todos;

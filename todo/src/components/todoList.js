import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        };
    }

    updateList = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    addTodoToList = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
    };

    render() {
        return (
            <div>
                {this.props.todo.map((item) => (
                    <div key={item}>{item}</div>
                ))}
                <form onSubmit={this.addTodoToList}>
                    <label htmlFor="movie">
                        <input
                            onChange={this.updateList}
                            placeholder="add todo"
                            name="todo"
                            value={this.state.todo}
                        />
                    </label>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        name: state.name,
        todo: state.todos
    };
}

export default connect(mapStateToProps, { addTodo })(TodoList);
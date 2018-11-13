import { todosSelector } from "../reselect";

export const mapDispatchToProps = {
    
}

export const mapStateToProps = state => {
    return {
        todos: todosSelector(state.todos)
    }
}
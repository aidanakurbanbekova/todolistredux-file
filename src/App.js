import styles from './App.module.scss';
import {useState} from "react";
import Input from "./components/input";
import Button from "./components/button";
import TodoItem from "./components/todo-item";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, toggleTodo} from "./components/redux/todo/actions";
import {getTodos} from "./components/redux/todo/selectors";
import {filterTodo} from "./components/redux/filter/actions";
import {getFilter} from "./components/redux/filter/selectors";

function App() {
    const todos = useSelector(getTodos)
    const activeTodoFilter = useSelector(getFilter)
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()
    const handleInputChange = (value) => {
        setInputValue(value)
    }
    const handleClickAddButton = () => {
        const trimmedValue = inputValue.trim();
        if (trimmedValue !== '') {
            dispatch(addTodo(trimmedValue))
            setInputValue('')
        }
    }
    const handleInputButton = (e) =>{
        if (e.key === 'Enter'){
            const trimmedValue = inputValue.trim()
            if (trimmedValue !== '') {
                dispatch(addTodo(trimmedValue))
                setInputValue('')
            }
        }
    }

    const handleTodoToggle = (id) => {
        dispatch(toggleTodo(id))
    }
    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }
    const renderTodoItem = (todo, idx) => {
        return (
            <TodoItem
                key={todo.id}
                isComplete={todo.isComplete}
                text={todo.text}
                onClick={() => handleTodoToggle(todo.id)}
                onDelete={() => handleDeleteTodo(todo.id)}
            />
        )
    }
    const filterTodos = (todos,filter) => {
        if (filter === "ALL") {
            return todos
        }
        if (filter === "ACTIVE"){
            return todos.filter(todo => !todo.isComplete)
        }
        if(filter === "COMPLETED"){
            return todos.filter(todo => todo.isComplete)
        }
        return todos

    }
    console.log(activeTodoFilter, "activeFilter")
    return (
        <div className={styles.container}>
            <div className={styles.todoItem}>
                <Input
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown = {handleInputButton}
                />
                <Button
                    onClick={handleClickAddButton}>
                    Add
                </Button>
            </div>
            <div>
                {filterTodos(todos,activeTodoFilter).map(renderTodoItem)}
            </div>
            <div className={styles.filterButton}>
                <Button onClick={() => dispatch(filterTodo("ALL"))}>
                     All
                </Button>
                <Button onClick={() => dispatch(filterTodo("ACTIVE"))}>
                     Active
                </Button>
                <Button onClick={() => dispatch(filterTodo("COMPLETED"))}>
                    Completed
                </Button>
            </div>
        </div>
    );
}

export default App;

import React from "react";
import styles from "./style.module.scss";
import Button from "../button";
import {MdDeleteOutline} from "react-icons/md";

const TodoItem = (props) => {
    const {
        isComplete,
        text,
        onClick,
        onDelete
    } = props
    const handleDelete = (e) => {
        e.stopPropagation()
        onDelete()
    }
    return (
< div className={styles.wrap}>
    <div
        style={{
            textDecoration: isComplete ? "line-through" : "none"
        }}
        onClick={onClick}
        className={styles.todoListItem2}>
        {text}</div>
    <div>
        <Button onClick={handleDelete}>
            x
        </Button>
    </div>
</div>


    )
}
export default TodoItem;
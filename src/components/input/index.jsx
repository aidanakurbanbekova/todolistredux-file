import React from "react";
import styles from "./style.module.scss"

const Input = (props ) => {
    const {
        onChange,
        value,
        onKeyDown,

    } = props
    return(
        <div className={styles.todoInput}>
            <input
                className={styles.Input}
                value={value}
                placeholder="Enter"
                onChange={e => onChange(e.target.value)}
                type="text"
                onKeyDown={onKeyDown}
            />
        </div>
    )
}
export default Input;
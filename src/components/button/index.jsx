import React from "react";
import styles from "./style.module.scss"

const Button = (props ) => {
    const {
        children,
        onClick
    }=  props
    return(
        <div className={styles.buttonClick}>
            <button onClick={onClick} >
                {children}
            </button>

        </div>
    )
}
export default Button;
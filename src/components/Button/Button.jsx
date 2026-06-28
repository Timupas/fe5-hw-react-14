import { Component } from "react";
import style from "./Button.module.css"

class Button extends Component {
    render(){
        const {onClick} = this.props
        return(
            <button type="button" onClick={onClick} className={style.button}>Завантажити ще</button>
        )
    }
}

export default Button;
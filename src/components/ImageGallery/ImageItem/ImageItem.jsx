import { Component } from "react";
import style from "./ImageItem.module.css"

class ImageItem extends Component {
  render() {
    const {img} = this.props    
    return (
      <li className={style.item}>
        <img src={img.webformatURL} alt={img.tags} />
      </li>
    );
  }
}

export default ImageItem;
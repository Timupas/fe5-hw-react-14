import { Component } from "react";
import ImageItem from "./ImageItem/ImageItem";
import style from "./ImageGallery.module.css"

class ImageGallery extends Component {
  render() {
    return (
      <ul className={style.list}>
        {this.props.images.map((img) => {
          return (
            <ImageItem key = {img.id} img = {img}/>
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;
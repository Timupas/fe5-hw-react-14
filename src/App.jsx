import { Component } from "react";
import "./App.css";
import { fetchImages } from "./api";
import "modern-normalize-css/styles/normalize.css";
import Button from "./components/Button/Button";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageItem from "./components/ImageGallery/ImageItem/ImageItem"
import Searchbar from "./components/Searchbar/Searchbar";
import Loader from "./components/Loader/Loader";

class App extends Component {
  state = {
    quary: "",
    images: [],
    page: 1,
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.quary !== this.state.quary) {
      this.loadImages();
    }
  }

  loadImages = () => {
    const { quary, page } = this.state;

    if (!quary) {
      return;
    }

    this.setState({
      loading: true,
    });

    fetchImages(quary, page)
      .then((res) => {
        this.setState((prev) => {
          return { images: [...prev.images, ...res.hits] };
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  };

  handleSearch = (quary) => {
    this.setState({
      quary: quary,
      images: [],
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(
      (prev) => {
        return { page: prev.page + 1 };
      },
      () => {
        this.loadImages();
      },
    );
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        {this.state.loading && <Loader />}
        <ImageGallery images={this.state.images} />
        {this.state.images.length > 0 && <Button onClick={this.loadMore} />}
      </>
    );
  }
}

export default App;

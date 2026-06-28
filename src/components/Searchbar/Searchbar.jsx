import { Component } from "react";
import style from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    quary: "",
  };

  handleChange = (e) => {
    this.setState({ quary: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.quary) {
      return;
    }
    this.props.onSubmit(this.state.quary);
  };

  render() {
    const { quary } = this.state;
    return (
      <header className={style.header}>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <input
            className={style.input}
            type="text"
            onChange={this.handleChange}
            value={quary}
            placeholder="Що шукаємо?"
          />
          <button type="submit" className={style.searchBtn}>
            Search
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;

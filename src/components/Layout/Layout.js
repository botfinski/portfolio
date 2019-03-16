import React, { Component } from "react";
import "./Layout.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

class Layout extends Component {
  state = {
    menuOpened: false
  };

  handleClick = this.handleClick.bind(this);

  handleClick() {
    this.setState(prevState => {
      return { menuOpened: !prevState.menuOpened };
    });
  }

  render() {
    return (
      <div className="Layout">
        <Header menuOpened={this.state.menuOpened} clicked={this.handleClick} />
        <Main menuOpened={this.state.menuOpened} clicked={this.state.menuOpened ? this.handleClick : null} />
      </div>
    );
  }
}

export default Layout;

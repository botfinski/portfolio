import React, { Component } from "react";
import "./Header.css";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
import MenuButton from "../MenuButton/MenuButton";
import propTypes from "prop-types";

class Header extends Component {
  state = {
    isDesktop: false
  };

  checkViewportWidth = this.checkViewportWidth.bind(this);

  componentDidMount() {
    this.checkViewportWidth();
    window.addEventListener("resize", this.checkViewportWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkViewportWidth);
  }

  checkViewportWidth() {
    this.setState({ isDesktop: window.innerWidth > 1024 });
  }

  render() {
    let headerPanelClassName = this.props.menuOpened
      ? "Header__container Header__container--contact"
      : "Header__container Header__container--contact Header__container--hidden";

    return this.state.isDesktop ? (
      <header>
        <Link to="/" className="Header__logo" />
        <p className="Header__description">Simple React+Router portfolio app</p>
        <Contact />
      </header>
    ) : (
      <header>
        <div className="Header__container">
          <Link to="/" className="Header__logo" />
          <MenuButton clicked={this.props.clicked} opened={this.props.menuOpened} />
        </div>
        <div className={headerPanelClassName}>
          <p className="Header__description">Simple React+Router portfolio app</p>
          <Contact />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  menuOpened: propTypes.bool,
  clicked: propTypes.func
};
export default Header;

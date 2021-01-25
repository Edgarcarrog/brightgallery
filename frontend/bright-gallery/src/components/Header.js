import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__center">
          <div className="header__logo-container">
            <img className="header__logo" src="#" alt="logo" />
          </div>
        </div>
        <nav className="main-menu">
          <ul className="main-menu__list">
            <li className="main-menu__list-element">
              <a className="main-menu__link" href="#">
                Inicio
              </a>
            </li>
            <li className="main-menu__list-element">
              <a className="main-menu__link" href="#">
                Contacto
              </a>
            </li>
            <li className="main-menu__list-element">
              <a className="main-menu__link" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;

import { Component } from "react";
import forest from '../assets/images/forest.jpg';
import rocks from '../assets/images/rocks.jpg';
import boreal from '../assets/images/boreal.jpg';
import ski from '../assets/images/ski.jpg';
import surf from '../assets/images/surf.jpg';
import basket from '../assets/images/basket.jpg';
import paris from '../assets/images/paris.jpg';
import newYork from '../assets/images/new-york.jpg';
import rome from '../assets/images/rome.jpg';

class MainContent extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="gallery-section">
          <div className="gallery-section__description">
            <div className="gallery-section__head">
              <h4 className="gallery-section__title">Naturaleza</h4>
            </div>
            <div className="gallery-section__info">
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                totam neque architecto eveniet cumque quam perspiciatis eius
                similique illum earum quidem, fugiat, culpa accusamus ad. Hic
                recusandae distinctio ullam ea?
              </span>
            </div>
          </div>
          <div className="gallery-section__card-container">
            <div className="gallery-section__card">
              <img
                className="gallery-section__image"
                src={forest}
                alt="forest"
              />
            </div>
            <div className="gallery-section__card">
              <img
                className="gallery-section__image"
                src={rocks}
                alt="rocks"
              />
            </div>
            <div className="gallery-section__card">
              <img
                className="gallery-section__image"
                src={boreal}
                alt="boreal"
              />
            </div>
          </div>
        </div>

        <hr className="divider" />

        <div className="gallery-section">
          <div className="gallery-section__description">
            <div className="gallery-section__head">
              <h4 className="gallery-section__title">Deportes</h4>
            </div>
            <div className="gallery-section__info">
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                totam neque architecto eveniet cumque quam perspiciatis eius
                similique illum earum quidem, fugiat, culpa accusamus ad.
              </span>
            </div>
          </div>
          <div className="gallery-section__card-container">
            <div className="gallery-section__card">
              <img
                className="gallery-section__image"
                src={ski}
                alt="ski"
              />
            </div>
            <div className="gallery-section__card">
              <img
                className="gallery-section__image"
                src={surf}
                alt="surf"
              />
            </div>
            <div className="gallery-section__card">
              <img
                className="gallery-section__image"
                src={basket}
                alt="basket"
              />
            </div>
          </div>
        </div>

        <hr className="divider" />

        <div className="gallery-section">
          <div className="gallery-section__description">
            <div className="gallery-section__head">
              <h4 className="gallery-section__title">Ciudades</h4>
            </div>
            <div className="gallery-section__info">
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                totam neque architecto eveniet cumque quam perspiciatis eius
                similique illum earum quidem, fugiat, culpa accusamus ad.
              </span>
            </div>
          </div>
          <div className="gallery-section__card-container">
            <div className="gallery-section__card">
              <img
                className="gallery-section__image"
                src={paris}
                alt="paris"
              />
            </div>
            <div className="gallery-section__card">
              <img
                className="gallery-section__image"
                src={newYork}
                alt="new-york"
              />
            </div>
            <div className="gallery-section__card">
              <img
                className="gallery-section__image"
                src={rome}
                alt="rome"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;

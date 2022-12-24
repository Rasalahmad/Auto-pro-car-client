import React from "react";
import "./Carosuel.css";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.teslarati.com/wp-content/uploads/2019/04/NIO-Production-1.jpg"
              className="d-block carosuelImg"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>
                How to justify being the most valuable car company on earth
              </h5>
              <p>
                Aerial photo shows new black and white Tesla Model 3 outside the
                New Lingang District, Shanghai factory, December 7, 2019.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.teslarati.com/wp-content/uploads/2019/04/NIO-Production-2.jpg"
              className="d-block carosuelImg"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Auto Pro Car Making Machanism</h5>
              <p>
                Picking the right company car for you can be tricky. Not only
                are there loads of great options out there, but they also need
                to cover lots of bases really well
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://npr.brightspotcdn.com/dims4/default/dd65ea1/2147483647/strip/true/crop/1885x1414+0+0/resize/1760x1320!/format/webp/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2022%2F05%2F31%2Fscreen-shot-2022-05-31-at-8.32.41-am-90976307d1d0c1408fd60a67e511f8e832db778c.png"
              className="d-block carosuelImg"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>
                As cars go electric, Bangladesh builds a big lead in factories
              </h5>
              <p>
                A Nio dealership in Shanghai, China, on Feb 3 2021. The electric
                car company is preparing to build a second large factory in
                central China. (Qilai Shen/The New York Times)
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

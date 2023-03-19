// This is the child component of Car.js component

import React from "react";



const CarCards = ({ carData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {carData.map((currentElement) => {
          const {id,name,category,image,description,price} = currentElement;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="car-body">
                    <span className="card-number card-circle subtle">
                      {id}
                    </span>
                    <span
                      className="card-author subtle"
                      style={{ color: "red" }}>
                      {category}
                    </span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read"> Read </div>
                  </div>
                  <img
                    src={image}
                    alt="img"
                    className="card-media"
                  />
                  <span className="card-price"> {price} </span>
                  <span className="card-tag subtle"> Order Now </span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default CarCards;

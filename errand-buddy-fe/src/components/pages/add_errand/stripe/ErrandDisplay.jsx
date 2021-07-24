import React from "react";
import './ErrandDisplay.scss'

const Checkout = ({ handleClick, errandData }) => (
  <section className="payment-section">
          <div className="payment-div">
        <img
          src={errandData.errandImage} //must be the errand picture
          alt="errand"
        />

        <div className="description">
          <h3>{errandData.errandName}</h3>
          <h5>$ {errandData.errandPrice}</h5>
        </div>
      </div>
      <form action="" method="">
        <button type="submit" onClick={handleClick}>
          Checkout
        </button>
      </form>

  
  </section>
);

export default Checkout;

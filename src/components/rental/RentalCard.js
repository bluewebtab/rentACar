import React from "react";

export function RentalCard() {
  return (
    <div className="col-md-3 col-xs-6">
      <div className="card bwm-card">
        <img
          className="card-img-top"
          src="http://via.placeholder.com/350x250"
          alt=""
        />
        <div className="card-block">
          <h6 className="card-subtitle">2015 Honda Civic</h6>
          <h4 className="card-title">Los Angeles</h4>
          <p className="card-text">$50/day &#183; Free Cancellation</p>
          <a href="" className="card-link">
            More Info
          </a>
        </div>
      </div>
    </div>
  );
}

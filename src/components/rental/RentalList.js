import React, { Component } from "react";
import { RentalCard } from "./RentalCard";

export class RentalList extends Component {
  constructor() {
    super();
    this.state = {
      rentals: [1, 2, 3]
    };
  }

  renderRentals() {
    return this.state.rentals.map(() => {
      return <RentalCard />;
    });
  }

  render() {
    return (
      <section id="rentalListing">
        <h1 className="page-title">Renting a car has never been easy</h1>
        <div className="row">{this.renderRentals()}</div>
      </section>
    );
  }
}

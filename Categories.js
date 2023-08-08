import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "all-items",
        },
        {
          key: "MTB",
          name: "MTB-BIKES",
        },
        {
          key: "KIDS",
          name: "BIKES-FOR-KIDS",
        },
        {
          key: "ROAD",
          name: "ROAD-BIKES",
        },
      ],
    };
  }
  render() {
    console.log(this.props);
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div onClick={() => this.props.categoryClick(el)} key={el.key}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;

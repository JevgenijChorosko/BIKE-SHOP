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
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;

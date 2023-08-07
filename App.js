import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 102,
          title: "ORBEA",
          img: "102.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "MTB",
          price: "1999",
        },
        {
          id: 103,
          title: "STELS",
          img: "103.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "KIDS",
          price: "100",
        },
        {
          id: 104,
          title: "LIV",
          img: "104.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "MTB",
          price: "899",
        },
        {
          id: 105,
          title: "ORBEA",
          img: "GAIN-D40.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "ROAD",
          price: "1399",
        },
        {
          id: 106,
          title: "CUBE",
          img: "106.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "KIDS",
          price: "699",
        },
        {
          id: 107,
          title: "CUBE",
          img: "107.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "KIDS",
          price: "799",
        },
        {
          id: 108,
          title: "ORBEA",
          img: "108.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "KIDS",
          price: "1799",
        },
        {
          id: 109,
          title: "ORBEA",
          img: "109.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "ROAD",
          price: "1999",
        },
        {
          id: 110,
          title: "BIANCHI",
          img: "110.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "ROAD",
          price: "5999",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.deleteOrder = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
    // console.log(this.state.orders);
  }
}

export default App;

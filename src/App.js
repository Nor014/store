import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

// @import url('https://fonts.googleapis.com/icon?family=Material+Icons')

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.icons = ['view_module', 'view_list']
    this.cards = [{
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];
    this.state = { icon: 'view_module' }

  }

  onSwitch = (icon) => {
    this.setState(prevState => {
      return { icon: this.icons.find(el => el != icon) }
    }, () => { console.log(this.state) })
  }

  render() {

    return (
      <div className="App">
        <IconSwitch icon={this.state.icon} onSwitch={this.onSwitch} />
        {this.state.icon === 'view_module' ? <CardsView cards={this.cards} /> : <ListView cards={this.cards} />}
      </div>
    );

  }
}

export default Store;

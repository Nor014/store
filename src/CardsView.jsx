import React from 'react';
import ShopCard from './ShopCard';

class CardsView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cards } = this.props

    return (
      <div className = 'container'>
        {cards.map(card => <ShopCard card={card} />)}
      </div>
    )
  }
}

export default CardsView;
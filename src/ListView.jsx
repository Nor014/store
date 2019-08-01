import React from 'react';
import ShopItem from './ShopItem';

class ListView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cards } = this.props

    return (
      <div className = 'container'>
        {cards.map(card => <ShopItem card={card} />)}
      </div>
    )
  }
}

export default ListView;
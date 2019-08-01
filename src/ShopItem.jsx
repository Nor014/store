import React from 'react';


class ShopItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { card } = this.props;

    const shopCardStyle = {
      backgroundImage: `url(${card.img})`
    }

    return (
      <div className='shopItem'>
        <img className="shopItem__img" src = {card.img} />
        <h2 className="shopCard__name">{card.name}</h2>
        <p className='shopCard__color'>{card.color}</p>
        <p className='shopCard__price'>{card.price}</p>
        <button className='shopCard__button'> ADD TO CARD</button>
      </div>
    )
  }
}

export default ShopItem;
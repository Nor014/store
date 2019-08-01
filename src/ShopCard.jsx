import React from 'react';


class ShopCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { card } = this.props;

    const shopCardStyle = {
      backgroundImage: `url(${card.img})`
    }

    return (
      <div className='shopCard' style={shopCardStyle}>

        <div className='shopCard__info'>
          <h2 className="shopCard__name">{card.name}</h2>
          <p className='shopCard__color'>{card.color}</p>
        </div>

        <div className='shopCard__inner'>
          <p className='shopCard__price'>{card.price}</p>
          <button className='shopCard__button'> ADD TO CARD</button>
        </div>

      </div>
    )
  }
}

export default ShopCard;
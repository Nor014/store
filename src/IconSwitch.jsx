import React from 'react';

class IconSwitch extends React.Component {
  constructor(props) {
    super(props)
  }

  onSwitch = (icon) => {
    this.props.onSwitch(icon)
  }


  render() {
    const { icon } = this.props;

    let iconName = icon === 'view_module' ? 'accessibility' : 'android';

    return (
      
      <div className='icon_wrapper'>
        <i className="material-icons" onClick={() => this.onSwitch(icon)}> {iconName} </i>
      </div>
    )
  }
}

export default IconSwitch;
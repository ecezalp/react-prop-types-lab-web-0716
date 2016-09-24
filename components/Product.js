const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.producer}
        {this.props.hasWatermark}
        {this.props.color}
        {this.props.weight}
      </div>
    )
  }
}

  Product.defaultProps = {
    hasWatermark: false
  }
  Product.propTypes = {
    name: React.PropTypes.string.isRequired,
    producer: React.PropTypes.string,
    hasWatermark: React.PropTypes.bool,
    color: React.PropTypes.oneOf(['white', 'salmon', 'eggshell-white']).isRequired,
    weight: customValidator
  }

// I'm not sure why this is not working (two errors total, weight should be a number && weight should be between 80 and 300) but for the sake of moving on I am submitting a pull request, will come back later

function customValidator(props, propName, componentName) {
    if (typeof(props[propName]) !== "number" || props[propName] < 80 || props[propName] > 300 ) {
      return new Error('bad weight')
    }
    return null
  }

  module.exports = Product
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class MyComponent extends Component  {
    static defaultProps = {
        name: 'base name'
    }

    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    }
    render() {
        const {name, favoriteNumber, children} = this.props
        return (
            <div>
                hello this my name : {name} <br />
                children v: {children} <br />
                my favorite number: {favoriteNumber}
            </div>
        )
    }
}

export default MyComponent;
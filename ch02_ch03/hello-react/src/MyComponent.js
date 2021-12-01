import React from 'react';
import PropTypes from 'prop-types'

const MyComponent = ({name, children, favoriteNumber}) => {
    return <div>
        this is my name {name} <br >
        </br>
        children: {children}
        <br />
        my best number: {favoriteNumber}
        </div>
}

MyComponent.defaultProps = {
    name: 'basename'
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;
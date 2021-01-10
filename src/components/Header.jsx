import React, { Component } from 'react'
import { connect } from 'react-redux'

const handleEvent = function () {
    this.props.onClick()
}

class Header extends Component {
    render() {
        return (
            <header>
                <h1><a href="#welcome" onClick={handleEvent.bind(this)}>WEB</a></h1>
                World Wide Web
            </header>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: function () {
            dispatch({ type: 'WELCOME'})
        }
    }
}

export default connect(null, mapDispatchToProps)(Header)
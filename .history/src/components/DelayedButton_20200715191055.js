// Code DelayedButton Component Here
import React from 'react'


class DelayedButton extends React.Component {
    handleClick = (event) => {
        this.props.onDelayedClick([event, num])
        }
        render(){
    return <button onClick={this.handleClick}>Delayed!!</button>
    

    }
}
export default DelayedButton


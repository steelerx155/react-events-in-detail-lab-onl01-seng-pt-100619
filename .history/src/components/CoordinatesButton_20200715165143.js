// Code CoordinatesButton Component Here

import React from 'react'


class CoordinatesButton extends React.Component {
    handleClick = (props) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }
            render(){
    return(
        <div>
            <button>{this.props}</button>
        </div>       

    );
    }
}
export default CoordinatesButton

import React from 'react';
import { Button } from '@material-ui/core';

class Boton extends React.Component{
    render(){
        return(
            <div>
                <Button href={this.props.goTo} onClick={this.props.onClick} variant={this.props.button_variant} color={this.props.button_color}>{this.props.button_name}</Button>
            </div>
        )
    }
}

export default Boton;
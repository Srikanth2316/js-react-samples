import React from "react";

class Toggle extends React.Component{
    constructor(props){
        super(props);
            super(props);
            this.state = {
                isToggleOn : true
            };
            this.hanldeClick = this.hanldeClick.bind(this);
        }
        handleClick(){
            this.setState(prevstate => ({
                isToggleOn :!prevstate.isToggleOn
            }))
        }
        render(){
            return(
                <button onclick = {this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            )
        }
    }
export default Toggle
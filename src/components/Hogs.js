import React from 'react'; 
import Description from './Description';

export default class Hogs extends React.Component {
    constructor() {
        super()
        this.state = {
            clicked: false
        }
    }

    handleClick = () => {
      this.setState(previousState => {
         return { clicked: !previousState.clicked}
      }, () => console.log(this.state))
        
    }

 render () {
     let hogName = this.props.hog.name.split(' ').join('_').toLowerCase()
     let pigImage = require("../hog-imgs/" + hogName + ".jpg")
     return (
         <div>
             <h2>{this.props.hog.name}</h2>
             <img onClick={this.handleClick} src={pigImage} alt="" width="50%"/>
             {this.state.clicked && < Description hog={this.props.hog} />}
         </div>
     )
 }
}
import React from 'react'; 

export default class Description extends React.Component{
    render() {
        return(
            <div>
                <p>Specialty: {this.props.hog.specialty}</p>
                <p>Greased: {this.props.hog.greased.toString()}</p>
                <p>Weight: {this.props.hog.weight}</p>
                <p>Medal: {this.props.hog['highest medal achieved']}</p>
            </div>
        )
    }
}
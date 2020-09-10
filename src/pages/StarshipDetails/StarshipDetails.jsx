import React, { Component } from 'react'
import { getStarShipsDetails } from '../../services/api-calls'
import { Link } from 'react-router-dom'

class StarshipDetails extends Component {
    state = { 
        url: this.props.location.state.starship.url,
        starshipDetails: {}
     }

     async componentDidMount(){
         const starshipDetails = await getStarShipsDetails(this.state.url)
         this.setState({starshipDetails})
     }

    render() { 
        const { starshipDetails } = this.state
        return ( 
            <div>
                {starshipDetails.name ?
            <>
                <h3>Starship Details</h3>
                <h4>Name: {starshipDetails.name}</h4>
                <h4>Model: {starshipDetails.model}</h4>
                <h4>Length: {starshipDetails.length}</h4>
                <h4>Crew: {starshipDetails.crew}</h4>
                <h4>Class: {starshipDetails.starship_class}</h4>
            </>
            :
            <p>Loading Starship details ...</p>
        }   
            <Link
            to={{
                pathname: '/'
            }}
            >
                <btn>Return</btn>
            
            </Link>
            </div>
         );
    }
}
 
export default StarshipDetails;
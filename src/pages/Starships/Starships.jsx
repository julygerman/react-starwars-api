import React, { Component } from 'react';
import { getStarships } from '../../services/api-calls'
import { Link } from 'react-router-dom'

class Starships extends Component {
    state = { 
        results: []
     }

     async componentDidMount(){
         const starShipsList = await getStarships()
         console.log(starShipsList)
         this.setState({results: starShipsList.results})
     }

    render() { 
        return ( 
            <>
            <h1>Starships</h1>
            <div className='card-container'>
                {this.state.results.map((starship) => (
                <div key={starship.index}>
                    <Link
                    to={{
                        pathname: `/starship`,
                        state: {starship}
                    }}
                    >
                    <div>
                        {starship.name}
                    </div>
                    </Link>
                </div>
                ))}
            </div>
            </>
         );
    }
}
 
export default Starships;
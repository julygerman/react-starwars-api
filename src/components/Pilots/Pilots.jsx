import React, { Component } from 'react'
import { getPilots } from '../../services/api-calls'

class Pilots extends Component {
  state = { 
    pilotUrls: this.props.pilots,
    pilotList: []
  }

  async componentDidMount(){
    const promises = await getPilots(this.state.pilotUrls)
    const pilotObjects = await Promise.all(promises);
    this.setState({ pilotList: pilotObjects})
    console.log(this.state.pilotList)
  }

  render() { 
      const { pilotList } = this.state
    return ( 
      <>
      {pilotList.length
      ?
      <>
      <p>Notable Pilots:</p>
          {pilotList.map((pilot, idx)=>
      <p key={idx}>{pilot.name}</p>  
          )}
    </>
    :
    <p>This ship has no notable Pilots</p>
    }
    </>
    );
  }
}
 
export default Pilots;
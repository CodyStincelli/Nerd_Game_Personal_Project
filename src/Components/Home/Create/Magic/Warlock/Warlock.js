import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { cantripUpdate, firstLevelUpdate } from '../../../../../ducks/reducer';

export class WarlockSpells extends Component{
    constructor(){
        super();
        this.state = {
            cantrip1: [],
            cantrip1Name: 0,
            cantrip2: [],
            cantrip2Name: 0,
            firstLevel1: [],
            firstLevel1Name: 0,
            firstLevel2: [],
            firstLevel2Name: 0
        }
    }


handleFinish = () => {
    let can1 = this.state.cantrip1Name
    let can2 = this.state.cantrip2Name
    let spell1 = this.state.firstLevel1Name
    let spell2 = this.state.firstLevel2Name
    let newCantripArray = [can1, can2]
    let newFirstLevelArray = [spell1, spell2]

    this.props.cantripUpdate(newCantripArray)
    this.props.firstLevelUpdate(newFirstLevelArray)
}

loadDesc = (value, position) => {
    let id = Number(value)
    let nameSpot = `${position}Name`
    axios.get(`http://dnd5eapi.co/api/spells/${id}`).then((res) =>{
        console.log('Got a response', res);
        this.setState({[position]: res.data.desc,
                       [nameSpot]: id}, () => console.log('Success!'))
    } ).catch(console.log)
    
}



render(){
    return(
    <div id="instructions" className="paper">
    <div className='basic-page spell'>
        <div className='basic-select'><WarlockCantrips position = {'cantrip1'} loadDesc = {this.loadDesc}/></div>
        <h6 className='spell-description'>{this.state.cantrip1[0]}</h6>
        <div className='basic-select'><WarlockCantrips position = {'cantrip2'} loadDesc = {this.loadDesc}/></div>
        <h6 className='spell-description'>{this.state.cantrip2[0]}</h6>
        <div className='basic-select'><WarlockFirstLevel position = {'firstLevel1'} loadDesc = {this.loadDesc}/></div>
        <h6 className='spell-description'>{this.state.firstLevel1[0]}</h6>
        <div className='basic-select'><WarlockFirstLevel position = {'firstLevel2'} loadDesc = {this.loadDesc}/></div>
        <h6 className='spell-description'>{this.state.firstLevel2[0]}</h6>
    </div>
        <hr></hr>
        <h6 className='bottom-description'>Warlocks are mortals who have made a pact with some kind of higher beings for there ancient and power magics.</h6>
        <button onClick={ () => this.handleFinish()}><a href='/#/done'>done</a></button>
    </div>
)}}

function WarlockCantrips({position, loadDesc}) {return (<select  onChange={e => loadDesc(e.target.value, position)}>
    <option value='' selected disabled hidden>Cantrips</option>
    <option value='38'>Chill Touch</option>
    <option value='91'>Eldritch Blast</option>
    <option value='176'>Mage Hand </option>
    <option value='196'>Minor Illusion </option>
    <option value='215'>Prestidigitation </option>
    <option value='288'>True Strike </option>
</select>)}


function WarlockFirstLevel({position, loadDesc}){return(
    <select  onChange={e => loadDesc(e.target.value, position)}>
        <option value='' selected disabled hidden>First Level Spells</option>
        <option value='37'>Charm Person</option>
        <option value='47'>Comprehend Languages</option>
        <option value='97'>Expeditious Retreat</option>
        <option value='156'>Illusory Script </option>
        <option value='223'>Protection from Evil and Good </option>
        <option value='289'>Unseen Servant </option>
    </select>
)}

  function mapStateToProps(state) {
    return {

    }
  }
  

export default connect(mapStateToProps, { cantripUpdate, firstLevelUpdate })(WarlockSpells);
//    <option value=''>Poison Spray NA</option>
//        <option value=''>Hellish Rebuke NA</option>
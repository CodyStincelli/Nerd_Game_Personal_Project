import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { cantripUpdate, firstLevelUpdate } from '../../../../../ducks/reducer';

export class SorcererSpells extends Component{
    constructor(){
        super();
        this.state = {
            cantrip1: [],
            cantrip2: [],
            cantrip3: [],
            cantrip4: [],
            firstLevel1: [],
            firstLevel2: [],
            cantrip1Name: 0,
            cantrip2Name: 0,
            cantrip3Name: 0,
            cantrip4Name: 0,
            firstLevel1Name: 0,
            firstLevel2Name: 0
        }
    }


handleFinish = () => {
    let can1 = this.state.cantrip1Name
    let can2 = this.state.cantrip2Name
    let can3 = this.state.cantrip3Name
    let can4 = this.state.cantrip4Name
    let spell1 = this.state.firstLevel1Name
    let spell2 = this.state.firstLevel2Name
    let newCantripArray = [can1, can2, can3, can4]
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
        <div className='basic-select'><SorcererCantrips position = {'cantrip1'} loadDesc = {this.loadDesc}/></div>
        <h6 className='spell-description'>{this.state.cantrip1[0]}</h6>
        <div className='basic-select'><SorcererCantrips position = {'cantrip2'} loadDesc = {this.loadDesc}/></div>
        <h6 className='spell-description'>{this.state.cantrip2[0]}</h6>
        <div className='basic-select'><SorcererCantrips position = {'cantrip3'} loadDesc = {this.loadDesc}/></div>
        <h6 className='spell-description'>{this.state.cantrip3[0]}</h6>
        <div className='basic-select'><SorcererCantrips position = {'cantrip4'} loadDesc = {this.loadDesc}/></div>
        <h6 className='spell-description'>{this.state.cantrip4[0]}</h6>
        <div className='basic-select'><SorcererFirstLevel position = {'firstLevel1'} loadDesc = {this.loadDesc}/></div>
        <h6 className='spell-description'>{this.state.firstLevel1[0]}</h6>
        <div className='basic-select'><SorcererFirstLevel position = {'firstLevel2'} loadDesc = {this.loadDesc}/></div>
        <h6 className='spell-description'>{this.state.firstLevel2[0]}</h6>
        </div>
        <hr></hr>
        <h6 className='bottom-description'>Sorcerer's are natural mages, born with a high affinity for magic they were burned at the stake for being witches...</h6>
        <button onClick={ () => this.handleFinish()}><a href='/#/done'>done</a></button>
    </div>
)}}

function SorcererCantrips({position, loadDesc}){return (
<select onChange={e => loadDesc(e.target.value, position)}>
    <option value='' selected disabled hidden>Cantrips</option>
    <option value='2'>Acid Splash</option>
    <option value='38'>Chill Touch</option>
    <option value='67'>Dancing Lights</option>
    <option value='169'>Light </option>
    <option value='176'>Mage Hand </option>
    <option value='190'>Mending </option>
    <option value='191'>Message </option>
    <option value='194'>Minor Illusion </option>
    <option value='215'>Prestidigitation </option>
    <option value='228'>Ray of Frost </option>
    <option value='252'>Shocking Grasp </option>
    <option value='288'>True Strike </option>
</select>)}

function SorcererFirstLevel({position, loadDesc}){return(
    <select onChange={e => loadDesc(e.target.value, position)}>
        <option value='' selected disabled hidden>First Level Spells</option>
        <option value='33'>Burning Hands</option>
        <option value='37'>Charm Person</option>
        <option value='43'>Color Spray</option>
        <option value='47'>Comprehend Languages</option>
        <option value='75'>Detect Magic</option>
        <option value='79'>Disguise Self</option>
        <option value='97'>Expeditious Retreat</option>
        <option value='102'>False Life </option>
        <option value='104'>Feather Fall </option>
        <option value='119'>Fog Cloud </option>
        <option value='164'>Jump </option>
        <option value='175'>Mage Armor </option>
        <option value='179'>Magic Missile </option>
        <option value='249'>Shield </option>
        <option value='254'>Silent Image </option>
        <option value='256'>Sleep </option>
        <option value='279'>Thunderwave </option>
    </select>
)}
  function mapStateToProps(state) {
    return {

    }
  }
  

export default connect(mapStateToProps, { cantripUpdate, firstLevelUpdate })(SorcererSpells);

//    <option value=''>Fire Bolt NA</option>
//    <option value=''>Poison Spray NA</option>
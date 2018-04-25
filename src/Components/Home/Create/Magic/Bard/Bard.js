import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { cantripUpdate, firstLevelUpdate } from '../../../../../ducks/reducer';

export class BardSpells extends Component{
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
            firstLevel2Name: 0,
            firstLevel3: [],
            firstLevel3Name: 0,
            firstLevel4: [],
            firstLevel4Name: 0
        }
    }

handleFinish = () => {
    let can1 = this.state.cantrip1Name
    let can2 = this.state.cantrip2Name
    let spell1 = this.state.firstLevel1Name
    let spell2 = this.state.firstLevel2Name
    let spell3 = this.state.firstLevel3Name
    let spell4 = this.state.firstLevel4Name
    let newCantripArray = [can1, can2]
    let newFirstLevelArray = [spell1, spell2, spell3, spell4]

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
        <div className='basic-select'><BardCantrips className='basic-select' position = {'cantrip1'} loadDesc = {this.loadDesc}/></div>
        <h6 className='spell-description'>{this.state.cantrip1[0]}.</h6>
        <div className='basic-select'><BardCantrips className='basic-select' position = {'cantrip2'} loadDesc = {this.loadDesc}/></div>
        <h6 className='spell-description'>{this.state.cantrip2[0]}</h6>
        <div className='basic-select'><BardFirstLevel className='basic-select' position = {'firstLevel1'} loadDesc = {this.loadDesc}/></div>
        <h6 className='spell-description'>{this.state.firstLevel1[0]}</h6>
        <div className='basic-select'><BardFirstLevel className='basic-select' position = {'firstLevel2'} loadDesc = {this.loadDesc}/></div>
        <h6 className='spell-description'>{this.state.firstLevel2[0]}</h6>
        <div className='basic-select'><BardFirstLevel className='basic-select' position = {'firstLevel3'} loadDesc = {this.loadDesc}/></div>
        <h6 className='spell-description'>{this.state.firstLevel3[0]}</h6>
        <div className='basic-select'><BardFirstLevel className='basic-select' position = {'firstLevel4'} loadDesc = {this.loadDesc}/></div>
        <h6 className='spell-description'>{this.state.firstLevel4[0]}</h6>
    </div>
        <    hr></hr>
        <h6 className='bottom-description'>You are the life of the party! Casting spells on people with your sick musical skills, you have access to 2 cantrips and 4 diffrent first level spells to start with.</h6>
        <button onClick={() => this.handleFinish()}><a href='/#/done'>done</a></button>
    </div>
)}}

function BardCantrips({position, loadDesc}){ {return (
    <select onChange={e => loadDesc(e.target.value, position)}>
        <option value='' selected disabled hidden>Cantrips</option>
        <option value='67'>Dancing Lights</option>
        <option value='169'>Light </option>
        <option value='176'>Mage-Hand </option>
        <option value='190'>Mending </option>
        <option value='191'>Message </option>
        <option value='194'>Minor Illusion </option>
        <option value='215'>Prestidigitation </option>
        <option value='288'>True Strike </option>
    </select>)}}

function BardFirstLevel({position, loadDesc}){ {return(
    <select onChange={e => loadDesc(e.target.value, position)}>
        <option value='' selected disabled hidden>First Level</option>
        <option value='21'>Bane</option>
        <option value='37'>Charm Person</option>
        <option value='47'>Comprehend Languages</option>
        <option value='66'>Cure Wounds</option>
        <option value='75'>Detect Magic</option>
        <option value='79'>Disguise Self</option>
        <option value='100'>Faerie Fire </option>
        <option value='104'>Feather Fall </option>
        <option value='145'>Healing Word </option>
        <option value='148'>Heroism </option>
        <option value='149'>Hideous Laughter </option>
        <option value='155'>Identify </option>
        <option value='156'>Illusory Script </option>
        <option value='174'>Longstrinder </option>
        <option value='254'>Silent Image </option>
        <option value='256'>Sleep </option>
        <option value='259'>Speak With Animals </option>
        <option value='279'>Thunderwave </option>
        <option value='289'>Unseen Servant </option> 
    </select>
)}}

  function mapStateToProps(state) {
    return {

    }
  }
  

export default connect(mapStateToProps, { cantripUpdate, firstLevelUpdate })(BardSpells);
//    <option value=''>Vicious Mockery NA</option>
//         <option value=''>Animal Friendship NA</option>
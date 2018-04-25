import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { cantripUpdate } from '../../../../../ducks/reducer';

export class WizardSpells extends React.Component{
    constructor(){
        super();
        this.state = {
            cantrip1:[],
            cantrip1Name: 0,
            cantrip2: [],
            cantrip2Name: 0,
            cantrip3: [],
            cantrip3Name: 0
        }
    }

    handleFinish = () => {
    let can1 = this.state.cantrip1Name
    let can2 = this.state.cantrip2Name
    let can3 = this.state.cantrip3Name
    let newCantripArray = [can1, can2, can3]

    this.props.cantripUpdate(newCantripArray)
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
        <div className='basic-select'><WizardCantrips position = {'cantrip1'} loadDesc = {this.loadDesc} /></div>
        <h6 className='spell-description'>{this.state.cantrip1[0]}</h6>
        <div className='basic-select'><WizardCantrips position = {'cantrip2'} loadDesc = {this.loadDesc}/></div>
        <h6 className='spell-description'>{this.state.cantrip2[0]}</h6>
        <div className='basic-select'><WizardCantrips  position = {'cantrip3'} loadDesc = {this.loadDesc} /></div>
        <h6 className='spell-description'>{this.state.cantrip3[0]}</h6>
    </div>
        <hr></hr>
        <h6 className='bottom-description'>Wizarding takes years of practice, that is why wizards are always grey haired old men.</h6>
        <button onClick={ () => this.handleFinish()}><a href='/#/done'>done</a></button>
    </div>
)}}

function WizardCantrips({position, loadDesc}){return (
<select onChange={e => loadDesc(e.target.value, position)}>
    <option value='' selected disabled hidden>Cantrips</option>
    <option value='2'>Acid Splash</option>
    <option value='38'>Chill Touch</option>
    <option value='67'>Dancing Lights</option>
    <option value='169'>Light</option>
    <option value='176'>Mage Hand </option>
    <option value='190'>Mending </option>
    <option value='191'>Message </option>
    <option value='194'>Minor Illusion </option>
    <option value='215'>Prestidigitation </option>
    <option value='228'>Ray of Frost </option>
    <option value='252'>Shocking Grasp </option>
    <option value='288'>True Strike </option>
</select>)}

  function mapStateToProps(state) {
    return {

    }
  }
  

export default connect(mapStateToProps, { cantripUpdate })(WizardSpells);


//<option value=''>Poison Spray NA</option>
//    <option value=''>Fire Bolt NA</option>
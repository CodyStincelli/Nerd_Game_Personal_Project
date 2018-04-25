import React from 'react';
import axios from 'axios';
import './Done.css'
import { connect } from 'react-redux';

export class LoadedSpells extends React.Component{
    constructor(){
        super();
        this.state = {
            cantrip1: '',
            cantrip2: '',
            cantrip3: '',
            cantrip4: '',
            cantrip5: '',
            spell1: '',
            spell2: '',
            spell3: '',
            spell4: '',
            spell5: ''
        }
    }
    componentDidMount() {
        this.spellNames('cantrip', this.props.cantripArray);
        this.spellNames('spell', this.props.firstLevelArray);

    }
spellNames = (spellType, spellArray) => {
spellArray.forEach((element, index) => {
        axios.get(`http://dnd5eapi.co/api/spells/${element}`).then((res) =>{
        console.log('Got a response', res);
        this.setState({[`${spellType}${index + 1}`]: res.data.name}, () => console.log('Success!'))
        } ).catch(console.log)
    }
)}
    render(){
        console.log(this.props.cantripArray, this.props.firstLevelArray)
        return(
            <div>
                <div className='cantrips-known spell-description small'>
                    <li className='list-fix finish'>
                        <ul className='list-title'>Known Cantrips</ul>
                        <ul>{this.state.cantrip1}</ul>
                        <ul>{this.state.cantrip2}</ul>
                        <ul>{this.state.cantrip3}</ul>
                        <ul>{this.state.cantrip4}</ul>
                    </li>
                </div>
                <div className='first-known spell-description small'>
                    <li className='list-fix finish'>
                        <ul className='list-title'>Known Spells</ul>
                        <ul>{this.state.spell1}</ul>
                        <ul>{this.state.spell2}</ul>
                        <ul>{this.state.spell3}</ul>
                        <ul>{this.state.spell4}</ul>
                    </li>
                </div>
            </div>
        )
    }
}

let actionCreator = {
//insert action creators from reducer here
  }
  
  function mapStateToProps(state) {
    return {
      cantripArray: state.cantripArray,
      firstLevelArray: state.firstLevelArray
    }
  }
  
export default connect(mapStateToProps)(LoadedSpells);
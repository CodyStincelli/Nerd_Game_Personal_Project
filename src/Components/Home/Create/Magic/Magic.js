import React, {Component} from 'react';
import Bard from './Bard/Bard';
import Cleric from './Cleric/Cleric';
import Druid from './Druid/Druid';
import Sorcerer from './Sorcerer/Sorcerer';
import Warlock from './Warlock/Warlock';
import Wizard from './Wizard/Wizard';
import { connect } from 'react-redux';



class Spell extends Component {
    constructor(){
        super();
        this.state = {
            selectedClass: ''
        }
    }
    changeHandler(value){
        this.setState({selectedClass: value})
    }
    // add padding top 50px to all spells basic query
render(){
    let WhatClass = (classSelect) => {
        console.log('class select', classSelect, classSelect.pass)            
        switch(classSelect.pass) {
        case 'Bard':
            return <Bard />
            break;
        case 'Cleric':
            return <Cleric />
            break;
        case 'Druid':
            return <Druid />
            break;
        case 'Sorcerer':
            return <Sorcerer />
            break;
        case 'Warlock':
            return <Warlock />
            break;
        case 'Wizard':
            return <Wizard />;
        default:
        console.log('default')
            return <div>nothing</div>
        }
    }
    return(
        <div>
        <div className='spell-banner-parent'>
            <div className='spell-banner'>{this.props.class}</div>
        </div>
                <WhatClass pass = {this.props.class} />                   
        </div>
    )
}}
let actionCreator = {

}
  
  function mapStateToProps(state) {
    return {
      class: state.class,
    }
  }
  
export default connect(mapStateToProps, {})(Spell);
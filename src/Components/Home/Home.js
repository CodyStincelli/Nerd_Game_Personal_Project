import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

export class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            characterName : ['Solaire of Astora the Paladin', 
                             'Gandalf the Wizard',
                             'Conan the Barbarian',
                             'Legolas the Ranger',
                             ],
            user: null,
            deleteIndex: 0,
        }
    }
    componentDidMount(){
        console.log('hitting home')
        axios.get('/logged-in').then((session) =>{
            console.log(session)
            this.setState({user :session.data})

        if(this.props.charClass !== '' & this.props.name !== ''){
            console.log('making new guy')
            let newChar = [...this.state.characterName]
            newChar.push(`${this.props.name} the ${this.props.charClass}`)
            this.setState({characterName: newChar})
        }
    })
            // axios.get('/characters').then((characters) =>{
            //     console.log(characters)
            //     this.setState({characterName: characters})
            // })
}

deleteChanger(e){

    this.setState({deleteIndex: e.target.value})

}

deleteHandler(){
    let newCharArray = [...this.state.characterName]
    newCharArray.splice(this.state.deleteIndex, 1)
    this.setState({characterName: newCharArray})
}

render(){
    console.log(this.state.user)
    return(
    <div>
    { this.state.user
        ?
        <div id="instructions" className="paper">
        <div className='home-basic'>
            <button className='lined thin'><a href='/#/basic' className='remove-underline'>New Character</a></button>
            <div className='character-select'>
            <button className='lined thin' onClick={() => this.deleteHandler()}>Delete Character</button>
            <button className='lined thin'>Play Character</button>
            <div class='make this an update later'></div>
            <div class='characterlist'>
            </div>
            <div className='character-display'>
                <select className='list-fix select-fixer' onChange={(e) => this.deleteChanger(e)} size={5}>
                    <option value={0}>{this.state.characterName[0]}</option>
                    <option value={1}>{this.state.characterName[1]}</option>
                    <option value={2}>{this.state.characterName[2]}</option>
                    <option value={3}>{this.state.characterName[3]}</option>
                    <option value={4}>{this.state.characterName[4]}</option>
                </select>
            </div>
            </div>
            </div>
        </div>
        :
        <div>Unauthorized</div>
        }
    </div>
    )
}
}

function mapStateToProps(state) {
    return {
      name: state.name,
      charClass: state.class
    }
  }
  export default connect(mapStateToProps)(Home);
//dbeater
// Tim-the Sorcerer from monty python
//Solair-the-paladin from darksouls
//Legolas-the-ranger
//Skeletor-the-warlock
//xeno-warrior-princess-the-fighter
//Conana-the-barbarian
//cicero-the-bard
//cheech and chong the druids
//aang the monk
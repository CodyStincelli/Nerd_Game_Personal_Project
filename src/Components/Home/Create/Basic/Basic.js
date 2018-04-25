import React, {Component} from 'react';
import { connect } from 'react-redux';
import { nameChanger } from '../../../../ducks/reducer';
import { classChanger } from '../../../../ducks/reducer';
import { raceChanger } from '../../../../ducks/reducer';


class Basic extends Component {
    handleRaceChange(value) {
        let raceIndex = (value) => {switch(value) {
            case 'Dwarf':
                return 1
                break;
            case 'Elf':
                return 2
                break;
            case 'Halfing':
                return 3
                break;
            case 'Human':
                return 4
                break;
            case 'Dragonborn':
                return 5
                break;
            case 'Gnome':
                return 6
                break;
            case 'Half-Elf':
                return 7
                break;
            case 'Half-Orc':
                return 8
                break;
            case 'Tiefling':
                return 9
                break;
            default:
                return 0
            }}
            console.log(raceIndex(value))
            this.props.raceChanger(raceIndex(value))
    }
    render() {

    return(
        <div id="instructions" className="paper">
            <div className='basic-page'>
                <input className='basic-select' onChange={e => this.props.nameChanger(e.target.value)} type='text' placeholder='Name' />
                <p className='basic-text'>Here you can name your new character</p>
                <select className='basic-select' onChange={e => this.handleRaceChange(e.target.value)}>
                    <option value="" selected disabled hidden>Race</option>
                    <option value='Dragonborn'>Dragonborn</option>
                    <option value='Dwarf'>Dwarf</option>
                    <option value='Elf'>Elf</option>
                    <option value='Gnome'>Gnome</option>
                    <option value='Half-Elf'>Half-Elf</option>
                    <option value='Half-Orc'>Half-Orc</option>
                    <option value='Halfling'>Halfling</option>
                    <option value='Human'>Human</option>
                    <option value='Tiefling'>Tiefling</option>
                </select>
                <p className='basic-text'>Select the race you will play as, this will effect your stats minorly. Just play what you like!</p>
                <select  className='basic-select' onChange={e => this.props.classChanger(e.target.value)}>
                        <option value="" selected disabled hidden>Class</option>
                        <option value='Barbarian'>Barbarian</option>
                        <option value='Bard'>Bard</option>
                        <option value='Druid'>Druid</option>
                        <option value='Fighter'>Fighter</option>
                        <option value='Monk'>Monk</option>
                        <option value='Paladin'>Paladin</option>
                        <option value='Ranger'>Ranger</option>
                        <option value='Sorcerer'>Sorcerer</option>
                        <option value='Warlock'>Warlock</option>
                        <option value='Wizard'>Wizard</option>
                    </select>
                    <p className='basic-text'>This has the largest affect on how you will play the game, for new players I suggest not play Wizard, Warlock, or Sorcerer</p>
                <hr></hr>
                <p className='bottom-description'>To get started lets pick the basics. Choose a class and race then give your character a name of their own.</p>
                <button><a href='/#/skill'>Next Page</a></button>
            </div>
        </div>
    )}
}
let actionCreator = {
    nameChanger,
    classChanger,
    raceChanger
  }
  
  function mapStateToProps(state) {
    return {
      name: state.name,
      class: state.class,
      race: state.race
    }
  }
  
export default connect(mapStateToProps, {nameChanger, classChanger, raceChanger})(Basic);

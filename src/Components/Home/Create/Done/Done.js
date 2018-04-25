import React from 'react';
import './Done.css'
import { connect } from 'react-redux';
import { rollBonus } from '../Skill/Skill'
import LoadedSpells from './loadedspells'


export function done({abilityScore, bonuses, race, name, selectedClass, healthPoints}, raceIndex) {
    return(
    <div id="instructions" className="paper">
    <div className='done-body'>
        <div className='done-skill'>
            <Strength info = {{abilityScore, bonuses}} />
            <Dexterity info = {{abilityScore, bonuses}} />
            <Constitution info = {{abilityScore, bonuses}} />
            <Intelligence info = {{abilityScore, bonuses}} />
            <Wisdom info = {{abilityScore, bonuses}} />
            <Charisma info = {{abilityScore, bonuses}} />
        </div>
    <div className='done-right'>
        <div className='done-spec'>
            <div className='done-selected'>{name}</div>
            <div className='done-selected'>{NameRace({race})}</div>
            <div className='done-selected'>{selectedClass}</div>
        </div>
            <LoadedSpells />
            <div className='health-done'>Health: {healthPoints}</div>
    </div>
    </div>
            <hr></hr>
    <div className='basic-page'>
        <div className='bottom-description'>
            Congratulations! You are done and ready to play your new character.
        </div>
        <button><a href='/#/home'>Finalize</a></button>
        </div>
    </div>
    )
}

function Strength({info:{abilityScore, bonuses}}){
    return(
        <div className='skill-element'>
            <div className='stats-display str'>
            <div className='stats-name'>Strength</div>
            <div className='stats-number'>{abilityScore[0] + bonuses[0]}</div>
            <div className='stats-bonus'>{rollBonus(abilityScore[0], bonuses[0])}</div>
        </div>
    </div>
    )
}

function Dexterity({info:{abilityScore, bonuses}}){
    return(
        <div className='skill-element'>
            <div className='stats-display dex'>
            <div className='stats-name'>Dexterity</div>
            <div className='stats-number'>{abilityScore[1] + bonuses[1]}</div>
            <div className='stats-bonus'>{rollBonus(abilityScore[1], bonuses[1])}</div>
        </div>
    </div>
    )
}

function Constitution({info:{abilityScore, bonuses}}){
    return(
        <div className='skill-element'>
            <div className='stats-display con'>
            <div className='stats-name'>Constitution</div>
            <div className='stats-number'>{abilityScore[2] + bonuses[2]}</div>
            <div className='stats-bonus'>{rollBonus(abilityScore[2], bonuses[2])}</div>
        </div>
    </div>
    )
}

function Intelligence({info:{abilityScore, bonuses}}){
    return(
        <div className='skill-element'>
            <div className='stats-display int'>
            <div className='stats-name'>Intelligence</div>
            <div className='stats-number'>{abilityScore[3] + bonuses[3]}</div>
            <div className='stats-bonus'>{rollBonus(abilityScore[3], bonuses[3])}</div>
        </div>
    </div>
    )
}

function Wisdom({info:{abilityScore, bonuses}}){
    return(
        <div className='skill-element'>
            <div className='stats-display wis'>
            <div className='stats-name'>Wisdom</div>
            <div className='stats-number'>{abilityScore[4] + bonuses[4]}</div>
            <div className='stats-bonus'>{rollBonus(abilityScore[4], bonuses[4])}</div>
        </div>
    </div>
    )
}

function Charisma({info:{abilityScore, bonuses}}){
    return(
        <div className='skill-element'>
            <div className='stats-display cha'>
            <div className='stats-name'>Charisma</div>
            <div className='stats-number'>{abilityScore[5] + bonuses[5]}</div>
            <div className='stats-bonus'>{rollBonus(abilityScore[5], bonuses[5])}</div>
        </div>
    </div>
    )
}

let actionCreator = {
//insert action creators from reducer here
  }
function NameRace({race}){
    switch(race) {
case 1:
    return 'Dwarf'
    break;
case 2:
    return 'Elf'
    break;
case 3:
    return 'Halfing'
    break;
case 4:
    return 'Human'
    break;
case 5:
    return 'Dragonborn'
    break;
case 6:
    return 'Gnome'
    break;
case 7:
    return 'Half-Elf'
    break;
case 8:
    return 'Half-Orc'
    break;
case 9:
    return 'Tiefling'
    break;
default:
    return 'None'
}}
  
  function mapStateToProps(state) {
    return {
      abilityScore : state.abilityScore,
      bonuses : state.bonuses,
      selectedClass : state.class,
      race : state.race,
      name : state.name,
      healthPoints : state.healthPoints
    }
  }
  
export default connect(mapStateToProps)(done);
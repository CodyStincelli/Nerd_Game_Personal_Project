import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { statsFinalizer, updateBonus, updateHealth } from '../../../../ducks/reducer';

class Skill extends Component {
    constructor() {
        super()
         this.state = {
            stats: [15, 14, 13, 12, 10, 8],
            hitDice: 0,
            bonuses: [0, 0, 0, 0, 0, 0],
            buttonSwitch: false,
            buttonSwitch2: false,
            nextPage: ''
        }
    }

    componentDidMount() {
        console.log(this.props.class)
        axios.get(`http://dnd5eapi.co/api/races/${this.props.race}`).then((res) =>{
            console.log('Got a response', res);
            this.setState({bonuses: res.data.ability_bonuses})
        } ).catch(console.log)

        axios.get(`http://dnd5eapi.co/api/classes/${this.props.class.toLowerCase()}`).then((res) =>{
            this.setState({hitDice: res.data.hit_die})
        }).catch(console.log)

                if(this.props.class === 'Bard' || 
                this.props.class === 'Cleric' || 
                this.props.class === 'Druid' ||
                this.props.class === 'Sorcerer' ||
                this.props.class === 'Warlock' ||
                this.props.class === 'Wizard'){
            this.setState({nextPage: '/#/spell'})
        }
        else{this.setState({nextPage: '/#/done'})}

    }
    finalizer(){
        let payload = [...this.state.stats]
        this.props.statsFinalizer(payload)
        this.setState({buttonSwitch2:true})
        this.props.updateBonus(this.state.bonuses)
        this.props.updateHealth(rollBonus(this.state.stats[2], this.state.bonuses[2]) + this.state.hitDice);
    }
    upButton(start, end) {
        
        let swapMe = [...this.state.stats]

        var temp = swapMe[start];
     
        swapMe[start] = swapMe[end];
        swapMe[end] = temp;
        console.log(temp)

        this.setState({stats: swapMe})
    }
    downButton(start, end){
        let swapMe = [...this.state.stats]

        var temp = swapMe[start];
     
        swapMe[start] = swapMe[end];
        swapMe[end] = temp;
        console.log(temp)

        this.setState({stats: swapMe})
    }
    statGenerator() {
        console.log('Generating Stats')
        var completeStats=[];
        var stats=[];
        var stat=[];
        var statTotal=0;
        for(let i = 0; i < 6; i++){
          for(let x = 0; x < 4; x++){
              stat.push(Math.floor(Math.random() * (6)) + 1)
          }
          for (let y = 0; y < 4; y++){
            if (stat[y] > stat[0] || stat[y] > stat[1] || stat[y] > stat[2] || stat[y] > stat[3]){
              stats.push(stat[y])
            }
            else{stat[y] = 0}
          }
          for(let z = 0; z < 3; z++){
            statTotal += stats[z];
          }
          completeStats.push(statTotal)
          statTotal = 0;
          stat =[];
          stats =[];
      }
      this.setState({stats:completeStats,
                      buttonSwitch: true})
    }

    render(){
        console.log(this.state.stats)
        console.log(this.props.abilityScore)
        //console.log(this.state.bonuses)
    return(
        <div id="instructions" className="paper">
            <button hidden={this.state.buttonSwitch || this.state.buttonSwitch2 }
             onClick={ () => {this.statGenerator()}} disabled={this.state.buttonSwitch}  >Randomize stats</button>
            <div className='skill-element'>
                <div>
                    <div className='str-down-button'>
                        <button className={`lined thick skill down round ${this.state.buttonSwitch2 ?'hide' :''}`} hidden={this.state.buttonSwitch2} onClick={() => this.downButton(0, 1)}>▼</button>
                    </div>
                </div>
                <div className='temp-stats'>
                    {this.state.stats[0]} + {this.state.bonuses[0]}
                <div>
                </div>
                </div>
                    <div className='stats-display str'>
                        <div className='stats-name'>Strength</div>
                        <div className='stats-number'>{this.state.stats[0] + this.state.bonuses[0]}</div>
                        <div className='stats-bonus'>{rollBonus(this.state.stats[0], this.state.bonuses[0])}</div>
                    </div>
            </div>
            <div className='skill-element'>
                <div>
                    <div>
                        <button className={`lined thick skill up round ${this.state.buttonSwitch2 ?'hide' :''}`} hidden={this.state.buttonSwitch2} onClick={() => this.upButton(1, 0)}>▲</button>
                    </div>
                    <div>
                        <button className={`lined thick skill down round ${this.state.buttonSwitch2 ?'hide' :''}`} hidden={this.state.buttonSwitch2} onClick={() => this.downButton(1, 2)}>▼</button>
                    </div>
                </div>
                <div>
                <div className='temp-stats'>
                {this.state.stats[1]} + {this.state.bonuses[1]}
                </div>
                </div>
                    <div className='stats-display dex'>
                        <div className='stats-name'>Dexterity</div>
                        <div className='stats-number'>{this.state.stats[1] + this.state.bonuses[1]}</div>
                        <div className='stats-bonus'>{rollBonus(this.state.stats[1], this.state.bonuses[1])}</div>
                    </div>
            </div>
            <div className='skill-element'>
                <div>
                    <div>
                        <button className={`lined thick skill up round ${this.state.buttonSwitch2 ?'hide' :''}`} hidden={this.state.buttonSwitch2} onClick={() => this.upButton(2, 1)}>▲</button>
                    </div>
                    <div>
                        <button className={`lined thick skill down round ${this.state.buttonSwitch2 ?'hide' :''}`} hidden={this.state.buttonSwitch2} onClick={() => this.downButton(3, 2)}>▼</button>
                    </div>
                </div>
                <div className='temp-stats'>
                    {this.state.stats[2]} + {this.state.bonuses[2]}
                <div>
                </div>
                </div>
                    <div className='stats-display con'>
                        <div className='stats-name'>Constitution</div>
                        <div className='stats-number'>{this.state.stats[2] + this.state.bonuses[2]}</div>
                        <div className='stats-bonus'>{rollBonus(this.state.stats[2], this.state.bonuses[2])}</div>
                    </div>
            </div>
            <div className='skill-element'>
                <div>
                    <div>
                        <button className={`lined thick skill up round ${this.state.buttonSwitch2 ?'hide' :''}`} hidden={this.state.buttonSwitch2} onClick={() => this.upButton(3, 2)}>▲</button>
                    </div>
                    <div>
                        <button className={`lined thick skill down round ${this.state.buttonSwitch2 ?'hide' :''}`} hidden={this.state.buttonSwitch2} onClick={() => this.downButton(3, 4)}>▼</button>
                    </div>
                </div>
                <div className='temp-stats'>
                    {this.state.stats[3]} + {this.state.bonuses[3]}
                <div>
                </div>
                </div>
                    <div className='stats-display int'>
                        <div className='stats-name'>Intelligence</div>
                        <div className='stats-number'>{this.state.stats[3] + this.state.bonuses[3]}</div>
                        <div className='stats-bonus'>{rollBonus(this.state.stats[3], this.state.bonuses[3])}</div>
                    </div>
            </div>
            <div className='skill-element'>
                <div>
                    <div>
                        <button className={`lined thick skill up round ${this.state.buttonSwitch2 ?'hide' :''}`} hidden={this.state.buttonSwitch2} onClick={() => this.upButton(4, 3)}>▲</button>
                    </div>
                    <div>
                        <button className={`lined thick skill down round ${this.state.buttonSwitch2 ?'hide' :''}`} hidden={this.state.buttonSwitch2} onClick={() => this.downButton(4, 5)}>▼</button>
                    </div>
                </div>
                <div className='temp-stats'>
                    {this.state.stats[4]} + {this.state.bonuses[4]}
                <div>
                </div>
                </div>
                    <div className='stats-display wis'>
                        <div className='stats-name'>Wisdom</div>
                        <div className='stats-number'>{this.state.stats[4] + this.state.bonuses[4]}</div>
                        <div className='stats-bonus'>{rollBonus(this.state.stats[4], this.state.bonuses[4])}</div>
                    </div>
            </div>
            <div className='skill-element'>
                <div>
                    <div>
                        <button className={`lined thick skill up round ${this.state.buttonSwitch2 ?'hide' :''}`} hidden={this.state.buttonSwitch2} onClick={() => this.upButton(5, 4)}>▲</button>
                    </div>
                </div>
                <div className='temp-stats'>
                    {this.state.stats[5]} + {this.state.bonuses[5]}
                <div>
                </div>
                </div>
                    <div className='stats-display cha'>
                        <div className='stats-name'>Charisma</div>
                        <div className='stats-number'>{this.state.stats[5] + this.state.bonuses[5]}</div>
                        <div className='stats-bonus'>{rollBonus(this.state.stats[5], this.state.bonuses[5])}</div>
                    </div>
            </div>
            <div className='hitpoints'>HP: {rollBonus(this.state.stats[2], this.state.bonuses[2]) + this.state.hitDice}</div>
            <button hidden={this.state.buttonSwitch2} onClick={() => this.finalizer()} disabled={this.state.buttonSwitch2} hidden={this.state.buttonSwitch2}>Finalize Stats</button>
            <div className='hitpoint'>{this.hitpoints}</div>
            <hr></hr>
            <p className='bottom-description'>Here we will determine your stats. Use the standard points system or if you are feeling lucky go for the radom roller!</p>
            <button hidden={!this.state.buttonSwitch2}><a href={this.state.nextPage}>Next Page</a></button>
        </div>
    )}
}
export function rollBonus(base, bonus){
        return Math.floor(((base + bonus) - 10) / 2)
    }
let actionCreator = {
//insert action creators from reducer here
  }
  
  function mapStateToProps(state) {
    return {
      abilityScore : state.abilityScore,
      healthPoints : state.healthPoints,
      race: state.race,
      class: state.class
    }
  }
  
export default connect(mapStateToProps, { statsFinalizer, updateBonus, updateHealth })(Skill);
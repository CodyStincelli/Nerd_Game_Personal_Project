
let initialState = {
    name: '',
    class: '',
    race: 0,
    abilityScore: [ 0, 0, 0, 0, 0, 0],
    bonuses: [0, 0, 0, 0, 0, 0],
    hitDice: 0,
    healthPoints: 0,
    cantripArray: [],
    firstLevelArray: []
}
// npm install react-redux and redux
const RACE = 'RACE'
const CLASS = 'CLASS'
const NAME = 'NAME'
const FINALIZE_STATS = 'FINALIZE_STATS'
const UPDATE_BONUS = 'UPDATE_BONUS'
const UPDATE_CANTRIP = 'UPDATE_CANTRIP'
const UPDATE_FIRSTLEVEL = 'UPDATE_FIRSTLEVEL'
const UPDATE_HEALTH = 'UPDATE_HEALTH'

export default function reducer(state = initialState, action) {
    console.log(action)
    switch(action.type) {
        case NAME:
            return Object.assign({}, state, {name: action.payload});
        case CLASS:
            return Object.assign({}, state, {class: action.payload});
        case RACE:
            console.log(action.payload)
            return Object.assign({}, state, {race: action.payload});
        case FINALIZE_STATS:
            return Object.assign({}, state, {abilityScore: action.payload})
        case UPDATE_CANTRIP:
            return Object.assign({}, state, {cantripArray: action.payload});
        case UPDATE_FIRSTLEVEL:
            return Object.assign({}, state, {firstLevelArray: action.payload});
        case UPDATE_HEALTH:
            return Object.assign({}, state, {healthPoints: action.payload});
        default:
            return state;
    }
}

export function updateHealth(health){
    return {
        type: UPDATE_HEALTH,
        payload: health
    }
}

export function cantripUpdate(cantrips){
    return {
        type: UPDATE_CANTRIP,
        payload: cantrips
    }
}

export function firstLevelUpdate(firstLevel){
    return {
        type: UPDATE_FIRSTLEVEL,
        payload: firstLevel
    }
}


export function updateBonus(bonus){
    return {
        type: UPDATE_BONUS,
        payload: bonus
    }
}

export function nameChanger(name) {
    return {
        type: NAME,
        payload: name
    }
}

export function classChanger(inputClass) {
    return {
        type: CLASS,
        payload: inputClass
    }
}

export function raceChanger(race) {
    return {
        type: RACE,
        payload: race
    }
}

export function statsFinalizer(stats) {
    return {
        type: FINALIZE_STATS,
        payload: stats
    }
}

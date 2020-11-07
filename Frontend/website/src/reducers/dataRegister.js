const defaultState={bussinessname: "", RFC:""}

//action es el valor devuelto por el action
//action.payload es el valor que se va a modificar
export default (state=defaultState, action)=>{
    if(action.type==='UPDATE_DATA'){
        return{
            ... state, //lo que devuelve es lo que se quedaa en el state
            bussinessname: action.payload
        }
    }
    return state;
}
export const selectSave= state=> state.defaultState.bussinessname;
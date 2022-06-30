import React,{ createContext, useContext, useReducer} from 'react'

export const NoteContext = createContext();
const initialState = []


const reducerfunction = (state,action) => {
 switch(action.type){
    case "ADD_NOTE":{
         return state.concat(action.payload)
    };
    case "DELETE_NOTE":{
        return state.filter((note,i) => i !== action.payload )
    };
    case "ADD_TO_FAV":{
       return state.map((note,i) => {
            if(i === action.payload)
               return {...note,favorite:true}
            return note   
        })};
    case "COMPLETED_NOTE":{
        return state.map((note,i) => {
            if(i === action.payload)
               return {...note,completed:true}
            return note   
        })
    }
    default:
        return state
 }
}

const NoteContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducerfunction,initialState)
  return (
    <NoteContext.Provider value={{state,dispatch}}>
        {children}
    </NoteContext.Provider>
  )
}

export const useNoteContext = () => useContext(NoteContext);


export default NoteContextProvider
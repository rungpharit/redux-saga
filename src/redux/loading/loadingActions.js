import { load } from './loadingTypes'

export function loading(){
  return { type: load.LOADING }
}

export function loadingSuccess(todos){
  return { 
    type: load.LOADING_SUCCESS ,
    payload : todos
  }
}

export function loadingError(error){
  return { 
    type: load.loadingError ,
    action: error
  }
}
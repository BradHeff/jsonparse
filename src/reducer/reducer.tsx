import {
   SET_LINK,
   SET_CAPTION,
   SET_CLICK,
   PENDING,
   SUCCESS,
   ERROR,
   SET_BTN_LINK,
   SET_TITLE,
   SET_ID,
   SET_IMAGE,
   SET_CAT } from './contants';


const initialStateComponent = {
    btnlink: '',
    title: '',
    id: 0,
    image: '',
    cat: ''
 }
 
export const componentProps = (state=initialStateComponent, action: Action) => { 
    switch(action.type) {
        case SET_BTN_LINK:
            return Object.assign({}, state, {btnlink: action.payload});
        case SET_TITLE:
            return Object.assign({}, state, {title: action.payload});
        case SET_ID:
            return Object.assign({}, state, {id: action.payload});
        case SET_CAT:
            return Object.assign({}, state, {cat: action.payload});
        case SET_IMAGE:
            return Object.assign({}, state, {image: action.payload});
        default:
            return state;
    }
}

const initialStateFancy = {
    link: '',
    caption: '',
    btnclick: false
 }
 
export const setFancy = (state=initialStateFancy, action: Action) => { 
    switch(action.type) {
        case SET_LINK:
            return Object.assign({}, state, {link: action.payload});
        case SET_CAPTION:
            return Object.assign({}, state, {caption: action.payload});
        case SET_CLICK:
            return Object.assign({}, state, {btnclick: action.payload});
        default:
            return state;
    }
}

const initialStateJSON = {
   items: {},
   isPending: true,
   error: ''
}

export const requestJSON = (state=initialStateJSON, action: Action) => {
   switch(action.type) {
       case PENDING:
           return Object.assign({}, state, {isPending: true});
       case SUCCESS:
           return Object.assign({}, state, {items: action.payload, isPending: false});
       case ERROR:
           return Object.assign({}, state, {error: action.payload, isPending: false});
       default:
           return state;
   }
}   
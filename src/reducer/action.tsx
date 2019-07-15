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

    export const setBtnLink = (link: string) => ({
        type: SET_BTN_LINK,
        payload: link
    });
    export const setTitle = (link: string) => ({
        type: SET_TITLE,
        payload: link
    });
    export const setImage = (link: string) => ({
        type: SET_IMAGE,
        payload: link
    });
    export const setID = (id: number) => ({
        type: SET_ID,
        payload: id
    });
    export const setCat = (link: string) => ({
        type: SET_CAT,
        payload: link
    });


export const setLink = (link: string) => ({
    type: SET_LINK,
    payload: link
}); 
export const setCaption = (text: string) => ({
    type: SET_CAPTION,
    payload: text
}); 
export const setClick = (bool: boolean) => ({
    type: SET_CLICK,
    payload: bool
}); 

export const fetchJSON = (url: string) => (dispatch: any) => {
   dispatch({ type: PENDING });
   fetch(url)
   .then(response => response.json())
   .then(data => dispatch({ type: SUCCESS, payload: data }))
   .catch(error => dispatch({ type: ERROR, payload: error }));
};
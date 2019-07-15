interface Action {
    type: string,
    payload: any
}

interface Loading {
    isLoading: boolean,
    error: boolean
}

interface baseProps extends FancyProps {
    items: JSONProps[],
    btnclick: boolean,
    link: string,
    caption: string,
    btnlink: string,
    title: string,
    id: number,
    image: string,
    cat: string,
    onFetchJSON(link: string): void,
    onSetBtnLink(text: string): void,
    onSetTitle(text: string): void,
    onSetID(id: number): void,
    onSetImage(text: string): void,
    onSetCat(text: string): void
}

interface TopSecProps {
    btnlink: string,
    title: string,
    id: number,
    image: string,
    cat: string,
    
}

interface FancyProps {
    onSetCaption(text: string | undefined): void,
    onSetLink(link: string): void,
    onSetClick(bool: boolean): void

}

interface homeProps extends FancyProps {
    items: JSONProps[], 
    btnlink: string,
    title: string,
    id: number,
    image: string,
    cat: string,
    onSetBtnLink(text: string): void,
    onSetTitle(text: string): void,
    onSetID(id: number): void,
    onSetImage(text: string): void,
    onSetCat(text: string): void
}
interface JSONProps {
    id: number,
    cat: string,
    image: string,
    list: JSONItems
}

interface JSONItems {
    title: string,
    link: string
}
interface baseState {

}
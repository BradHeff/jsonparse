import React from 'react';
import aos from 'aos';
import { Navbar } from 'react-bootstrap';

import { setLink, setCaption, setClick, fetchJSON,
  setBtnLink, setTitle, setImage, setID, setCat } from '../reducer/action';

import { connect } from 'react-redux';
import Home from '../home/App';

import Logo from '../assets/images/logo.svg';

const mapStateToProps = (state: any) => {
   return {
      link: state.setFancy.link,
      caption: state.setFancy.caption,
      btnclick: state.setFancy.btnclick,
      items: state.requestJSON.items,
      btnlink: state.componentProps.btnlink,
      title: state.componentProps.title,
      id: state.componentProps.id,
      image: state.componentProps.image,
      cat: state.componentProps.cat
   }
}

const mapDispatchToProps = (dispatch: any) => {
   return { 
      onSetLink: (link: string) => dispatch(setLink(link)),
      onSetCaption: (text: string) => dispatch(setCaption(text)),
      onSetClick: (bool: boolean) => dispatch(setClick(bool)),
      onFetchJSON: (link: string) => dispatch(fetchJSON(link)),
      onSetBtnLink: (text: string) => dispatch(setBtnLink(text)),
      onSetTitle: (text: string) => dispatch(setTitle(text)),
      onSetID: (id: number) => dispatch(setID(id)),
      onSetImage: (text: string) => dispatch(setImage(text)),
      onSetCat: (text: string) => dispatch(setCat(text))
  }
}

declare global {
  interface Window { 
    jQuery: any; 
  } 
}

class App extends React.Component<baseProps, baseState> {

  constructor(props: baseProps) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.props.onFetchJSON('/assets/items.json');
    aos.init({
      duration: 900,
      easing: 'ease-in-out-back'
    });
  }

  onClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.href);
  }

  CallFancy = (e: string, c: string) => {
     var $ = require("jquery");
     window.jQuery = $;
     require("@fancyapps/fancybox");
     $.fancybox.open({
         src: e,
         opts : {
           caption : c
         }
     });
  }

  render() {
    if(this.props.btnclick) {
      this.CallFancy(this.props.link, this.props.caption);
      this.props.onSetClick(false);
    }
    return (
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <div className="container">
            <div className="navbar-brand d-inline-flex">
              <img src={Logo} alt="Navbar Logo" />
              <h3 className="m-0">React Sample</h3>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              
            </Navbar.Collapse>
          </div>
        </Navbar>
        <Home
          onSetLink={this.props.onSetLink}
          onSetCaption={this.props.onSetCaption}
          onSetClick={this.props.onSetClick}
          items={this.props.items}
          onSetBtnLink={this.props.onSetBtnLink}
          onSetTitle={this.props.onSetTitle}
          onSetID={this.props.onSetID}
          onSetImage={this.props.onSetImage}
          onSetCat={this.props.onSetCat}
          btnlink={this.props.btnlink}
          title={this.props.title}
          id={this.props.id}
          image={this.props.image}
          cat={this.props.cat}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

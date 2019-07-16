import React from 'react';
import aos from 'aos';
import { Navbar, Nav } from 'react-bootstrap';

import { setLink, setCaption, setClick, fetchJSON,
  setBtnLink, setTitle, setImage, setID, setCat } from '../reducer/action';

import { connect } from 'react-redux';
import Home from '../home/App';

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
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="App-header">          
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
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

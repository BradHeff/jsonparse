import React, { Component } from 'react';

class TopSec extends Component<TopSecProps> {
    render() {
        const { btnlink, title, cat, image, id } = this.props;

        return (
            <div style={{padding: '10px 0 10px 0'}}>
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-8">
                        <div className="card">
                            <div className="card-body">                                
                                {
                                    title === "" || title === undefined
                                ?
                                    <div><h3 className="text-black-50">Select a button on a card</h3></div>
                                :
                                    <div className="row d-flex">
                                        <div className="col-12 col-md-6">
                                            <img src={image} alt={title} className="img-fluid" />
                                        </div>
                                        <div className="col-12 col-md-5 text-black-50 text-left offset-md-1">
                                            <h3 className="mb-2">{cat}</h3>
                                            <p className="mb-1">ID: {id}</p>
                                            <p className="mb-1">Title: {title}</p>
                                            <p className="mb-1">Link: {btnlink}</p>
                                        </div>
                                    </div>
                                }                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopSec;
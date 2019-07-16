import React from 'react';

import TopSec from './components/TopSec';

const HomeApp = ({
    items, 
    onSetLink, 
    onSetCaption, 
    onSetClick,
    onSetBtnLink,
    onSetTitle,
    onSetID,
    onSetImage,
    onSetCat,
    btnlink,
    title,
    id,
    image,
    cat
}: homeProps) => {
    const CallFancy = (
        e: React.SyntheticEvent<HTMLAnchorElement>, 
        image: string, 
        caption: string
    ) => {
        e.preventDefault();
        onSetLink(image);
        onSetCaption(caption);
        onSetClick(true);
    }
    const BtnClick = (
        e: React.SyntheticEvent<HTMLAnchorElement>, 
        id: number,
        cat: string,
        title: string,
        link: string,
        image: string
    ) => {
        e.preventDefault();
        onSetBtnLink(link);
        onSetTitle(title);
        onSetID(id);
        onSetImage(image);
        onSetCat(cat);
        // alert("Link URL = " + link);
    }
    const iconClick = (
        e: React.SyntheticEvent<HTMLAnchorElement>, 
        link: string,
        title: string
    ) => {
        e.preventDefault();
        alert("You clicked " + link + " from " + title + " card");
    }
    let count = 0;
    const cards = Object.keys(items).map((user: any, i: number) => {
        const item = items[i];
        count += 300;
        const cimage = process.env.PUBLIC_URL + "assets/images/" + item.image;
        return (        
            <div 
                key={item.id} 
                className="col-12 col-md-4 d-flex align-items-stretch" 
                data-aos="fade-down" 
                data-aos-delay={count}
            >
              <div className="card w-100">
                <div className="image-container rotateIn-effect">
                    <a href="#0" onClick={(e) => CallFancy(e, cimage, item.list.title)}>
                        <img src={cimage} alt={item.cat} className="card-img-top" />
                    </a>
                </div>
                <div className="card-body">
                  <h1 className="text-black-50 mb-1">{item.cat}</h1>
                  <p className="text-black-50 mb-2">{item.list.title}</p>
                    <a 
                        href={item.list.link} 
                        onClick={
                            (e) => BtnClick(
                                e, 
                                item.id,
                                item.cat,
                                item.list.title, 
                                item.list.link,
                                cimage
                            )
                        } 
                        className="btn btn-info px-4 py-2 mt-3">Click Me
                    </a>
                </div>
                <div className="card-footer mx-4" style={{backgroundColor: '#fff'}}>
                    <div className="d-inline-flex w-100">                      
                        <a 
                            href="#0" 
                            className="foot-icons ml-auto" 
                            onClick={(e) => iconClick(e, "Eye Icon", item.cat)}
                        >
                            <i className="fas fa-eye mr-2"></i>
                        </a>
                        <a 
                            href="#0" 
                            className="foot-icons"
                            onClick={(e) => iconClick(e, "Heart Icon", item.cat)}
                        >
                            <i className="fas fa-heart"></i>
                        </a>
                    </div>
                    
                </div>
              </div>
            </div>        
        );
      });
  return(
        <div className="container">
            <div className="row justify-content-center align-items-center">
                {cards}
            </div>
            <TopSec
                btnlink={btnlink}
                title={title}
                id={id}
                image={image}
                cat={cat}
            />
            
        </div>
        );
}

export default HomeApp;
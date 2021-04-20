import React from 'react';

const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <h6 className="text-primary ">{props.menuTitle ? props.menuTitle : <img src="http://design.dev.drcsystems.ooo:8084/themeforest/event_planning/images/logo-white.png" alt="logo"/> }</h6>
            <ul className="list-unstyled mt-4">
                 {
                     props.menuItems.map((item, index) => <li key={index}>
                         <a href={item.link} className="text-white">{item.name}</a></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;
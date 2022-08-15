import React, { useState } from 'react';
import App from '../App';



function Navbar(props) {
    

    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#231955' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={props.changeStyle} href="/"  >{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">

                            <li className="nav-item"  >
                                <a className="nav-link" aria-current="page" style={props.changeStyle} href="/">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" style={props.changeStyle} href="#">Features</a>
                            </li>
                        </ul>

                        <ul className="nav navbar" style={{ marginLeft: '75%' }}>
                            < li className="nav-item "   >
                                <div className='form-check form-switch ' >
                                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckChecked" defaultChecked />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={props.changeStyle}>Enable {props.mode} Mode</label>
                                </div>
                            </li>
                        </ul>




                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;



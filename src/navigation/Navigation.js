import React from 'react';
import '../navigation/styleNavigation.scss'
import { Link } from 'react-scroll';

function Navigation(props) {
    return(
        <div className='navigation'>
            <label className="switch">
                 <input onClick={props.handleClickColor} type='checkbox' checked={props.isChecked}/>
                <span className="slider round"></span>
            </label>
            <nav className='navigation-menu'>
                <ul>
                    <li>
                        <Link to='idAbout' smooth={true} duration={500} offset={-60}>
                            <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='idInfo' smooth={true} duration={500} offset={-60}>
                            <span>Info</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='idQuotes' smooth={true} duration={500} offset={-60}>
                            <span>Quotes</span>
                        </Link>
                    </li>
                </ul>
            </nav>            
        </div>
    );
}

export default Navigation
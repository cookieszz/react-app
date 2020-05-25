import React from 'react';

import Navigation from './navigation/Navigation'
import Info from './info/Info'
import Quotes from './quotes/Quotes'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        };
        this.handleClickColor = this.handleClickColor.bind(this);
    }

    handleClickColor(e) {
        this.setState({
            isChecked: e.target.checked,
        });
    }

    render() {
        const backgroundColor = this.state.isChecked ? 'white-theme': 'black-theme';

        return(
            <div className={backgroundColor}>
                <header className='header'>
                    <div className='nav-bar'>
                        <div className='page-width'>
                            <Navigation handleClickColor={this.handleClickColor} checked={this.state.isChecked}/>
                        </div>
                    </div>
                    <div className='about' id='idAbout'>
                        <div className='page-width'>
                            <div className='title'>
                                <h1>Hi I am Max</h1>
                                <p>a junior javascript dev</p>                                
                            </div>
                        </div>
                    </div>
                </header>
                <section className='information'>
                    <div className='page-width'>
                        <Info id='idInfo'/>
                    </div>
                </section>
                <section className='quotes'>
                    <div className='page-width'>
                        <Quotes id='idQuotes'/>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;

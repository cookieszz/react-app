import React from 'react';
import '../quotes/styleQuotes.scss'

class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
        this.handleClickQuotes = this.handleClickQuotes.bind(this);
    }

    handleClickQuotes() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    items: [result.content, result.author],
                })
            },
                error => {
                this.setState({
                    isLoaded: true,
                    error,
                });
            }
        )
    }

    componentDidMount() {
        this.handleClickQuotes();
    }

    render() {
        const {error, isLoaded, items} = this.state;

        return(
            <div className='famous-quotes' id={this.props.id}>
                <div className='famous-quotes-block'>
                    <hr/>
                    { error ? <p>{error.message}</p> : 
                    !isLoaded ? <p>Loading...</p> : 
                    <div>
                        <p id='quotes'>{items[0]}</p>
                        <p><span>{items[1]}</span></p>
                    </div> }
                    <hr/>
                    <button id='quote-button' onClick={this.handleClickQuotes}>New</button>
                </div>
            </div>
        );
    }
}

export default Quotes

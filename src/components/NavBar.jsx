import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';
import Ai from './Ai';
import './../App.css';

export default class NavBar extends React.Component {

    navigate = (num) => {
        if(num == 1){
            ReactDOM.render(<App />, document.getElementById('root'));
        }else if(num == 2){
            ReactDOM.render(<Ai />, document.getElementById('root'));
        }
    }

    render(){ 
        return(
            <div className="nav-bar">
                <h1>AI</h1>
                <ul>
                    <li
                        onClick={() => this.navigate(1)} 
                    >
                        Inicio
                    </li>
                    <li
                        onClick={() => this.navigate(2)}
                    >
                        Inteligencia Artificial
                    </li>
                </ul>
            </div>
        );
    }
}

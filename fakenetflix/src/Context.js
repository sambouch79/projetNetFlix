import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const filmContext = React.createContext();
//Provider
//Consumer

export default class FilmProvider extends Component {
    state = {
        films: [],

    };

    componentDidMount() {
        this.setFilms();
    }

    setFilms = () => {
        let tmp = [];
        films.forEach(i => {
            const film = { ...i };
            tmp = [...tmp, film];
        });

        this.setState(() => {
            return { films: tmp };
        });
    }

    getItem = id => {
        const film = this.state.films.find(item => item.id === id);
        return film;
    }



    render() {
        return (
            <filmContext.Provider
                value={{
                    ...this.state,

                }}
            >
                {this.props.children}
            </filmContext.Provider>
        );
    }
}

const filmConsumer = filmContext.Consumer;

export { filmProvider, filmConsumer }

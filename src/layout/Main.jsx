import React from 'react';

import { Card } from '../components/Card';


export function Main(props){
    const{cards = []} = props;

    return <div className="movies container">
                {cards.length ? cards.map(cards =>(
                        <Card key={cards.imdbID} {...cards} />
                    )) : <h4>Nothing found</h4>
                }
            </div>
}

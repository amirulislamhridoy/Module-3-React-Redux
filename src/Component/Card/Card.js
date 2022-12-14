import React from 'react';
import { useSelector } from 'react-redux';
import User from '../User/User';

const Card = () => {
    const state = useSelector(state => state)
    const cardUsers = state.card
    return (
        <div>
            {cardUsers.sort((a,b) => a.id - b.id).map(user => <User user={user} key={user.id}>card</User>)}
        </div>
    );
};

export default Card;
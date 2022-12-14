import React from 'react';
import { useDispatch } from 'react-redux';
import { add_to_card, remove_from_card } from '../../Redux/ActionCreators/ActionCrators';

const User = ({user, children}) => {
    const dispatch = useDispatch()
    return (
        <div style={{border: '1px solid blue', padding: '3px'}}>
            <h3>{user.name}</h3>
            <p>{user.phone}</p>
            {children && <p>Quantity: {user?.quantity}</p>}
            {!children && <button onClick={() => dispatch(add_to_card(user))}>Add to card</button>}
            {children && <button onClick={() => dispatch(remove_from_card(user))}>Remove from card</button>}
        </div>
    );
};

export default User;
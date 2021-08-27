import { v4 as uuid } from 'uuid';

const GrudgeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NAME':
            return [{
                id: uuid(),
                name: action.payload.name,
                grivence: action.payload.grivence, 
                forgiven: false
            }, ...state];
        case 'FORGIVE':
            return state.map(g => 
                g.id === action.payload ? { ...g, forgiven: !g.forgiven } : g);
        case 'DELETE':
            return state.filter(g => g.id !== action.payload);
        default:
            return state;
    }
};

export default GrudgeReducer;

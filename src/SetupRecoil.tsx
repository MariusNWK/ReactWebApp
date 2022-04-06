import { atom } from 'recoil';

export const pageState = atom ({
    key: 'pageState', // ID unique
    default: 'Home', // valeur par défaut
});
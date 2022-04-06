import { atom } from 'recoil';

export const textState = atom ({
    key: 'textState', // ID unique
    default: 'texte par défaut', // valeur par défaut
});
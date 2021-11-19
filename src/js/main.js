import spoller from './libs/spoller';
import slider from './libs/slider';
import dynamicAdaptive from './libs/dynamicAdaptive';
import def from './services/default';

import burger from './modules/burger';

import header from './modules/header';

import cards from './components/cards'
import calc from './modules/calc';
// import getResource from './services/request'


window.onload = function (){
    cards();
    
    def();
    burger();
    header();

    calc();
    // spoller();
    // slider();
    // dynamicAdaptive();
}
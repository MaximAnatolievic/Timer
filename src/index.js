'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import picChange from './modules/picChange';
import validation from './modules/validation';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

//Меню
countTimer('16 may 2021');
//меню
toggleMenu();
//popup
togglePopUp();
//Табы
tabs();
//Слайдер
slider();
//меняем фото команды
picChange();
//Валидаторы
validation();
//Калькулятор
calc(100);
//send-ajax-form
sendForm();
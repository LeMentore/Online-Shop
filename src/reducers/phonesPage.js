import * as R from 'ramda';

import {
    FETCH_PHONES_SUCCESS,
    LOAD_MORE_PHONES_SUCCESS
} from 'actionTypes';

const initialState = {
    ids: []
};

export default (state = initialState, {type, payload}) => {
    switch (type){
        case FETCH_PHONES_SUCCESS:
            return R.merge(state, {
                ids: R.pluck('id', payload) //возьмет из массива обьектов все id и положит в новый массив
            });
        case LOAD_MORE_PHONES_SUCCESS:
            const ids = R.pluck('id', payload);
            return R.merge(state, {
               ids: R.concat(state.ids, ids)
            });
        default:
            return state;
    }
}


/*
* В phones сохраняем все полученные телефоны, но нельзя просто взять их оттуда и все отрисовать,
* так как это все телефоны, которые мы могли получить из разных мест на сайте.
* Необходимо где-то хранить именно телефоны, которые мы получили на странице телефонов.
* */
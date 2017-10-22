import * as R from 'ramda';

import {
    FETCH_PHONES_SUCCESS
} from 'actionTypes';

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type){
        case FETCH_PHONES_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload);
            return R.merge(state, newValues);
        default:
            return state;
    }
}

/*
* Здесь записываются все полученные телефоны и неважно из какого запроса они пришли.
* Эти данные будут храниться в виде обьекта с id телефона, как ключ.
* Это даст возможность легко вытаскивать необходимый нам телефон из обьекта и все телефоны хранятся уникально,
* так как в случае чего, если прийдут новые данные, то телефон просто перетрется.
* */

/*
* Данные приходят в виде массива обьектов. Нужно перезаписать каждый обьект в стейте новыми данными.
* */
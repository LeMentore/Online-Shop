import * as R from 'ramda';
import request from 'superagent';

import categories from './mockCategories';

export const fetchPhones = async () => {
    const {body} = await request.get(
        'http://www.mocky.io/v2/5a088bc33200003e06137ff5'
    );
    return body.phones;
};

export const loadMorePhones = async ({offset}) => {
    const {body} = await request.get(
        'http://www.mocky.io/v2/5a088bc33200003e06137ff5'
    );
    return body.phones;
};

export const fetchPhoneById = async id => {
    const {body} = await request.get(
        'http://www.mocky.io/v2/5a088bc33200003e06137ff5'
    );

    const phone = R.find(R.propEq('id', id), body.phones);
    return phone;
};

export const fetchCategories = async () => {
    return new Promise((resolve, reject) => {
        resolve(categories);
    })
};
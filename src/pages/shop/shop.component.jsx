import React from 'react';
import SHOP_DATA from './shop.data';

class Shop extends React.Component {
	constructor() {
		super();
		this.state = {
			collection: SHOP_DATA,
		};
	}
}

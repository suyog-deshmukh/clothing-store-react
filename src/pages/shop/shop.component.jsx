import React from 'react';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';
import SHOP_DATA from './shop.data';

class Shop extends React.Component {
	constructor() {
		super();
		this.state = {
			collections: SHOP_DATA,
		};
	}
	render() {
		const { collections } = this.state;
		return (
			<div className='shop-page'>
				{collections.map(({ id, ...otherProps }) => (
					<CollectionPreview key={id} {...otherProps} />
				))}
			</div>
		);
	}
}

export default Shop;

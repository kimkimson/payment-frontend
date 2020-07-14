import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from 'components/ProductItem';
import Modal from 'components/Common/Modal';
import { fetchListProducts } from 'configs/Api';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30px;
`;

const ListProduct = () => {
	const [products, setProducts] = useState([]);
	const [showPopupByNow, setShowPopupBuyNow] = useState(false);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const { data } = await fetchListProducts();
				setProducts(data);
			} catch (error) {
				console.log(new Error(error));
			}
		};
		fetchProduct();
	}, []);

	function buyNow(sku) {
		setShowPopupBuyNow(true);
	}

	function handleShowPopup() {
		setShowPopupBuyNow((currentState) => !currentState);
	}

	return (
		<Wrapper>
			{products.map((item) => (
				<ProductItem product={item} buyNow={buyNow} />
			))}
			<Modal show={showPopupByNow} onClose={handleShowPopup} />
		</Wrapper>
	);
};

export default ListProduct;

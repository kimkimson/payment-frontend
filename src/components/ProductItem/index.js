import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	${({ imageUrl }) => `
        width: 350px;
        background-color: white;
        border: 1px solid #e6e6e6;

        .product-img {
            width: 350px;
            height: 350px;
            background-image: url(${imageUrl});
            background-repeat: no-repeat;
            background-size: cover;
            border-bottom: 1px solid #e6e6e6;
        }

        .product-info {
            width: 100%;
            display: flex;
            flex-direction: column; 
            align-items: center;
            justify-content: center;
            padding-top: 10px;
        }

        .product-buy-now {
            width: 100%;
            height: 60px;
            font-family: 'Arial';
            color: white;
            background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
            font-size: 30px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;

            &:hover {
                background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
            }
        }
    `}
`;

const ProductItem = (props) => {
	const {
		product: { currency, name, price, url_image, sku },
		buyNow,
	} = props;
	return (
		<Wrapper imageUrl={url_image}>
			<div className='product-img' />
			<div className='product-info'>
				<div>{name}</div>
				<h3>
					{price} {currency}
				</h3>
			</div>
			<div className='product-buy-now' onClick={() => buyNow(sku)}>
				Buy now
			</div>
		</Wrapper>
	);
};

export default ProductItem;

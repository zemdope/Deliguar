import React, { useState } from 'react';
import Layout from '../components/Layout';
import product from '../assets/images/product.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AboutProductHero } from '../assets/styles/pages/o-produkcir.styles';
const AboutProduct = () => {
	return (
		<Layout>
			<AboutProductHero>
				<h1>O produkcie</h1>
				<Row>
					<Col>
						<img src={product} alt='' />
						<p>
							DeliGuard to postbiotyk produkowany przez
							dobroczynne bakterie Bacillus subtilis, który
							ułatwia neutralizację toksyn i stymuluje naturalne
							procesy obronne organizmu.
						</p>
						<p>
							Postbiotyk - bioaktywnyprodukt
							zawierającyinaktywowane szczepyprobiotyczne i ich
							metabolity, które podawane w odpowiednich ilościach
							stymulują mikrobiom jelitowy, mają działanie
							immunomodulujące i promują zdrowie i dobre
							samopoczucie organizmu.
						</p>
					</Col>
				</Row>
			</AboutProductHero>
		</Layout>
	);
};

export default AboutProduct;

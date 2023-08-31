import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
	FormSection,
	Wrapper,
	ImageBottle,
	ImageLogo,
	WrapperInner
} from '../assets/styles/pages/Form.styles';
import logo from '../assets/images/logoo.svg';
import form from '../assets/images/form.svg';
import Layout2 from '../components/Layout2';
import ContactForm from '../components/Contact';

const Form = () => {
	return (
		<Layout2>
			<FormSection>
				<Wrapper>
					<Row>
						<Col xs='12'>
							<ImageLogo src={logo} alt='' />
						</Col>
						<Col xs='12' lg='7'>
							<h1>Podziel się z Nami swoją opinią o DeliGuard</h1>
							<p>Jak czuje się Twój pupil</p>
							<ImageBottle src={form} alt='' />
						</Col>
						<Col xs='12' lg='5'>
							<ContactForm />
						</Col>
					</Row>
				</Wrapper>
			</FormSection>
		</Layout2>
	);
};

export default Form;

export const Head = () => <title>Form</title>;

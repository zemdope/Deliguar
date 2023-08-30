// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
	Wrapper,
	AttachmentDiv,
	CheckboxContainer
} from '../assets/styles/pages/Contact.styles';
import plus from '../assets/images/plusForm.svg';
function ContactForm() {
	const [state, handleSubmit] = useForm('moqodglq');
	if (state.succeeded) {
		return <p>Dziękujemy za opinię!</p>;
	}
	return (
		<Wrapper>
			<form onSubmit={handleSubmit} encType='multipart/form-data'>
				<h2>Napisz opinię</h2>

				<Row>
					<Col xs='12'>
						<input
							id='name'
							type='text'
							placeholder='Imię i Nazwisko'
							name='name'
						/>
						<ValidationError
							prefix='Name'
							field='name'
							errors={state.errors}
						/>
					</Col>
					<Col xs='12'>
						<input
							id='email'
							type='email'
							placeholder='Adres e-mail'
							name='email'
						/>
						<ValidationError
							prefix='Email'
							field='email'
							errors={state.errors}
						/>
					</Col>
					<Col xs='12'>
						<input
							id='dogName'
							type='text'
							placeholder='Imię pupila'
							name='dogName'
						/>
						<ValidationError
							prefix='DogName'
							field='dogName'
							errors={state.errors}
						/>
					</Col>
					<Col xs='6'>
						<input
							id='birthday'
							type='number'
							placeholder='Wiek'
							name='birthday'
						/>
						<ValidationError
							prefix='Birthday'
							field='birthday'
							errors={state.errors}
						/>
					</Col>
					<Col xs='6'>
						<input
							id='rasa'
							type='text'
							placeholder='Rasa'
							name='rasa'
						/>
						<ValidationError
							prefix='Rasa'
							field='rasa'
							errors={state.errors}
						/>
					</Col>
					<Col xs='12' className='d-flex gap-5  align-items-center'>
						<AttachmentDiv>
							<img src={plus} alt='' />
							<input
								id='attachment'
								type='file'
								name='attachment'
								accept='image/png, image/jpeg'
							/>
						</AttachmentDiv>
						<label htmlFor='attachment'>
							Pochwal się zdjęciem Swojego pupila
						</label>
						<ValidationError
							prefix='Attachment'
							field='attachment'
							errors={state.errors}
						/>
					</Col>
					<Col xs='12'>
						<textarea
							id='message'
							name='message'
							placeholder='Napisz opinię (od kiedy Twój pupil stosuje DeliGuard i po jakim czasie zauwożono poprawę'
						/>
						<ValidationError
							prefix='Message'
							field='message'
							errors={state.errors}
						/>
					</Col>
					<Col xs='12'>
						<div className='checkbox-container'>
							<input
								id='checkbox'
								type='checkbox'
								name='urgent'
								value='yes'
							/>
							<label htmlFor='checkbox'>
								Zaakceptuj wszystkie wymagane oświadczenia i
								zgody Czytaj dalej...
							</label>
						</div>
					</Col>
					<button type='submit' disabled={state.submitting}>
						Wyślij
					</button>
				</Row>
			</form>
		</Wrapper>
	);
}

export default ContactForm;

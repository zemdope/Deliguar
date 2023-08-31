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
			<form
				onSubmit={handleSubmit}
				method='POST'
				encType='multipart/form-data'>
				<h2>Napisz opinię</h2>

				<Row>
					<Col xs='12'>
						<input
							id='name'
							type='text'
							placeholder='Imię i Nazwisko'
							name='name'
							required
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
							required
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
							required
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
							required
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
							required
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
							required
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
								required
							/>
							<label htmlFor='checkbox'>
								Zaakceptuj wszystkie wymagane oświadczenia i
								zgody
							</label>
							<ValidationError
								prefix='Checkbox'
								field='checkbox'
								errors={state.errors}
							/>
						</div>
					</Col>
					<Col xs='12'>
						<div className='checkbox-container'>
							<input
								id='rodo'
								type='checkbox'
								name='urgent'
								value='yes'
								required
							/>
							<label htmlFor='rodo'>
								Zaakceptuj informacje RODO
							</label>
							<ValidationError
								prefix='Rodo'
								field='rodo'
								errors={state.errors}
							/>
						</div>
					</Col>
					<Col xs='12'>
						<div className='checkbox-container'>
							<input
								id='voluntary'
								type='checkbox'
								name='urgent'
								value='yes'
								required
							/>
							<label htmlFor='voluntary'>
								Oświadczenie o dobrowolności
							</label>
							<ValidationError
								prefix='Voluntary'
								field='voluntary'
								errors={state.errors}
							/>
						</div>
					</Col>
					<Col xs='12'>
						<div className='checkbox-container'>
							<input
								id='copyright'
								type='checkbox'
								name='urgent'
								value='yes'
								required
							/>
							<label htmlFor='copyright'>
								Oświadczenie praw autorskich
							</label>
							<ValidationError
								prefix='Copyright'
								field='copyright'
								errors={state.errors}
							/>
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

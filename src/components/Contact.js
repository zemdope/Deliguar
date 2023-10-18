
import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
	Wrapper,
	AttachmentDiv,
	CheckboxContainer
} from '../assets/styles/pages/Contact.styles';
import plus from '../assets/images/plusForm.svg';
import rodo from '../assets/images/rodo.pdf';
import prawa from '../assets/images/prawa.pdf';
import dobro from '../assets/images/dobro.pdf';
function ContactForm() {

	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageChange = (event) => {
	  const file = event.target.files[0];
	  const imageUrl = URL.createObjectURL(file);
	  setSelectedImage(imageUrl);
	}
	
	const [allChecked, setAllChecked] = useState(false);
	const [checkboxesChecked, setCheckboxesChecked] = useState({
	  rodo: false,
	  voluntary: false,
	  copyright: false,
	});
   
	const handleAllCheckboxChange = (event) => {
	  const isChecked = event.target.checked;
	  setAllChecked(isChecked);
	  setCheckboxesChecked({
	    rodo: isChecked,
	    voluntary: isChecked,
	    copyright: isChecked,
	  });
	};
   
	const handleIndividualCheckboxChange = (name, isChecked) => {
	  setCheckboxesChecked({
	    ...checkboxesChecked,
	    [name]: isChecked,
	  });
	};
   

	return (
		<Wrapper>
			<form
  method='POST'
  action="https://formsubmit.co/a234b6f9d7f37b6faa95665577ea142c"
  encType='multipart/form-data' 
>
 <Row>
					<Col xs='12'>
						<input
							id='name'
							type='text'
							placeholder='Imię i Nazwisko'
							name='name'
							required
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
						
					</Col>
					<Col xs='12'>
						<input
							id='dogName'
							type='text'
							placeholder='Imię pupila'
							name='dogName'
							required
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
						
					</Col>
					<Col xs='6'>
						<input
							id='rasa'
							type='text'
							placeholder='Rasa'
							name='rasa'
							required
						/>
						
					</Col>
					<Col xs='12' className='d-flex gap-5  align-items-center'>
						<AttachmentDiv>
						{selectedImage ? (
                <img src={selectedImage} className='selected-image' alt='Selected' />
              ) : (
                <img src={plus} alt='' />
              )}
							<input
								id='attachment'
								type='file'
								name='attachment' 
								accept="image/png, image/jpeg"
								onChange={handleImageChange}
							/>
						</AttachmentDiv>
						{selectedImage ?(<label htmlFor='attachment'>
						Super, że masz takiego pupila
						</label>) : (<label htmlFor='attachment'>
							Pochwal się zdjęciem Swojego pupila
						</label>) }
						
						
						
					</Col>
					<Col xs='12'>
						<textarea
							id='message'
							name='message'
							placeholder='Napisz opinię (od kiedy Twój pupil stosuje DeliGuard i po jakim czasie zauwożono poprawę'
							required
						/>
					
					</Col>
					<Col xs='12'>
						<div className='checkbox-container'>
							<input
								id='checkbox'
								type='checkbox'
								name='all'
								value='yes'
								checked={allChecked}
								onChange={handleAllCheckboxChange}
								required

							/>
							<label htmlFor='checkbox'>
								Zaakceptuj wszystkie wymagane oświadczenia i
								zgody
							</label>
							
						</div>
					</Col>
					<Col xs='12'>
						<div className='checkbox-container'>
							<input
								id='rodo'
								type='checkbox'
								name='Zgoda RODO'
								value='yes'
								checked={checkboxesChecked.rodo}
								onChange={(e) => handleIndividualCheckboxChange('rodo', e.target.checked)}
								required
							/>
							<label htmlFor='rodo'>
								Zaakceptuj informacje <a href={rodo}>Rodo</a>
							</label> 
						
						</div>
					</Col>
					<Col xs='12'>
						<div className='checkbox-container'>
							<input
								id='voluntary'
								type='checkbox'
								name='Oświadczenie o dobrowolności'
								value='yes'
								checked={checkboxesChecked.voluntary}
								onChange={(e) => handleIndividualCheckboxChange('voluntary', e.target.checked)}
								required
							/>
							<label htmlFor='voluntary'>
							Oświadczenie o <a href={dobro}>dobrowolności</a>
							</label>
						
						</div>
					</Col>
					<Col xs='12'>
						<div className='checkbox-container'>
							<input
								id='copyright'
								type='checkbox'
								name='Oświadczenie dotyczące praw autorskich'
								value='yes'
								checked={checkboxesChecked.copyright}
								onChange={(e) => handleIndividualCheckboxChange('copyright', e.target.checked)}
								required
							/>
							<label htmlFor='copyright'>
								Oświadczenie dotyczące 	<a href={prawa}>praw autorskich</a>
							</label>
						
						</div>
						<input type="hidden" name='_next' value="https://deliguard.net/thanksPage" />
						<input type="hidden" name='_captcha' value="false" />
					</Col>
					<button type='submit' >
					{/* disabled={state.submitting} */}
						Wyślij
					</button>
				</Row>
</form>
		</Wrapper>
	);
}

export default ContactForm;


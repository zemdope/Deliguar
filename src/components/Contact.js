
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
import rodoen from '../assets/images/politykaen.pdf';
import prawaen from '../assets/images/prawaen.pdf';
import dobrowolnoscen from '../assets/images/dobrowolnoscen.pdf';
import prawa from '../assets/images/prawa.pdf';
import dobro from '../assets/images/dobro.pdf';
import { useIntl } from "gatsby-plugin-intl";
function ContactForm() {

	const intl = useIntl();
 
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

			<form action="https://formsubmit.co/rodo@deliguard.net" method="POST">
				<input type="text" name="name" required />
					<input type="email" name="email" required />
						<button type="submit">Send</button>
					</form>
				</Wrapper>
				);
}

				export default ContactForm;


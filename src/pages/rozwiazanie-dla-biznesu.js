import * as React from 'react';
import Layout from '../components/Layout';
import {
	Wrapper,
	HeaderPage,
	ImageStain,
	BusinessSection,
	TargetList,
	AboutUsSection,
	HeaderAbout,
	Paragraph,
	CertificateWrapper
} from '../assets/styles/pages/Business.styles';

import item3 from '../assets/images/item3.svg';

import business2 from '../assets/images/business2.png';
import business3 from '../assets/images/business3.png';
const Business = () => {
	return (
		<Layout>
			<BusinessSection>
				<Wrapper>
					<div>
						<ImageStain src={item3} alt='' />
					</div>
					<HeaderPage>Rozwiązania dla biznesu </HeaderPage>
					<TargetList>
						<li>
							<img src={business2} alt='' />
							<h3>Dla producentów karmy</h3>
							<p>
								Deliguard jest cennym wsparciem skuteczności i
								funkcjonalnosci karmy zwierzęciej. Może być
								dodany do karmy w trakcie jej produkcji.
							</p>
						</li>
						<li>
							<img src={business2} alt='' />
							<h3>Dla weterynarzy</h3>
							<p>
								DeliGuard jest wsparciem w terapii biegunki o
								nieznanej etiologii, jak również problemów
								trawiennych czy dermatologicznych. Poprzez
								stymulację mikrobiomu jelitowego gospodarza
								DeliGuard szybko i skutecznie przywraca
								fizjologiczną mikroflorę przewodu pokarmowego
								oraz pobudza wydalanie toksyn z organizmu.
							</p>
						</li>
						<li>
							<img src={business3} alt='' />
							<h3>Dla handlu</h3>
							<p>
								DeliGuard to nowatorski produkt i odpowiedź na
								poszukiwania oraz potrzeby włascicieli zwierząt.
								Jego jakość i skuteczność działania na organizm
								zwierzęcia potwierdzają własciciele kotów i
								psów, uczestniczących w badaniach
								przeprowadzonych przez firmę BioDose.
							</p>
						</li>
					</TargetList>
				</Wrapper>
			</BusinessSection>
			<AboutUsSection>
				<Wrapper>
					<HeaderAbout>O nas</HeaderAbout>
					<Paragraph>
						Deliguard został opracowany przez BioDose - polską
						firmę, której z pasją i pełnym zaangażowaniem tworzy
						produkty dla zwierząt, dbając o ich dobrostan z
						wykorzystaniem najnowszych osiągnięć biotechnologii i
						trendów żywieniowych.
					</Paragraph>
					<CertificateWrapper>
						<img src='' alt='' />

						<HeaderAbout>Certyfikaty</HeaderAbout>
						<p>
							Mając na uwadze dobro zwierząt oraz najwyższą jakość
							i bezpieczeństwo naszych produktów, współpracujemy z
							certyfikowanymi producentami i akredytowanymi
							laboratoriami. Nasze produkty są objęte
							międzynarodowym systemem bezpieczeństwa pasz GMP+
							FSA i GMP+FRA (GMO Controlled).
						</p>
					</CertificateWrapper>
				</Wrapper>
			</AboutUsSection>
		</Layout>
	);
};

export default Business;

export const Head = () => <title>Rozwiązanie dla biznesu</title>;

import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
inset:0;
  width: 100%;
  background: rgba(255, 248, 238, 0.75);
backdrop-filter: blur(2.5px);
  padding: 10px;
display:grid;
place-items: center;
  z-index: 9999;

  .image-container{
	position:relative;
	img {
	max-width: 100%;
  height: auto;
}
  .close-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 0;
  margin: 0;
  position:absolute;
  top: -50px;
  right:0px;
  svg {
	width:30px;
	height: 30px;
  }
}

  }
  

.close-button span {
  color: #333;
}
`

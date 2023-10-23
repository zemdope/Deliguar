import React from 'react';
import { Wrapper } from '../assets/styles/pages/BlogItem.styles.js';
import Layout from '../components/Layout';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { options } from './blog.js';
import {Link} from 'gatsby';
import { ProgressBar } from '@nadfri/react-scroll-progress-bar';

const BlogPostTemplate = ({ pageContext }) => {
  const { title, content, references, image } = pageContext;

  // Check if content exists before accessing content.raw
  const rawContent = content ? JSON.parse(content.raw) : '';

  const renderRichText = (content, references) => {
    if (!content) {
      return null;
    }

    // Initialize an array to store the rendered content
    const renderedContent = [];
    let imageIndex = 0;

    content.content.forEach((item, index) => {
      switch (item.nodeType) {
        case 'paragraph':
          renderedContent.push(
            <p key={index}>{item.content.map((text) => text.value).join('')}</p>
          );
          break;

        case 'text':
          renderedContent.push(<span key={index}>{item.value}</span>);
          break;

        case 'unordered-list':
          renderedContent.push(
            <ul key={index}>
              {item.content.map((listItem, listItemIndex) => (
                <li key={listItemIndex}>
                  {listItem.content.map((text, textIndex) => (
                    <span key={textIndex}>{text.content[0].value}</span>
                  ))}
                </li>
              ))}
            </ul>
          );
          break;

        case 'unstyled':
          // Handle unstyled text as plain paragraphs
          renderedContent.push(
            <p key={index}>
              {item.content.map((text, textIndex) => (
                <span key={textIndex}>{text.value}</span>
              ))}
            </p>
          );
          break;

        case 'heading-2':
          renderedContent.push(<h2 key={index}>{item.content[0].value}</h2>);
          break;
          case 'heading-3':
          renderedContent.push(<p className="half-width" key={index}>{item.content[0].value}</p>);
          break;

          case 'hr':
            renderedContent.push(<hr key={index} />);
            break;

        case 'table':
          renderedContent.push(
            <table key={index}>
              {item.content.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.content.map((cell, cellIndex) => {
                    if (cell.nodeType === 'table-header-cell') {
                      renderedContent.push(
                        <th key={cellIndex}>{cell.content[0].content[0].value}</th>
                      );
                    } else {
                      renderedContent.push(
                        <td key={cellIndex}>{cell.content[0].content[0].value}</td>
                      );
                    }
                  })};
                </tr>
              ))};
            </table>
          );
          break;

          case 'embedded-asset-block':
            // Handle embedded asset (image)
            if (references[imageIndex] && references[imageIndex].publicUrl) {
              const reference = references[imageIndex];
              const width = reference.title || '100';
              const imageClass = width === '50' ? 'image-half-width' : 'image-full-width';
    
              renderedContent.push(
                <img
                  key={imageIndex}
                  src={reference.publicUrl}
                  alt={`Image ${imageIndex}`}
                  className={imageClass}/>
                );
           
    
              imageIndex++; // Move to the next embedded asset
            }
            break;
    

        default:
          break;
      }
    });

    return renderedContent;
  };

  return (
    <Layout>
             <ProgressBar 
        color1="#FAECD8" 
        color2="#5E286D" 
        height="4px"
        position= "fixed" 
        />

      <Wrapper>
      <Link to="/blog">
  <span className="back-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></span> Wróć
</Link>
        <h1>{title ? title : ''}</h1>
        <img className='hero-image' src={image} alt="" />
        <div>{renderRichText(rawContent, references)}</div>
      </Wrapper>
    </Layout>
  );
};

export default BlogPostTemplate;
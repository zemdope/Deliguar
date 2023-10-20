import React from 'react';
import { Wrapper, BlogItem } from '../assets/styles/pages/Blog.styles.js';
import Layout from '../components/Layout';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { options } from './blog.js';

const BlogPostTemplate = ({ pageContext }) => {
  const { title, content, references } = pageContext;

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
      <Wrapper>
        <h1>{title ? title : ''}</h1>
        <div>{renderRichText(rawContent, references)}</div>
      </Wrapper>
    </Layout>
  );
};

export default BlogPostTemplate;
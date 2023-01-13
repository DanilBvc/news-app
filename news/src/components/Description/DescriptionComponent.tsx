import React, { useContext } from 'react';
import { Link,  } from 'react-router-dom';
import './DescriptionComponent.scss';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { StoreContext } from '../../App';
function DescriptionComponent() {
  const {getNewsByTitle, currentCardTitle} = useContext(StoreContext)
  const DescriptionStyle = {
    background: `url(${
      getNewsByTitle(currentCardTitle)?.urlToImage
    }) no-repeat center center fixed`,
    backgroundSize: 'cover',
    height: '145px',
    'backgroundAttachment': 'inherit',
  };
  return (
    <div style={DescriptionStyle}>
      <div className='description__wrapper'>
        <div className="container__wrapper">
          {currentCardTitle === undefined ? null : (
            <div className='container__wrapper-title'>{getNewsByTitle(currentCardTitle)?.title}</div>
          )}
          {currentCardTitle === undefined ? null : (
            <div className='container__wrapper-content'>
              { getNewsByTitle(currentCardTitle)?.content.split('[')[0]}  <a href={getNewsByTitle(currentCardTitle)?.url}>Read more here</a>
            </div>
          )}
        </div>
      <Link className='back-link' to={'/'} > <KeyboardBackspaceIcon />Back to homepage</Link>
      </div>
    </div>
  );
}

export default DescriptionComponent;

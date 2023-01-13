import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CardProps } from '../../types/types';
import dateIcon from '../../assets/news/date-icon.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SvgIcon } from '@mui/material';
import './card.scss'
import { Link } from 'react-router-dom';
import { checkWord, getDate } from '../../utils/utils';
import { useContext } from 'react';
import { StoreContext } from '../../App';
export function CardComponent({title, describtion, date, img, id}: CardProps) {
  const {handleDescription, inputValueHook} = useContext(StoreContext)
  return (
    <>
    {title === null || describtion === null ? <div>News not found</div> : <Link onClick={() => {handleDescription(title)}} to={`/news-details/${id}`} >
    <Card sx={{ maxWidth: 400, height: 530}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="217"
          image={img ? img : 'data:image/png;base64,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'}
          alt={title}
        />
        <CardContent>
        <div className='date__wrapper'>
          <img src={dateIcon} className='date__img' alt={title}/>
        {getDate(new Date(date))}
        </div>
          <Typography gutterBottom variant="h5" component="div" className='card-content'>
            {title.split(" ").slice(0, 15).map((item) => {
              return checkWord(item, inputValueHook) ? <span className='find-word'>{item} </span> : item + ' '
            })}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {describtion.slice(0, 100).split(" ").map((item) => {
              return checkWord(item, inputValueHook)  ? <span className='find-word'>{item} </span> : item + ' '
            })}...
          </Typography>
        <div className='svg__wrapper'>Read more <SvgIcon component={ArrowForwardIcon} inheritViewBox /></div>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>}
    </>
  );
}

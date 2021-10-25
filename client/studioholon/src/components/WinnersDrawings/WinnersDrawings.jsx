import React from 'react';
import Box from '@material-ui/core/Box';
import ImgCard from '../ImgCard/ImgCard';
import './WinnersDrawings.css';

export default function WinnersDrawings(props) {
    return (
        <div className='sectionColor'>
            <h3>זוכי החודש</h3>
            <Box className='flexBox'>
                <ImgCard
                    class='thired'
                    img='https://i.insider.com/5d8e6ec26f24eb50bc6d292a?width=700'
                    cardLabel='אסף דניאל'
                    age='23'
                    WinPlace='3'/>
                <ImgCard
                    class='first'
                    img='https://www.loftaholics.com/wp-content/uploads/2020/11/photos.jpg'
                    cardLabel='מקס ויבנצוב'
                    age='21'
                    WinPlace='1'/>
                <ImgCard
                    class='second'
                    img='https://www.befunky.com/images/wp/wp-2016-03-photo-editing-blog-posts-6.jpg?auto=webp&format=jpg&width=944'
                    cardLabel='יוסי כץ'
                    age='20'
                    WinPlace='2'/>

            </Box>
        </div>
    )
}
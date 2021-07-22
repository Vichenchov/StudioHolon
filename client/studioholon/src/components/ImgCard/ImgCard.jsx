import React from 'react';
import Card from 'react-bootstrap/Card';
import './ImgCard.css';

export default function ImgCard(props) {
    return (
        <div id='hoverImg' >
            <Card  id='drawings' className={props.class} >
                <Card.Img src={props.img} alt="Card image" id='CardImg'/>
                <Card.ImgOverlay>
                    <Card.Title className='CardTitle' id='CardLabel'>{props.cardLabel}, {props.age}</Card.Title>
                    <Card.Title className='CardTitle' id='positionNum'>{props.WinPlace}</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}
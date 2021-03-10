import React from 'react'
import Image from "next/image"
import {Card} from "react-bootstrap"
import styles from "../../styles/card.module.scss"

export default function CardComponent(props) {
    let { price, inventory, condition, brand, link, title, image_link, description } = props.cardData
    return (
        <div className={`p-1 ${styles.card} `}>   
        <Card className={`box ${styles.cardComponent}`}>
            <Card.Img variant="top" src={`${image_link}`}/>
            <Card.Body className={`p-2 ${styles.bodyCard}`}>
                <Card.Title className={styles.title}>{title}</Card.Title>
                <div className={styles.bodysubtitle}>
                <Card.Subtitle className={`mb-2 text-muted  ${styles.subtitle}`}>{price}</Card.Subtitle>
                <Card.Subtitle className={`mb-2 text-muted ${styles.subtitle}`}>{inventory}</Card.Subtitle>
                <Card.Subtitle className={`mb-2 text-muted ${styles.subtitle}`}>{condition}</Card.Subtitle>
                </div>
                <div className={styles.bodyTwosubtitle}>
                <Card.Subtitle className={`mb-2 text-muted ${styles.subtitle}`}>{brand}</Card.Subtitle>
                <Card.Subtitle className={`mb-2 text-muted ${styles.subtitle}`}>{link}</Card.Subtitle>
                </div>
            
                <Card.Text  className={styles.dtitle}>
                    {description}
                </Card.Text>
                
            </Card.Body>
        </Card>

    </div>

    );
    
}



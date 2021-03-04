import React from 'react'
import Image from "next/image"
import {Card} from "react-bootstrap"
import styles from "../../styles/card.module.scss"

export default function CardComponent({props}) {
    const cardInfo = [
        { image_link: "/backregister.svg", 
          title:"Chamarra de mezclilla", 
          price:"100 MXN",
          inventory:"60 piezas", 
          condition:"New",
          brand:"Meeko",
          link:"http://www.tutienda.com",
          description:"Hermosa chamarra de mezclilla con la aplicación de encaje"
        },

        { image_link: "/backregister.svg", 
        title:"Chamarra de mezclilla", 
        price:"100 MXN",
        inventory:"60 piezas", 
        condition:"New",
        brand:"Meeko",
        link:"http://www.tutienda.com",
        description:"Hermosa chamarra de mezclilla con la aplicación de encaje"
        },
        { image_link: "/backregister.svg", 
        title:"Chamarra de mezclilla", 
        price:"100 MXN",
        inventory:"60 piezas", 
        condition:"New",
        brand:"Meeko",
        link:"http://www.tutienda.com",
        description:"Hermosa chamarra de mezclilla con la aplicación de encaje"
        },
        { image_link: "/backregister.svg", 
        title:"Chamarra de mezclilla", 
        price:"100 MXN",
        inventory:"60 piezas", 
        condition:"New",
        brand:"Meeko",
        link:"http://www.tutienda.com",
        description:"Hermosa chamarra de mezclilla con la aplicación de encaje"
        },



    ];

    const renderCard = (card, index) => {
        return (
            <div className={`p-1 ${styles.card} d-flex`}>   
            <Card>
                <Card.Img variant="top" src={`${card.image_link}`}/>
                <Card.Body className={`p-2 ${styles.bodyCard}`}>
                    <Card.Title className={styles.title}>{card.title}</Card.Title>
                    <div className={styles.bodysubtitle}>
                    <Card.Subtitle className={`mb-2 text-muted  ${styles.subtitle}`}>{card.price}</Card.Subtitle>
                    <Card.Subtitle className={`mb-2 text-muted ${styles.subtitle}`}>{card.inventory}</Card.Subtitle>
                    <Card.Subtitle className={`mb-2 text-muted ${styles.subtitle}`}>{card.condition}</Card.Subtitle>
                    </div>
                    <div className={styles.bodyTwosubtitle}>
                    <Card.Subtitle className={`mb-2 text-muted ${styles.subtitle}`}>{card.brand}</Card.Subtitle>
                    <Card.Subtitle className={`mb-2 text-muted ${styles.subtitle}`}>{card.link}</Card.Subtitle>
                    </div>
                
                    <Card.Text  className={styles.dtitle}>
                        {card.description}
                    </Card.Text>
                    
                </Card.Body>
            </Card>

        </div>

        );

    };

    return <div>{(cardInfo.map(renderCard))}</div>


    
}



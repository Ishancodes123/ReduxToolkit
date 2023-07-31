import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Cards = (props: any) => {
    console.log("Ishan", props)

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props?.data?.image} />
            <div className='cbody'>
                
            <Card.Footer>
            <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    {props?.data?.description}
                </Card.Text>
                <Card.Text>
                    INR:{props?.data?.price}
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Footer>
            </div>
        </Card>
    )
}

export default Cards
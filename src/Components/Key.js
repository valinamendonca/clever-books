import React from 'react'
import { Container, Col} from 'react-bootstrap'
import '../CSS/Key.css'
import Cards from './Cards'

function Key() {
    const cardData = [
        {
          image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg',
          title: 'What to order',
          context: 'Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.',
        },
        {
          image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg',
          title: 'When to order',
          context: 'Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you\'re never left guessing.',
        },
        {
          image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg',
          title: 'How much to stock',
          context: 'Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.',
        },
        {
          image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg',
          title: 'Where to place',
          context: 'Our tool suggests how to move stock within your supply chain. So you\'ll always have products available across cities.',
        },
      ];

  return (
    <div className='key'>
        <h2>Four key questions answered by Crest</h2>
        <Container style={{marginTop: "5%"}} className='d-flex flex-wrap justify-content-center'>
            {cardData.map((card, index) => (
          <Col xs={12} sm={6} md={3} key={index} className="d-flex">
            <Cards image={card.image} title={card.title} context={card.context} />
          </Col>
        ))}
        </Container>
    </div>
  )
}

export default Key
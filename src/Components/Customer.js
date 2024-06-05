import { useState } from "react";
import Review from "./Review";
import {MDBIcon } from 'mdb-react-ui-kit';

function Customer() {
    const [cur, setCur]=useState(0);
    const clickLeft=()=>{
      let val=cur;
      if(val===0)
        val=2;
      console.log(val);
      setCur(--val);
      console.log(val);
    }
    const clickRight=()=>{
      let val=cur;
      if(val===1)
        val=-1
        console.log(val);
      setCur(++val);
      console.log(val);
    }
    const data = [
        {
          profile: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp',
          name: 'Profile 1',
          designation: 'Co-founder, Samosa Party',
          logo: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg',
          image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp',
          context: 'D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that\'s the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.',
        },
        {
            profile: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg',
            name: 'Profile 2',
            designation: 'Founder, Chai Party',
            logo: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77ce4473d4ee696e286_TAILOR%20AND%20CIRCUS.svg',
            image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664c90f75b0f0e735016706b_P-tal.webp',
            context: 'Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.',
          },
        ];

    return (
      <>
        <Review profile={data[cur].profile} name={data[cur].name} designation={data[cur].designation} logo={data[cur].logo} image={data[cur].image} context={data[cur].context}></Review>
        <div className='icons text-start'>
            <MDBIcon onClick={clickLeft} fas icon="arrow-circle-left" style={{marginRight: "15px"}}/>
            <MDBIcon onClick={clickRight} fas icon="arrow-circle-right" />
        </div>
      </>
    );
  }
  
  export default Customer;
import { ServiceDataTypes } from "../types/children-props-types"
import Link from "next/link"

const services_data: ServiceDataTypes[] = [
  {
    id: 0,
    img: '/images/service-wedding.png',
    title: 'Weddings',
    id_tag:'wed',
    services_card: [
      {
        title:'Silver wedding collection',
        price: 'CA $799',
        services: [
          '4 hours coverage',
          '100 Edited photos',
          '1 Photographer',
          '1 Videographer',
          '1 Wedding Film (15 to 30 min)',
          '1 Short Highlights (1 min)',
          'Digital Gallery',
          "Crystal USB Drive with all the event content delivered in a custom wooden box engraved with the bride and groom's name.",,
          'Content delivered within 2 business weeks'
        ]
      },
      {
        title:'Golden wedding collection',
        price: 'CA $1200',
        services: [
          '6 hours coverage',
          '200 Edited photos',
          '1 Photographer',
          '2 Videographers',
          '1 Wedding Film (15 to 45 min)',
          '1 Short Highlights (1 min)',
          'Digital Gallery',
          '2 Printed Bridal Portraits for reception 16”x20”',
          "Crystal USB Drive with all the event content delivered in a custom wooden box engraved with the bride and groom's name.Content delivered within 3 business weeks",
          'Content delivered within 3 business weeks'
        ]
      },
      {
        title:'Platino wedding collection',
        price: 'CA $1899',
        services: [
          '8 hours coverage',
          '300 Edited photos',
          '1 Photographer',
          '2 Videographers',
          'Drone Coverage for Ceremony and Reception party',
          '1 Wedding Film (15 to 60 min)',
          '1 Short Highlights (1 min)',
          'Digital Gallery',
          '6 Printed Bridal Portraits for reception 16”x20”',
          "Crystal USB Drive with all the event content delivered in a custom wooden box engraved with the bride and groom's name",
          'Content delivered within 3 business weeks'
        ]
      }
    ]
  },
  {
    id: 1,
    id_tag:'xv',
    img: '/images/service-xvs.png',
    title: 'XVs Celebrations',
    services_card: [
      {
        title:'Silver XV Collection',
        price: 'CA $799',
        services: [
          '4 hours coverage',
          '100 Edited photos',
          '1 Photographer',
          '1 Videographer',
          '1 XV film (15 to 30 min)',
          '1 Short Highlights (1 min)',
          'Digital Gallery',
          'Crystal USB Drive with all the event content delivered in a custom wooden box engraved with the Quinceañera’s name',
          'Content delivered within 2 business weeks'
        ]
      },
      {
        title:'Golden XV collection',
        price: 'CA $1200',
        services: [
          '6 hours coverage',
          '200 Edited photos',
          '1 Photographer',
          '2 Videographers',
          '1 XV film (15 to 45 min)',
          '1 Short Highlights (1 min)',
          'Digital Gallery',
          '2 Printed Quinceañera Portraits for reception 16”x20”',
          'Crystal USB Drive with all the event content delivered in a custom wooden box engraved with the Quinceañera’s name',
          'Content delivered within 3 business weeks'
        ]
      },
      {
        title:'Platinum XV collection',
        price: 'CA $1899',
        services: [
          '8 hours coverage',
          '300 Edited photos',
          '1 Photographer',
          '2 Videographers',
          'Drone Coverage for Ceremony and Reception party',
          '1 XV film (15 to 60 min)',
          '1 Short Highlights (1 min)',
          'Digital Gallery',
          '6 Printed Quinceañera Portraits for reception 16”x20”',
          'Crystal USB Drive with all the event content delivered in a custom wooden box engraved with the Quinceañera’s name',
          'Content delivered within 4 business weeks'
        ]
      }
    ]
  },
  {
    id: 2,
    id_tag:'bd',
    img: '/images/service-bd.png',
    title: 'Birthday Celebrations',
    services_card: [
      {
        title:'Silver birthday Collection',
        price: 'CA $250',
        services: [
          '2 hours coverage',
          '50 Edited photos',
          '1 Photographer',
          'Private Digital Gallery for 3 months',
        ]
      },
      {
        title:'Golden birthday collection',
        price: 'CA $450',
        services: [
          '2 hours coverage',
          '100 Edited photos',
          '1 Photographer',
          '1 Videographer',
          'Birthday Documentary Film (5 to 15 min)',
          '1 Short Highlights (1 min)',
          'Digital Gallery for 6 months'
        ]
      },
      {
        title:'Deluxe birthday collection',
        price: 'CA $799',
        services: [
          '4 hours coverage',
          '100 Edited photos',
          '1 Photographer',
          '1 Videographer',
          'Birthday Documentary Film (5 to 30 min)',
          '1 Short Highlights (1 min)',
          'Digital Gallery for 1 year'
        ]
      }
    ]
  },
  {
    id: 3,
    id_tag:'mat',
    img: '/images/service-maternity.png',
    title: 'Maternity',
    services_card: [
      {
        title:'Silver Maternity Collection',
        price: 'CA $250',
        services: [
          '1 hour coverage',
          '20 Edited photos',
          '1 Outfit',
          'Private Digital Gallery (3 months)',
          'Personalized USB with content',
          '1 Short Highlights (1 min)',
          '5 printed photos'
        ]
      },
      {
        title:'Golden Maternity collection',
        price: 'CA $450',
        services: [
          '2 hours coverage',
          '40 Edited photos',
          '2 Outfit',
          '1 Short video (1 to 2 min)',
          'Private Digital Gallery (6 months)',
          'Personalized USB with content',
          '10 printed photos'
        ]
      },
    ]
  },
  {
    id: 4,
    id_tag:'comm',
    img: '/images/service-commercial.png',
    title: 'Commercial Shoots',
    services_card: [
      {
        title:'Silver business production',
        price: 'CA $250',
        services: [
          '2 hours coverage',
          '30 Edited photos',
          '1 Photographer',
          'Private Digital Gallery for 3 months',
        ]
      },
      {
        title:'Golden birthday collection',
        price: 'CA $450',
        services: [
          '2 hours coverage',
          '40 Edited photos',
          '1 Photographer',
          '1 Videographer',
          '4 Short Videos ( 15 secs to 1 min',
          'Digital Gallery for 6 months'
        ]
      },
      {
        title:'Deluxe birthday collection',
        price: 'CA $799',
        services: [
          '5 hours coverage',
          '50 Edited photos',
          '1 Photographer',
          '1 Videographer',
          '8 Short Videos ( 15 secs to 1 min',
          '1 Corporate Video (1 to 3 min',
          'Digital Gallery for 6 months'
        ]
      }
    ]
  },
  {
    id: 5,
    id_tag: 'custom',
    img: '/images/service-custom.png',
  },
]

export default services_data
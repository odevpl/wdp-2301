import React from 'react';

const initialState = {
  hotDeals: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique',
      photoLeft:
        'https://media.istockphoto.com/id/1199428736/pl/zdj%C4%99cie/turkusowe-krzes%C5%82o-rami%C4%99-izolowane-na-bia%C5%82ym-tle-widok-z-przodu-tapicerowanego-sofy.jpg?s=612x612&w=0&k=20&c=cDy8FBg6pec4y6quiEhHAcUhyO9_k1kZNctorO06JEk=',
      category: 'bed',
      oldPrice: 35,
      price: 30,
      stars: 2,
      userStars: 3,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
      promotion: '20percent',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique',
      photoRight:
        'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'bed',
      oldPrice: 35,
      price: 30,
      stars: 2,
      userStars: 3,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
      promotion: '20percent',
    },
  ],

  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],

  promotions: [
    {
      id: '20percent',
      title: 'GUEST ROOM',
      description: 'SOFA',
      value: '-20%',
      photo: <img src={`${process.env.PUBLIC_URL}/images/sofa.jpeg`} alt='sofa' />,
    },
    {
      id: '30percent',
      title: 'OFFICE',
      description: 'CHAIR',
      value: '$200.00',
      photo: <img src={`${process.env.PUBLIC_URL}/images/chair.jpeg`} alt='sofa' />,
    },
    {
      id: '30percent',
      title: 'SPECIAL',
      description: 'COLLECTION',
      value: '-45%',
      photo: <img src={`${process.env.PUBLIC_URL}/images/bed.jpeg`} alt='sofa' />,
    },
  ],

  brands: [
    {
      id: 'brand-1',
      photo: (
        <img src={`${process.env.PUBLIC_URL}/images/brands/brand1.png`} alt='brand1' />
      ),
    },
    {
      id: 'brand-2',
      photo: (
        <img src={`${process.env.PUBLIC_URL}/images/brands/brand2.png`} alt='brand2' />
      ),
    },
    {
      id: 'brand-3',
      photo: (
        <img src={`${process.env.PUBLIC_URL}/images/brands/brand3.png`} alt='brand3' />
      ),
    },
    {
      id: 'brand-4',
      photo: (
        <img src={`${process.env.PUBLIC_URL}/images/brands/brand4.png`} alt='brand4' />
      ),
    },
    {
      id: 'brand-5',
      photo: (
        <img src={`${process.env.PUBLIC_URL}/images/brands/brand5.png`} alt='brand5' />
      ),
    },
    {
      id: 'brand-6',
      photo: (
        <img src={`${process.env.PUBLIC_URL}/images/brands/brand6.png`} alt='brand6' />
      ),
    },
    {
      id: 'brand-7',
      photo: (
        <img src={`${process.env.PUBLIC_URL}/images/brands/brand7.png`} alt='brand7' />
      ),
    },
    {
      id: 'brand-8',
      photo: (
        <img src={`${process.env.PUBLIC_URL}/images/brands/brand8.png`} alt='brand8' />
      ),
    },
    {
      id: 'brand-9',
      photo: (
        <img src={`${process.env.PUBLIC_URL}/images/brands/brand9.png`} alt='brand9' />
      ),
    },
    {
      id: 'brand-10',
      photo: (
        <img
          src={`${process.env.PUBLIC_URL}/images/brands/brand10.png`}
          alt='brand10'
        />
      ),
    },
    {
      id: 'brand-11',
      photo: (
        <img
          src={`${process.env.PUBLIC_URL}/images/brands/brand11.png`}
          alt='brand11'
        />
      ),
    },
    {
      id: 'brand-12',
      photo: (
        <img
          src={`${process.env.PUBLIC_URL}/images/brands/brand12.png`}
          alt='brand12'
        />
      ),
    },
    {
      id: 'brand-13',
      photo: (
        <img
          src={`${process.env.PUBLIC_URL}/images/brands/brand13.png`}
          alt='brand13'
        />
      ),
    },
    {
      id: 'brand-14',
      photo: (
        <img
          src={`${process.env.PUBLIC_URL}/images/brands/brand14.png`}
          alt='brand14'
        />
      ),
    },
  ],

  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image3.png`} alt='image3' />,
      category: 'bed',
      oldPrice: 35,
      price: 30,
      stars: 2,
      userStars: 3,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
      promotion: '20percent',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'AeneanRu Bristique 2',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image10.png`} alt='image10' />,
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
      promotion: '30percent',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image4.png`} alt='image4' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image6.png`} alt='image6' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image5.png`} alt='image5' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image7.png`} alt='image7' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image8.png`} alt='image8' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image9.png`} alt='image9' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image10.png`} alt='image10' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image11.png`} alt='image11' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image12.png`} alt='image12' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image13.png`} alt='image13' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image9.png`} alt='image9' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image5.png`} alt='image5' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image3.png`} alt='image3' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image4.png`} alt='image4' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image5.png`} alt='image5' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image6.png`} alt='image6' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image7.png`} alt='image7' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image8.png`} alt='image8' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image9.png`} alt='image9' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image10.png`} alt='image10' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image11.png`} alt='image11' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      photo: <img src={`${process.env.PUBLIC_URL}/images/image12.png`} alt='image12' />,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 25',
      category: 'chair',
      photo: (
        <img
          src={`${process.env.PUBLIC_URL}/images/furniture/chair/chair1.png`}
          alt='chair1'
        />
      ),
      oldPrice: 35,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 26',
      category: 'chair',
      photo: (
        <img
          src={`${process.env.PUBLIC_URL}/images/furniture/chair/chair2.png`}
          alt='chair2'
        />
      ),
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 27',
      category: 'chair',
      photo: (
        <img
          src={`${process.env.PUBLIC_URL}/images/furniture/chair/chair3.png`}
          alt='chair3'
        />
      ),
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 28',
      category: 'chair',
      photo: (
        <img
          src={`${process.env.PUBLIC_URL}/images/furniture/chair/chair4.png`}
          alt='chair4'
        />
      ),
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-29',
      name: 'Aenean Ru Bristique 29',
      category: 'chair',
      photo: (
        <img
          src={`${process.env.PUBLIC_URL}/images/furniture/chair/chair5.png`}
          alt='chair5'
        />
      ),
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-30',
      name: 'Aenean Ru Bristique 30',
      category: 'sofa',
      photo: (
        <img
          src={`${process.env.PUBLIC_URL}/images/furniture/sofa/sofa1.png`}
          alt='sofa1'
        />
      ),
      oldPrice: 35,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-31',
      name: 'Aenean Ru Bristique 31',
      category: 'sofa',
      photo: (
        <img
          src={`${process.env.PUBLIC_URL}/images/furniture/sofa/sofa2.png`}
          alt='sofa2'
        />
      ),
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-32',
      name: 'Aenean Ru Bristique 32',
      category: 'sofa',
      photo: (
        <img
          src={`${process.env.PUBLIC_URL}/images/furniture/sofa/sofa3.png`}
          alt='sofa3'
        />
      ),
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-33',
      name: 'Aenean Ru Bristique 33',
      category: 'table',
      photo: (
        <img
          src={`${process.env.PUBLIC_URL}/images/furniture/table/table1.png`}
          alt='table1'
        />
      ),
      oldPrice: 35,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-34',
      name: 'Aenean Ru Bristique 34',
      category: 'table',
      photo: (
        <img
          src={`${process.env.PUBLIC_URL}/images/furniture/table/table2.png`}
          alt='table2'
        />
      ),
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-35',
      name: 'Aenean Ru Bristique 35',
      category: 'table',
      photo: (
        <img
          src={`${process.env.PUBLIC_URL}/images/furniture/table/table3.png`}
          alt='table3'
        />
      ),
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
    {
      id: 'aenean-ru-bristique-36',
      name: 'Aenean Ru Bristique 36',
      category: 'dining',
      photo: (
        <img
          src={`${process.env.PUBLIC_URL}/images/furniture/dining/dining1.png`}
          alt='dining1'
        />
      ),
      oldPrice: 35,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
      isComparable: false,
    },
  ],

  cart: {
    products: [],
  },

  feedback: [
    {
      id: '1',
      author: 'John Smith',
      content: 'Lorem Ipsum',
      profilePicture: (
        <img
          src={`${process.env.PUBLIC_URL}/images/feedback/profilePicture.jpeg`}
          alt='image3'
        />
      ),
      clientCompany: 'Furniture client',
    },
    {
      id: '2',
      author: 'John Poul',
      content: 'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum',
      profilePicture: (
        <img
          src={`${process.env.PUBLIC_URL}/images/feedback/profilePicture2.jpeg`}
          alt='image3'
        />
      ),
      clientCompany: 'Furniture client',
    },
    {
      id: '3',
      author: 'Ben Smith',
      content:
        'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum',
      profilePicture: (
        <img
          src={`${process.env.PUBLIC_URL}/images/feedback/profilePicture3.jpeg`}
          alt='image3'
        />
      ),
      clientCompany: 'Furniture client',
    },
  ],
  width: {},

  posts: [
    {
      id: 'post-2',
      name: 'Products That Fight Static',
      photo: (
        <img src={`${process.env.PUBLIC_URL}/images/blog/blog2.jpg`} alt='blog2' />
      ),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sem quis arcu congue rhoncus. Curabitur ac tortor metus. Nunc ac augue vel tellus eleifend.',
      date: '15 JAN 2023',
      comments: '1',
    },
    {
      id: 'post-3',
      name: 'Products That Fight Static',
      photo: (
        <img src={`${process.env.PUBLIC_URL}/images/blog/blog3.jpg`} alt='blog3' />
      ),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sem quis arcu congue rhoncus. Curabitur ac tortor metus. Nunc ac augue vel tellus eleifend.',
      date: '15 JAN 2023',
      comments: '1',
    },
    {
      id: 'post-4',
      name: 'Products That Fight Static',
      photo: (
        <img src={`${process.env.PUBLIC_URL}/images/blog/blog4.jpg`} alt='blog4' />
      ),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sem quis arcu congue rhoncus. Curabitur ac tortor metus. Nunc ac augue vel tellus eleifend.',
      date: '15 JAN 2023',
      comments: '1',
    },
    {
      id: 'post-5',
      name: 'Products That Fight Static',
      photo: (
        <img src={`${process.env.PUBLIC_URL}/images/blog/blog5.jpg`} alt='blog5' />
      ),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sem quis arcu congue rhoncus. Curabitur ac tortor metus. Nunc ac augue vel tellus eleifend.',
      date: '15 JAN 2023',
      comments: '1',
    },
    {
      id: 'post-6',
      name: 'Products That Fight Static',
      photo: (
        <img src={`${process.env.PUBLIC_URL}/images/blog/blog6.jpg`} alt='blog6' />
      ),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sem quis arcu congue rhoncus. Curabitur ac tortor metus. Nunc ac augue vel tellus eleifend.',
      date: '15 JAN 2023',
      comments: '1',
    },
    {
      id: 'post-7',
      name: 'Products That Fight Static',
      photo: (
        <img src={`${process.env.PUBLIC_URL}/images/blog/blog7.jpg`} alt='blog7' />
      ),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sem quis arcu congue rhoncus. Curabitur ac tortor metus. Nunc ac augue vel tellus eleifend.',
      date: '15 JAN 2023',
      comments: '1',
    },
    {
      id: 'post-7',
      name: 'Products That Fight Static',
      photo: (
        <img src={`${process.env.PUBLIC_URL}/images/blog/blog7.jpg`} alt='blog7' />
      ),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sem quis arcu congue rhoncus. Curabitur ac tortor metus. Nunc ac augue vel tellus eleifend.',
      date: '15 JAN 2023',
      comments: '1',
    },
    {
      id: 'post-8',
      name: 'Products That Fight Static',
      photo: (
        <img src={`${process.env.PUBLIC_URL}/images/blog/blog8.jpg`} alt='blog8' />
      ),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sem quis arcu congue rhoncus. Curabitur ac tortor metus. Nunc ac augue vel tellus eleifend.',
      date: '15 JAN 2023',
      comments: '1',
    },
  ],
};

export default initialState;

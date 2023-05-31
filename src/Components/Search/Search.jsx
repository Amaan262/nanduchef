import { useLocation } from 'react-router-dom'
import {
    heengmix, aloobhujia, biji, bikaneribhujia, makhanamix, raja, dalmoth, moongdal,specialmix
} from '../../Images/images'
import Products from '../Products/Products'
import {
    plumcake, brownies, candycake, circuscake, dearcake, dearcake2, flowercake2, flowercake3, flowercake4, glazecake, goldenblackforest, haldicake, heartcake, majestycake, minecake, mousse, paintingcake, shahithandai, soulcake, spidermancake, springcake, strawberrycake, trufflepastry, valentinecake, waffles, weddingrose, attacookies, attacookies2,

} from '../../Images/images'


const Search = () => {
    //     const [filter,setFilter] = useState('')
    //   const [isProductsFound,setIsProductsFound] = useState(false)

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    const SearchResult = Search_Items.filter((item) => (item.title.toLowerCase().includes(query.toLowerCase())));




    return (
        <>
            <section className="search_container">

                <Products title='Search Results' ProductItems={SearchResult} />

            </section>
        </>
    )
}

export default Search



const Search_Items = [
    {
        id: 1,
        img: `${heengmix}`,
        title: 'Heeng Mixture',
        desc: "Namkeen savoured with Purest Spice of Heeng (Asafetida), the spiciness of Original Red Chilli to Relish the Taste Never Felt. It is no surprise that this delicacy has earned its place as a Confectionery icon, captivating the palates of food enthusiasts around the world.",
        price: '$10'
    },
    {
        id: 2,
        img: `${raja}`,
        title: 'Nandu Raja',
        desc: "Namkeen with Cashews, This delicacy is a gastronomic masterpiece, combining delicate flavors and exquisite textures to create a truly unforgettable culinary experience.",
        price: '$10'
    },
    {
        id: 3,
        img: `${aloobhujia}`,
        title: 'Aloo Bhujia',
        desc: "Prepared from Potatoes of best quality, from the first taste, you can discern the complexity of flavors that have been carefully layered to create a symphony of taste.",
        price: '$10'
    },
    {
        id: 4,
        img: `${biji}`,
        title: 'Dal Biji',
        desc: ' A Namkeen with Muskmelon Seeds (Kharbuje ki Meeng), it Zests the taste buds of Tongue. Each bite of this delicacy reveals a harmonious blend of flavors that dance on your palate, leaving a lingering sensation of pleasure.',
        price: '$10'

    },
    {
        id: 5,
        img: `${dalmoth}`,
        title: 'Kaju Dalmoth',
        desc: ' A Mixture of Purely Cashews, The presentation of this delicacy is a work of art, meticulously arranged to entice both the eyes and the taste buds.',
        price: '$10'

    },
    {
        id: 6,
        img: `${bikaneribhujia}`,
        title: 'Bikaneri Bhujia',
        desc: 'Deep Fried Bhujia made from Gram Flour, added with Moth, the texture of this delicacy is a revelation, with a perfect balance between tenderness and a slight crispness that adds depth to each bite.',
        price: `$10`
    },
    {
        id: 7,
        img: `${makhanamix}`,
        title: 'Makhanam Mixture',
        desc: ' A Mix of Makhana (Euryale ferox) prepared with utmost precision and using only the finest ingredients, this delicacy is a testament to the skill and artistry of the chef.',
        price: `$10`
    },
    {
        id: 8,
        img: moongdal,
        title: 'Moong Dal',
        desc: 'A Namkeen made purely from Moong (Yellow Lentil), each bite of this delicacy reveals a harmonious blend of flavors that dance on your palate, leaving a lingering sensation of pleasure.',
        price: `$10`
    },

    {
        id: 9,
        img: specialmix,
        title: 'Special Mixture',
        desc: "The Crispy Sev, crunchy peanuts, or spicy mixture it offersan explosion of taste that leaves a lasting impression on your palate.The perfect balance of spices, the precise frying techniques, and the artful mixing of ingredients create a symphony of flavors that dance on your taste buds. Their savory flavors, enticing textures, and cultural significance make them a treasured culinary gem. So, go ahead and savor the magic of Special Mixture , allowing yourself to indulge in the joyous symphony of taste that they offer.",
        price: '$10'
      },
    {
        id: 1,
        img: majestycake,
        title: 'Majesty Cake',
        desc: "",
        price: '$10'
    },

    {
        id: 2,
        img: brownies,
        title: 'Brownies',
        desc: "Brownies are a square, baked, chocolate dessert. Brownies come in a variety of forms and may be either fudgy or cakey, depending on their density. They may include nuts, frosting, cream cheese, chocolate chips, or other ingredients.",
        price: '$10'
    },
    {
        id: 19,
        img: mousse,
        title: 'Mousse',
        desc: "",
        price: '$10'

    },
    {
        id: 20,
        img: paintingcake,
        title: 'Painting Cake',
        desc: "",
        price: '$10'
    },
    {
        id: 21,
        img: shahithandai,
        title: 'Shahi Thandai',
        desc: "",
        price: '$10'
    },
    // {
    //   id: 3,
    //   img: cake1,
    //   title: 'Cake',
    //   desc: "Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate, and that share features with other desserts such as pastries, meringues, custards, and pies.",
    //   price: '$10'
    // },
    {
        id: 24,
        img: springcake,
        title: 'Spring Cake',
        desc: "",
        price: '$10'
    },
    {
        id: 25,
        img: strawberrycake,
        title: 'Strawberry Cake',
        desc: "",
        price: '$10'
    },
    {
        id: 26,
        img: trufflepastry,
        title: 'Truffle Pastry',
        desc: "",
        price: '$10'
    },
    {
        id: 27,
        img: valentinecake,
        title: 'Valentine Cake',
        desc: "",
        price: '$10'
    },
    {
        id: 28,
        img: waffles,
        title: 'Waffles',
        desc: "",
        price: '$10'
    },
    {
        id: 29,
        img: weddingrose,
        title: 'Wedding Rose',
        desc: "",
        price: '$10'
    },
    {
        id: 4,
        img: candycake,
        title: 'Candy Cake',
        desc: "Candy Cake is a type of fruitcake made with chopped candied fruit or dried fruit, nuts, and spices, and optionally soaked in spirits. It is popular during the holiday season.",
        price: '$10'
    },
    {
        id: 5,
        img: circuscake,
        title: 'Circus Cake',
        desc: "Circus Cake is a type of fruitcake made with chopped candied fruit or dried fruit, nuts, and spices, and optionally soaked in spirits. It is popular during the holiday season.",
        price: '$10'
    },
    {
        id: 6,
        img: dearcake,
        title: 'Dear Cake',
        desc: "Dear Cake is a type of fruitcake made with chopped candied fruit or dried fruit, nuts, and spices, and optionally soaked in spirits. It is popular during the holiday season.",
        price: '$10'
    },
    {
        id: 7,
        img: dearcake2,
        title: 'Dear Cake 2',
        desc: "Dear Cake 2 is a type of fruitcake made with chopped candied fruit or dried fruit, nuts, and spices, and optionally soaked in spirits. It is popular during the holiday season.",
        price: '$10'
    },
    // {
    //   id: 8,
    //   img : flowercake,
    //   title: 'Flower Cake',
    //   desc: "Flower Cake is a type of fruitcake made with chopped candied fruit or dried fruit, nuts, and spices, and optionally soaked in spirits. It is popular during the holiday season.",
    //   price: '$10'
    // },
    {
        id: 9,
        img: flowercake2,
        title: 'Flower Cake 2',
        desc: "Flower Cake 2 is a type of fruitcake made with chopped candied fruit or dried fruit, nuts, and spices, and optionally soaked in spirits. It is popular during the holiday season.",
        price: '$10'
    },

    {
        id: 10,
        img: flowercake3,
        title: 'Flower Cake 3',
        desc: "Flower Cake 3 is a type of fruitcake made with chopped candied fruit or dried fruit, nuts, and spices, and optionally soaked in spirits. It is popular during the holiday season.",
        price: '$10'
    },
    {
        id: 11,
        img: flowercake4,
        title: 'Flower Cake 4',
        desc: "",
        price: '$10'
    },
    {
        id: 12,
        img: glazecake,
        title: 'Glaze Cake',
        desc: "",
        price: '$10'
    },
    {
        id: 13,
        img: goldenblackforest,
        title: 'Golden Black Forest',
        desc: "",
        price: '$10'
    },
    {
        id: 14,
        img: haldicake,
        title: 'Haldi Cake',
        desc: "",
        price: '$10'
    },
    {
        id: 15,
        img: heartcake,
        title: 'Heart Cake',
        desc: "",
        price: '$10'
    },
    {
        id: 16,
        img: plumcake,
        title: 'Plum Cake',
        desc: "Plum Cake is a type of fruitcake made with chopped candied fruit or dried fruit, nuts, and spices, and optionally soaked in spirits. It is popular during the holiday season.",
        price: '$10'
    },
    {
        id: 18,
        img: minecake,
        title: 'Mine Cake',
        desc: "",
        price: '$10'
    },

    {
        id: 22,
        img: soulcake,
        title: 'Soul Cake',
        desc: "",
        price: '$10'
    },
    {
        id: 23,
        img: spidermancake,
        title: 'Spiderman Cake',
        desc: "",
        price: '$10'
    },
    {
        id: 1,
        img: attacookies,
        title: 'Atta Cookies',
        desc: "Twin Badam Cookies",
        bg: 'e19f6c',

    },

    {
        id: 2,
        img: attacookies2,
        title: 'Atta Cookies',
        desc: "Twin Badam Cookies",
        bg: 'e19f6c',

    },
    {
        id: 3,
        img: `${attacookies}`,
        title: 'Atta Cookies',
        desc: "Twin Badam Cookies",
        bg: 'e19f6c',

    },

    {
        id: 4,
        img: `${attacookies2}`,
        title: 'Atta Cookies',
        desc: "Twin Badam Cookies",
        bg: 'e19f6c',

    },
]
// lunch


// dinner
import zucchiniChicken from "./images/zuccini-chicken.jpeg";
import makaroniLaatikko from "./images/makaroniLaatikko.jpg";
import adanaKebap from "./images/adana.jpg";
import guinnesBeefStew from "./images/guinnesBeefStew.jpg";
import mooseMeatBalls from "./images/mooseMeatBalls.jpg";
import cabbageCassorele from "./images/cabbageCasserole.jpg";
import salmonOvenVeggies from "./images/salmonOvenVeggies.jpg";
import lasagne from './images/lasagne.jpg';
import chickenKebap from './images/chickenKebap.jpg';
import kadinBuduKöfte from './images/kadinBuduKofte.jpg';
import chickenNoodle from './images/chickenNoodle.jpg';
import italianChickenPasta from './images/italian_chicken_pasta.jpg';
import sweetpatatoCurry from './images/sweetpatato_curry.jpg';

// dessert
import mansikkaRahka from './images/mansikkaRahka.jpg';
import blueberryPie from './images/mustikkapiirakka.jpg';
import cremeCaramel from './images/cremeCaramel.webp';
import korvapuusti from './images/cinnamonBun.webp';

const MAIN_FOODS = [
  {
    name: "Zucchini Chicken Spaghetti",
    link: "https://downshiftology.com/recipes/zucchini-noodles-with-chicken-spinach-parmesan/",
    ingredients: ["zucchini", "chicken", "spaghetti"],
    image: zucchiniChicken,
  },
  {
    name: "Italian Chicken Paste Cassorell",
    link: "https://yhteishyva.fi/reseptit/italian-mamman-broilerivuoka/recipe-23406",
    ingredients: ["pasta", "chicken", "zucchini"],
    image: italianChickenPasta,
  },
  {
    name: "Chicken Noodle Wok",
    link: "https://www.youtube.com/watch?v=RFE7qdhjgXc",
    ingredients: ["noodle", "chicken", "soy sauce", "brocoli", "carrot", "paprika", "onion", "garlic"],
    image: chickenNoodle,
  },
  {
    name: "Makaroni Laatikko",
    link: "https://www.k-ruoka.fi/reseptit/liha-makaronilaatikko",
    ingredients: ["makaroni", "minced meat"],
    image: makaroniLaatikko,
  },
  {
    name: "Adana Kebap",
    ingredients: ["ground lamb, ", "red bell pepper, ", "onion"],
    link: "http://www.kebabhouseselcuk.com/adana-kebab-recipe.html",
    image: adanaKebap,
  },
  {
    name: "Guinness Beef Stew",
    link: "https://www.recipetineats.com/irish-beef-and-guinness-stew/",
    ingredients: ["cube meat", "carrot", "cellery", "patato", "guinnes beer"],
    image: guinnesBeefStew,
  },
  {
    name: "Moose Meatballs",
    link: "https://anna.fi/reseptit/hirvipullat-jaloviinakermakastikkeessa",
    ingredients: ["moose minced meat", "carrot", "cellery", "patato"],
    image: mooseMeatBalls,
  },
  {
    name: "Cabbage Casserole",
    link: "https://yhteishyva.fi/reseptit/kaalilaatikko/recipe-4544",
    ingredients: ["cabbage", "minced meat", "onion", "rice"],
    image: cabbageCassorele,
  },
  {
    name: "Salmon and Oven Vegies",
    link:
      "https://www.onceuponachef.com/recipes/restaurant-style-pan-seared-salmon.html",
    ingredients: ["salmon", "sweet patato", "beetroot", "patato"],
    image: salmonOvenVeggies,
  },
  {
    name: "Lasagne",
    link: "https://www.k-ruoka.fi/reseptit/lasagne",
    ingredients: ["minced meat", "carrot", "cheese"],
    image: lasagne,
  },
  {
    name: "Turkish Chicken Kebap",
    link: "https://www.thespruceeats.com/basic-turkish-chicken-kebab-3274263",
    ingredients: ["chicken", "tomato paste", "bulgur"],
    image: chickenKebap,
  },
  {
    name: "Lady's Thigh",
    link: "https://www.youtube.com/watch?v=GTqqvySCuI0",
    ingredients: ["minced meat", "onion", "rice", "flour", "parsley", "salt", "blackpepper", "egg"],
    image: kadinBuduKöfte,
  },
  {
    name: "Sweet Patato Chickpeas Curry",
    link: "https://www.k-ruoka.fi/reseptit/bataatticurry",
    ingredients: ["sweet patato", "chickpeas", "rice", "spinach", "turmaric"],
    image: sweetpatatoCurry,
  },
];

const LUNCH = [
  {
    name: "Lentils Soup",
    link: "https://jolie.fi/yellowmood/maailman-paras-linssikeitto/",
    ingredients: ["lentils", "coconut milk", "onion", "crushed tomato canned"],
    image:
      "https://cdn.valio.fi/mediafiles/8ded7472-19f3-440d-a834-72f8d2da8e9d/1440x1080-recipe-hero",
  },
  {
    name: "Sausage Soup",
    link: "https://www.k-ruoka.fi/reseptit/nakkikeitto",
    ingredients: ["nakki", "patato", "carrot"],
    image: "https://snellman.fi/app/uploads/sites/2/nakkikeitto-3.jpg",
  },
  {
    name: "Meatball Soup",
    link: "https://www.youtube.com/watch?v=EWz5Kp9TAI4",
    ingredients: ["minced meat", "carrot", "patato"],
    image: "https://d2lswn7b0fl4u2.cloudfront.net/photos/sulu-kofte.jpg",
  },
  {
    name: "Minced Meat Soup",
    link: "https://www.valio.fi/reseptit/jauhelihakeitto-koko-perheelle/",
    ingredients: ["minced meat", "carrot", "patato"],
    image:
      "https://cdn.valio.fi/mediafiles/e845976d-7cb2-4622-98fd-7a8ff1810df5/1440x1080-recipe-hero",
  },
  {
    name: "Pasta Salad",
    link: "https://www.inspiredtaste.net/38019/easy-pasta-salad-recipe/",
    ingredients: ["pasta", "cucember", "tomato", "red kidney bean", "dill"],
    image:
      "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Easy-Pasta-Salad-Recipe-2-1200.jpg",
  },
  {
    name: "Salmon Soup",
    link: "https://www.valio.fi/reseptit/lohikeitto/",
    ingredients: ["salmon", "patato", "bay leaft", "kerma", "dill"],
    image:
      "https://cdn.valio.fi/mediafiles/5daeba02-4374-403d-ad71-294c72bfa5ff/1440x1080-recipe-hero",
  },
  {
    name: "Chickpea Chicken Soup",
    link: "https://www.eatwell101.com/chickpea-chicken-soup-recipe",
    ingredients: ["chickpea", "chicken", "carrot", "tomato paste", "parsley"],
    image:
      "https://www.eatwell101.com/wp-content/uploads/2015/11/Chickpea-chicken-soup-recipe2.jpg",
  },
];

const DESSERT = [
  {
    name: "Creme Caramel",
    link: "https://www.finecooking.com/recipe/basic-creme-caramel",
    ingredients: ["eggs", "heavy cream", "vanilla extract", "sugar", "milk"],
    image:
      cremeCaramel,
  },
  {
    name: "Banana Bread",
    link: "https://bakingamoment.com/perfect-banana-bread-recipe/",
    ingredients: [
      "banana",
      "yogurt",
      "egg",
      "butter",
      "vanilla extract",
      "sugar",
    ],
    image:
      "https://bakingamoment.com/wp-content/uploads/2018/09/IMG_9680-best-banana-bread-recipe-square.jpg",
  },
  {
    name: "Strawberry Yogurt",
    link: "https://www.kotikokki.net/reseptit/nayta/1212/Makoisa%20mansikkarahka/",
    ingredients: [
      "strawberry",
      "yogurt",
      "sugar",
      "vanilla sugar",
      "heavy cream"
    ],
    image:
      mansikkaRahka,
  },
  {
    name: "Blueberry Pie",
    link: "https://www.myllynparas.fi/reseptit/kermaviilitaytteinen-mustikkapiirakka",
    ingredients: [
      "blueberry",
      "egg",
      "sugar",
      "vanilla sugar",
      "heavy cream"
    ],
    image:
     blueberryPie,
  },
  {
    name: "Finnish Cinnamon Bun",
    link: "https://www.thespruceeats.com/finnish-cinnamon-pastries-korvapuusti-2952710",
    ingredients: [
      "milk",
      "butter",
      "egg",
      "flour",
      "yeast",
      "sugar",
      "cardamom",
      "cinnamon",
    ],
    image:
     korvapuusti,
  },
  
];

function mixMainFoods() {
  return MAIN_FOODS.sort(()=> Math.random() - 0.5)
}

function mixLunch() {
  return LUNCH.sort(()=> Math.random() - 0.5)
}

function mixDessert() {
  return DESSERT.sort(()=> Math.random() - 0.5)
}

let dinnerData = [...mixMainFoods()] 
let lunchData = [...mixLunch()] 
let dessertData = [...mixDessert()] 

export { mixMainFoods, dinnerData, lunchData, dessertData };

const MAIN_FOODS = [
  {
    name: "Zucchini Chicken Spaghetti",
    link: "https://www.youtube.com/watch?v=mILFcumUbuk&feature=emb_title",
    ingredients: ["zucchini", "chicken", "spaghetti"],
    image:
      "https://www.eatwell101.com/wp-content/uploads/2018/03/zucchini-and-chicken-recipe.jpg",
  },
  {
    name: "Makaroni Laatikko",
    link: "https://www.k-ruoka.fi/reseptit/liha-makaronilaatikko",
    ingredients: ["makaroni", "minced meat"],
    image:
      "https://www.myllynparas.fi/sites/default/files/thumbnails/image/1377846177_siken_liha_makaronilaatikko_1.jpg",
  },
  {
    name: "Guinness Beef Stew",
    link: "https://www.recipetineats.com/irish-beef-and-guinness-stew/",
    ingredients: ["cube meat", "carrot", "cellery", "patato", "guinnes beer"],
    image:
      "https://www.recipetineats.com/wp-content/uploads/2020/03/Irish-Beef-Guinness-Stew_6-SQ.jpg",
  },
  {
    name: "Moose Meatballs",
    link: "https://anna.fi/reseptit/hirvipullat-jaloviinakermakastikkeessa",
    ingredients: ["Moose minced meat", "carrot", "cellery", "patato"],
    image:
      "https://anna.fi/wp-content/uploads/s/f/ruokaohje/975153-hirvenlihapyorykat-1024x743.jpg",
  },
  {
    name: "Salmon and Oven Vegies",
    link: "https://www.onceuponachef.com/recipes/restaurant-style-pan-seared-salmon.html",
    ingredients: ["salmon", "sweet patato", "beetroot", "patato"],
    image:
      "https://www.onceuponachef.com/images/2018/02/pan-seared-salmon--1200x988.jpg",
  },
  {
    name: "Lasagne",
    link: "https://www.k-ruoka.fi/reseptit/lasagne",
    ingredients: ["minced meat", "carrot", "cheese"],
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-lasagna-bolognese-horizontal-1543346979.png",
  },
  {
    name: "Turkish Chicken Kebap and Bulgur",
    link: "https://www.thespruceeats.com/basic-turkish-chicken-kebab-3274263",
    ingredients: ["chicken", "tomato paste", "bulgur"],
    image:
      "https://www.thespruceeats.com/thmb/3aS-MqMydQjW1n7RBGWNVYQagIo=/4494x3000/filters:fill(auto,1)/basic-turkish-chicken-kebab-3274263_19-5b4ce87746e0fb00370a5025.jpg",
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
    image:
      "https://snellman.fi/app/uploads/sites/2/nakkikeitto-3.jpg",
  },
  {
    name: "Meatball Soup",
    link: "https://www.youtube.com/watch?v=EWz5Kp9TAI4",
    ingredients: ["minced meat", "carrot", "patato"],
    image:
      "https://d2lswn7b0fl4u2.cloudfront.net/photos/sulu-kofte.jpg",
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
];



function randomMainFood() {
  return MAIN_FOODS[Math.floor(Math.random() * MAIN_FOODS.length)];
}

function randomLunch() {
  return LUNCH[Math.floor(Math.random() * LUNCH.length)];
}

export { randomMainFood, randomLunch}
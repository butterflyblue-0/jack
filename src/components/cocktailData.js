// cocktailData.js


import old_fashioned_img from "../assets/old_fashioned_img.webp";
import manhattan from "../assets/manhattan.webp";
import neat from "../assets/neat.webp";
import gentleman_sour from "../assets/gentleman_sour.webp";
import ginger_plus from "../assets/ginger_plus.webp";
import gentleman_rock from "../assets/gentleman_rock.webp";
import jack_bonded_old from "../assets/jack_bonded_old.webp";
import boulevardier from "../assets/boulevardier.webp";
import whiskey_soda from "../assets/whiskey_soda.webp";
import apple_lemonade from "../assets/apple_lemonade.webp";
import apple_ginger from "../assets/apple_ginger.webp";
import apple_spritz from "../assets/apple_spritz.webp";
import honey_smash from "../assets/honey_smash.webp";
import jacks_punch from "../assets/jacks_punch.webp";
import honey_lemonade from "../assets/honey_lemonade.webp";
import fire_shot from "../assets/fire_shot.webp";
import smashed_apple from "../assets/smashed_apple.webp";
import mule from "../assets/mule.webp";
import sling from "../assets/sling.webp";
import lynchburg from "../assets/lynchburg.webp";
import last_lap from "../assets/last_lap.webp";
import crush from "../assets/crush.webp";


export const cocktailFronts = [
  {
    name: "SINGLE BARREL OLD FASHIONED",
    brand: "SINGLE BARREL SELECT",
    image: old_fashioned_img,
  },
  {
    name: "SINGLE BARREL MANHATTAN",
    brand: "SINGLE BARREL SELECT",
    image: manhattan,
  },
  {
    name: "SINGLE BARREL NEAT",
    brand: "SINGLE BARREL SELECT",
    image: neat,
  },
  {
    name: "GENTLEMAN JACK® SOUR",
    brand: "GENTLEMAN JACK",
    image: gentleman_sour,
  },
  {
    name: "GENTLEMAN JACK & GINGER +1",
    brand: "GENTLEMAN JACK",
    image: ginger_plus,
  },
  {
    name: "GENTLEMAN JACK ON A ROCK",
    brand: "GENTLEMAN JACK",
    image: gentleman_rock,
  },
  {
    name: "JACK BONDED OLD FASHIONED",
    brand: "JACK DANIEL'S BONDED",
    image: jack_bonded_old,
  },
  {
    name: "BONDED BOULEVARDIER",
    brand: "JACK DANIEL'S BONDED",
    image: boulevardier,
  },
  {
    name: "JACK BONDED WHISKEY SODA",
    brand: "JACK DANIEL'S BONDED",
    image: whiskey_soda,
  },
  {
    name: "JACK APPLE & LEMONADE",
    brand: "TENNESSEE APPLE",
    image: apple_lemonade,
  },
  {
    name: "TENNESSEE APPLE GINGER",
    brand: "TENNESSEE APPLE",
    image: apple_ginger,
  },
  {
    name: "JACK APPLE SPRITZ",
    brand: "TENNESSEE APPLE",
    image: apple_spritz,
  },
  {
    name: "JACK HONEY SMASH",
    brand: "TENNESSEE HONEY",
    image: honey_smash,
  },
  {
    name: "JACK’S PUNCH",
    brand: "TENNESSEE HONEY",
    image: jacks_punch,
  },
  {
    name: "TENNESSEE HONEY & LEMONADE",
    brand: "TENNESSEE HONEY",
    image: honey_lemonade,
  },
  {
    name: "JACK FIRE SHOT",
    brand: "TENNESSEE FIRE",
    image: fire_shot,
  },
  {
    name: "CINNAMON SMASHED APPLE",
    brand: "TENNESSEE FIRE",
    image: smashed_apple,
  },
  {
    name: "TENNESSEE MULE",
    brand: "OLD NO. 7",
    image: mule,
  },
  {
    name: "TENNESSEE SLING",
    brand: "OLD NO. 7",
    image: sling,
  },
  {
    name: "LYNCHBURG LEMONADE",
    brand: "OLD NO. 7",
    image: lynchburg,
  },
  {
    name: "LAST LAP LEMONADE",
    brand: "OLD NO. 7",
    image: last_lap,
  },
  {
    name: "LANDO'S CRUSH",
    brand: "",
    image: crush,
  },
];

export const cocktailBacks = [
  {
    description: "A cocktail classic elevated to the top shelf",
    difficulty: "EASY-ISH",
    tags: ["SWEET", "SAVORY", "SMOOTH", "BITTER"],
  },
  {
    description: "The best of New York meets the best of Tennessee",
    difficulty: "WORTH THE EFFORT",
    tags: ["HERBAL", "SAVORY"],
  },
  {
    description: "From the barrel to the bottle to your glass.",
    difficulty: "EASY-ISH",
    tags: ["SWEET", "SAVORY", "SMOOTH", "NEAT"],
  },
  {
    description: "A whisky sour made for sippin'.",
    difficulty: "WORTH THE EFFORT",
    tags: ["CITRUS", "REFRESHING", "SWEET"],
  },
  {
    description: "Double mellowed smoothness with a snap of ginger.",
    difficulty: "EASY-ISH",
    tags: ["SWEET", "REFRESHING", "SMOOTH"],
  },
  {
    description: "Every drop is crafted with care in Lynchburg, TN.",
    difficulty: "EASY-ISH",
    tags: ["ON THE ROCKS", "SMOOTH", "SPICY", "SWEET"],
  },
  {
    description: "Elevated fashion.",
    difficulty: "WORTH THE EFFORT",
    tags: ["SWEET", "SPICY", "SMOOTH", "BITTER"],
  },
  {
    description: "A bold whiskey for a classic cocktail",
    difficulty: "EASY-ISH",
    tags: ["BITTER", "CITRUS", "SWEET", "SMOOTH"],
  },
  {
    description: "Wind down with this elevated whiskey soda.",
    difficulty: "SIMPLE COCKTAIL",
    tags: ["BITTER", "HERBAL", "CITRUS"],
  },
  {
    description: "Sip away a summer afternoon.",
    difficulty: "SIMPLE COCKTAIL",
    tags: ["SWEET", "CITRUS", "SOUR"],
  },
  {
    description: "Perfectly sweet and spice.",
    difficulty: "WORTH THE EFFORT",
    tags: ["SWEET", "REFRESHING", "SPICY", "CRISP"],
  },
  {
    description: "A Jack Apple twist on a refreshing classic.",
    difficulty: "SIMPLE COCKTAIL",
    tags: ["SWEET", "REFRESHING", "FRUITY", "CRISP"],
  },
  {
    description: "Perfect for sippin' on a hot summer day or night.",
    difficulty: "EASY-ISH",
    tags: ["CITRUS", "SWEET"],
  },
  {
    description: "Perfect for sippin' on a hot summer day or night.",
    difficulty: "EASY-ISH",
    tags: ["SWEET", "CITRUS", "REFRESHING"],
  },
  {
    description: "Nothing better for hot summer sippin'.",
    difficulty: "SIMPLE COCKTAIL",
    tags: ["SWEET", "CITRUS", "REFRESHING", "SOUR"],
  },
  {
    description: "Jack brings you the Tennessee heat.",
    difficulty: "SIMPLE COCKTAIL",
    tags: ["SWEET", "SPICY", "SMOOTH"],
  },
  {
    description: "Hard apple cider with a cinnamon kick.",
    difficulty: "SIMPLE COCKTAIL",
    tags: ["CITRUS", "SWEET", "SPICY"],
  },
  {
    description: "The fiery spicy of ginger with the smoothness of Jack",
    difficulty: "SIMPLE COCKTAIL",
    tags: ["CITRUS", "REFRESHING", "SPICY", "CRISP"],
  },
  {
    description: "Our spin on the famous Singapore sling",
    difficulty: "WORTH THE EFFORT",
    tags: ["CITRUS", "FRUITY", "HERBAL", "BITTER"],
  },
  {
    description: "A taste of our homeplace and summer over ice",
    difficulty: "SIMPLE COCKTAIL",
    tags: ["CITRUS", "SOUR", "REFRESHING", "SWEET"],
  },
  {
    description: "A winning balance of citrus and sweet with a bit of ginger.",
    difficulty: "EASY-ISH",
    tags: ["REFRESHING", "CITRUS", "SWEET", "SPICY"],
  },
  {
    description: "A refreshing and fruity mocktail that's a solid win for anyone.",
    difficulty: "SIMPLE COCKTAIL",
    tags: ["SWEET", "CITRUS", "FRUITY", "ZERO ALCOHOL"],
  },
];

const cocktailData = cocktailFronts.map((front, index) => ({
  front,
  back: cocktailBacks[index],
}));

export default cocktailData;
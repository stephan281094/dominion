const youtube = "https://youtu.be/LQRAfJyEsko";

const scenes = {
  camel: 6043,
  chicken: 1849,
  cow: 3183,
  dog: 5543,
  dolphin: 6367,
  duck: 2726,
  egg: 1399,
  exotic: 6229,
  fbs: 3949,
  fish: 4917,
  fox: 5455,
  horse: 5878,
  leather: 3963,
  mink: 5364,
  mouse: 6135,
  pig: 251,
  rabbit: 5206,
  sheep: 4266,
  turkey: 2471,
};

const startTimes = {
  // CAMELS
  camel: scenes.camel,
  camels: scenes.camel,

  // CHICKENS
  chicken: scenes.chicken,
  chickens: scenes.chicken,
  kfc: scenes.chicken,
  poultry: scenes.chicken,
  wings: scenes.chicken,

  // COWS
  beef: scenes.cow,
  burger: scenes.cow,
  cow: scenes.cow,
  cows: scenes.cow,
  dairy: scenes.cow,
  fbs: scenes.fbs,
  hamburger: scenes.cow,
  leather: scenes.leather,
  milk: scenes.cow,
  rodeo: scenes.cow,
  steak: scenes.cow,
  yogurt: scenes.cow,

  // DOGS
  dog: scenes.dog,
  dogs: scenes.dog,
  greyhound: scenes.dog,
  greyhounds: scenes.dog,

  // DOLPHINS
  dolphin: scenes.dolphin,
  dolphins: scenes.dolphin,
  seal: scenes.dolphin,
  seals: scenes.dolphin,
  seaworld: scenes.dolphin,

  // DUCKS
  down: scenes.duck,
  duck: scenes.duck,
  ducks: scenes.duck,
  feathers: scenes.duck,
  peking: scenes.duck,

  // EGGS
  chick: scenes.egg,
  chicks: scenes.egg,
  egg: scenes.egg,
  eggs: scenes.egg,
  hen: scenes.egg,
  hens: scenes.egg,
  omelet: scenes.egg,
  omelette: scenes.egg,

  // EXOTIC ANIMALS
  baboon: scenes.exotic,
  baboons: scenes.exotic,
  bear: scenes.exotic,
  bears: scenes.exotic,
  lion: scenes.exotic,
  lions: scenes.exotic,
  macaque: scenes.exotic,
  macaques: scenes.exotic,
  monkey: scenes.exotic,
  monkeys: scenes.exotic,
  polar: scenes.exotic,
  tiger: scenes.exotic,
  tigers: scenes.exotic,
  zoo: scenes.exotic,
  zoos: scenes.exotic,

  // FISH
  fish: scenes.fish,
  fishing: scenes.fish,
  fishoil: scenes.fish,
  lobster: scenes.fish,
  salmon: scenes.fish,
  snapper: scenes.fish,
  sushi: scenes.fish,
  trout: scenes.fish,
  tuna: scenes.fish,

  // FOXES
  fox: scenes.fox,
  foxes: scenes.fox,

  // HORSES
  horse: scenes.horse,
  horseriding: scenes.horse,
  horses: scenes.horse,

  // MICE
  mice: scenes.mice,
  mouse: scenes.mouse,
  research: scenes.mouse,

  // MINKS
  mink: scenes.mink,
  minks: scenes.mink,

  // PIGS
  bacon: scenes.pig,
  chorizo: scenes.pig,
  gammon: scenes.pig,
  ham: scenes.pig,
  pig: scenes.pig,
  pigs: scenes.pig,
  pork: scenes.pig,
  salami: scenes.pig,
  sausage: scenes.pig,

  // RABBITS
  experimentation: scenes.rabbit,
  rabbit: scenes.rabbit,
  rabbits: scenes.rabbit,
  testing: scenes.rabbit,

  // SHEEP
  lamb: scenes.sheep,
  lambs: scenes.sheep,
  mutton: scenes.sheep,
  sheep: scenes.sheep,
  wool: scenes.sheep,

  // TURKEY
  thanksgiving: scenes.turkey,
  turkey: scenes.turkey,
  turkeys: scenes.turkey,
};

module.exports = (req, res) => {
  const start = startTimes[req.query.keyword] || 0;

  res.status(301).redirect(youtube + (start ? "?t=" + start : ""));
};

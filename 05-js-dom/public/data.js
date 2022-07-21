let pokemons = [
  {
    name: "bulbasaur",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    weight: 69,
  },
  {
    name: "ivysaur",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    weight: 130,
  },
  {
    name: "venusaur",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    weight: 1000,
  },
  {
    name: "charmander",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    weight: 85,
  },
  {
    name: "charmeleon",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    weight: 190,
  },
  {
    name: "charizard",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    weight: 905,
  },
  {
    name: "squirtle",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    weight: 90,
  },
  {
    name: "wartortle",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    weight: 225,
  },
  {
    name: "caterpie",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    weight: 29,
  },
  {
    name: "metapod",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
    weight: 99,
  },
  {
    name: "weedle",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
    weight: 32,
  },
  {
    name: "kakuna",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
    weight: 100,
  },
  {
    name: "blastoise",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    weight: 855,
  },
  {
    name: "beedrill",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
    weight: 295,
  },
  {
    name: "pidgey",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
    weight: 18,
  },
  {
    name: "pidgeotto",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    weight: 300,
  },
  {
    name: "butterfree",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
    weight: 320,
  },
  {
    name: "pidgeot",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
    weight: 395,
  },
  {
    name: "spearow",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
    weight: 20,
  },
  {
    name: "fearow",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
    weight: 380,
  },
  {
    name: "raichu",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    weight: 300,
  },
  {
    name: "rattata",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
    weight: 35,
  },
  {
    name: "raticate",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
    weight: 185,
  },
  {
    name: "ekans",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
    weight: 69,
  },
  {
    name: "arbok",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    weight: 650,
  },
  {
    name: "pikachu",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    weight: 60,
  },
  {
    name: "sandshrew",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
    weight: 120,
  },
  {
    name: "sandslash",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
    weight: 295,
  },
  {
    name: "nidorina",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
    weight: 200,
  },
  {
    name: "nidoran-f",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
    weight: 70,
  },
  {
    name: "nidoqueen",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
    weight: 600,
  },
  {
    name: "nidoran-m",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
    weight: 90,
  },
  {
    name: "nidorino",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
    weight: 195,
  },
  {
    name: "nidoking",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
    weight: 620,
  },
  {
    name: "clefairy",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
    weight: 75,
  },
  {
    name: "clefable",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
    weight: 400,
  },
  {
    name: "vulpix",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
    weight: 99,
  },
  {
    name: "ninetales",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
    weight: 199,
  },
  {
    name: "jigglypuff",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    weight: 55,
  },
  {
    name: "wigglytuff",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
    weight: 120,
  },
  {
    name: "zubat",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
    weight: 75,
  },
  {
    name: "golbat",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
    weight: 550,
  },
  {
    name: "oddish",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
    weight: 54,
  },
  {
    name: "gloom",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
    weight: 86,
  },
  {
    name: "vileplume",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
    weight: 186,
  },
  {
    name: "paras",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
    weight: 54,
  },
  {
    name: "parasect",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
    weight: 295,
  },
  {
    name: "venonat",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
    weight: 300,
  },
  {
    name: "venomoth",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
    weight: 125,
  },
  {
    name: "diglett",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
    weight: 8,
  },
];

// HOW I GOT THE DATA USING API
// let pokemons = [];
// function fetchUrl() {
//   sendToPage("Fetching Data...");
//   fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
//     .then((r) => r.json())
//     .then((data) =>
//       data.results.forEach((pokeObj) => grabPokemon(pokeObj.url))
//     );
// }

// function grabPokemon(pokeUrl) {
//   fetch(pokeUrl)
//     .then((r) => r.json())
//     .then((pokemonData) => formatPokemonData(pokemonData));
// }

// function formatPokemonData(pokeData) {
//   const name = pokeData.name;
//   const imgUrl = pokeData.sprites.other["official-artwork"].front_default;
//   const weight = pokeData.weight;
//   pokemons.push({ name, imgUrl, weight });
// }

// fetchUrl();

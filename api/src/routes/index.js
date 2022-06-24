const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Type } = require("../db");
const axios = require("axios");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemons", async (req, res) => {
  let { name } = req.query;
  if (name) {
    try {
      let pokemon = {};
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then((response) => response.data)
        .then((response) => {
          pokemon = {
            id: response.id,
            name: response.name,
            hp: response.stats[0].base_stat,
            attack: response.stats[1].base_stat,
            defense: response.stats[2].base_stat,
            speed: response.stats[5].base_stat,
            height: response.height,
            weight: response.weight,
            image: response.sprites.other["official-artwork"].front_default,
            types: response.types.map((t) => t.type.name),
          };
        });
      res.send(pokemon);
    } catch (error) {
      res.send("Pokemon does not exist");
    }
  } else {
    try {
      let pokemons = [];
      for (let i = 0; i < 40; i++) {
        pokemons[i] = axios
          .get(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`)
          .then((response) => response.data)
          .then((response) => ({
            name: response.name,
            image: response.sprites.other["official-artwork"].front_default,
            types: response.types.map((t) => t.type.name),
          }));
      }
      await Promise.all(pokemons).then((response) => {
        res.send(response);
      });
    } catch (error) {
      res.send(error);
    }
  }
});
router.get("/pokemons/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let pokemon = {};
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => response.data)
      .then((response) => {
        pokemon = {
          id: response.id,
          name: response.name,
          hp: response.stats[0].base_stat,
          attack: response.stats[1].base_stat,
          defense: response.stats[2].base_stat,
          speed: response.stats[5].base_stat,
          height: response.height,
          weight: response.weight,
          image: response.sprites.other["official-artwork"].front_default,
          types: response.types.map((t) => t.type.name),
        };
      });
    res.send(pokemon);
  } catch (error) {
    res.send("ID must be a number");
  }
});
router.get("/types", async (req, res) => {
  await axios
    .get(`https://pokeapi.co/api/v2/type/`)
    .then((response) => response.data.results)
    .then(async (response) => {
      let types = response.map((e) => ({ type: e.name }));
      await Type.bulkCreate(types);
      res.send(types);
    });
});

// router.get("/sii/:type", async (req, res) => {
//   let { type } = req.params;
//   try {
//     let group = [];
//     await axios
//       .get(`https://pokeapi.co/api/v2/type`)
//       .then((response) => response.data.results)
//       .then(async (response) => {
//         let request = response.find((t) => t.name === type);
//         await axios
//           .get(request.url)
//           .then((response) => response.data.pokemon)
//           .then(async (response) => {
//             let promises = response.map((p, i) => {
//               if (i < 40) {
//                 return axios
//                   .get(p.pokemon.url)
//                   .then((response) => response.data)
//                   .then((response) => ({
//                     name: response.name,
//                     hp: response.stats[0].base_stat,
//                     attack: response.stats[1].base_stat,
//                     defense: response.stats[2].base_stat,
//                     speed: response.stats[5].base_stat,
//                     height: response.height,
//                     weight: response.weight,
//                     image:
//                       response.sprites.other["official-artwork"].front_default,
//                     types: response.types.map((t) => t.type.name),
//                   }));
//               }
//             });
//             await Promise.all(promises).then((response) => {
//               group = response.slice(0, 40);
//             });
//           });
//       });
//     res.send(group);
//   } catch (error) {
//     res.send(error);
//   }
// });

module.exports = router;

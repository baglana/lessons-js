const list = document.querySelector("ul");

async function fetchPokemons() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");

    if (!response.ok) {
      await Promise.reject(response.statusText);
    }

    const json = await response.json();
    return json.results;
  } catch (e) {
    console.error(e);
  }
}

function renderPokemons(pokemons) {
  const pokemonsNode = [];

  for (const pokemon of pokemons) {
    const li = document.createElement("li");
    li.append(pokemon.name);
    pokemonsNode.push(li);
  }

  list.replaceChildren(...pokemonsNode);
}

async function main() {
  try {
    const pokemons = await fetchPokemons();
    renderPokemons(pokemons);
  } catch (e) {
    console.error(e);
  }
}

main();

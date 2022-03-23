const listaSelecaoPokemons = document.querySelectorAll ('.pokemon')
const pokemonsCard = document.querySelectorAll ('.cartao-pokemon') 

listaSelecaoPokemons.forEach (pokemon => {
    
    pokemon.addEventListener ('click', () => {
        console.log (pokemon)
        
        const cartaoPokemonAberto = document.querySelector ('.aberto')
        cartaoPokemonAberto.classList.remove ('aberto')
        
        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idcartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById (idcartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add ('aberto')
        
        const pokemonAtivoNaListagem = document.querySelector ('.ativo')
        pokemonAtivoNaListagem.classList.remove ('ativo')
        
        const pokemonSelecionadoNaListagem = document.getElementById (idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add ('ativo')
    })
})
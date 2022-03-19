const listaSelecaoPokemons = document.querySelectorAll ('.pokemon') //seleciona todos os elementos que estão na lista de navegação
const pokemonsCard = document.querySelectorAll ('.cartao-pokemon') //seleciona todos os cartões dos pokemons

//aqui estamos criando uma função para a lista de navegação
listaSelecaoPokemons.forEach (pokemon => {
    //aqui estamos criando uma função para ficar escutando se um evento de click aconteceu, para assim executar a próxima função/ação
    pokemon.addEventListener ('click', () => {
        console.log (pokemon)
        //remover a classe aberto só do cartão que está selecionado na lista de navegação
        const cartaoPokemonAberto = document.querySelector ('.aberto')
        cartaoPokemonAberto.classList.remove ('aberto')

        //ao clicar em um pokémon da listagem, pegamos o id desse pokémon para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        //adicionando a classe aberto no pokemon que foi clicando na listagem
        const idcartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById (idcartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add ('aberto')

        //remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector ('.ativo')
        pokemonAtivoNaListagem.classList.remove ('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById (idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add ('ativo')
    })
})
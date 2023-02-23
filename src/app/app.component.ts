import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS
  pokemonSelected: Pokemon | undefined

  // A ne pas faire --> toujours garder vide et mettre la logique de construction dans le ngOnInit dédié
  // constructor() {
  //   this.pokemonList = []
  // }

  ngOnInit(): void {
    console.table(this.pokemonList)
  }

  selectPokemon(pokemonId: string): void {
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    if (pokemon) {
      console.log(`Vous avez cliqué le pokemon ${pokemon?.name}`)

    }
    else {
      console.log(`Vous avez demandé un pokemon qui n'existe pas`)
    }
    this.pokemonSelected = pokemon


  }
}

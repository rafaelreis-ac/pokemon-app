import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { CommonModule } from '@angular/common';
import { FilterBarComponent } from '../filter-bar/filter-bar.component'; // Certifique-se de que o caminho está correto
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component'; // Adicione esta linha
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  standalone: true,
  imports: [CommonModule,HttpClientModule ,FilterBarComponent, PokemonCardComponent], // Adicione FilterBarComponent e PokemonCardComponent aqui
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  searchTerm: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data) => {
      this.pokemons = data.results;
      this.filteredPokemons = this.pokemons;
    });
  }

  filterPokemons(search: string): void {
    this.filteredPokemons = this.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
  }
}
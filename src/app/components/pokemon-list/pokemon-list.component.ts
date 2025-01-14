import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, PokemonCardComponent],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  paginatedPokemons: Pokemon[] = [];
  searchTerm: string = '';
  sortOrder: string = 'asc';
  itemsPerPage: number = 5;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data) => {
      this.pokemons = data.results;
      this.filteredPokemons = this.pokemons;
      this.sortPokemons(); 
      this.updatePagination();
    });
  }

  onSearchChange(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.filterPokemons();
  }

  filterPokemons(): void {
    this.filteredPokemons = this.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.sortPokemons();
    this.updatePagination();
  }

  onSortOrderChange(event: Event): void {
    this.sortOrder = (event.target as HTMLSelectElement).value;
    this.sortPokemons();
    this.updatePagination();
  }

  onItemsPerPageChange(event: Event): void {
    this.itemsPerPage = parseInt((event.target as HTMLSelectElement).value, 10);
    this.adjustCurrentPage();
    this.updatePagination();
  }

  adjustCurrentPage(): void {
    this.totalPages = Math.ceil(this.filteredPokemons.length / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
    if (this.currentPage < 1) {
      this.currentPage = 1;
    }
  }

  sortPokemons(): void {
    this.filteredPokemons.sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredPokemons.length / this.itemsPerPage);
    this.paginatePokemons();
  }

  paginatePokemons(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedPokemons = this.filteredPokemons.slice(startIndex, endIndex);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginatePokemons();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginatePokemons();
    }
  }
}
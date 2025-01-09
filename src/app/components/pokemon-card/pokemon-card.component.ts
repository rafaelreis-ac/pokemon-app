import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule],
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
  pokemonDetails: any;
  showDetailsFlag: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  showDetails(): void {
    if (this.showDetailsFlag) {
      this.showDetailsFlag = false;
      this.pokemonDetails = null;
    } else {
      this.pokemonService.getPokemonDetails(this.pokemon.name).subscribe((details) => {
        this.pokemonDetails = details;
        this.showDetailsFlag = true;
      });
    }
  }

  getPokemonTypes(): string {
    return this.pokemonDetails.types.map((type: any) => type.type.name).join(', ');
  }
}
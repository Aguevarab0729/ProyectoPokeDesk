import { Component, OnInit } from '@angular/core';
import { DataPokemonService } from 'src/app/services/data-pokemon.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

/*   public obtenerDataPokemons: any

  constructor(private dataPokemonService: DataPokemonService){}
 */
  ngOnInit(): void {
    /* this.dataPokemonService.obtenerDataPokemons().subscribe(
      res => {
        this.obtenerDataPokemons = res.results
        console.log(this.obtenerDataPokemons)
        // console.log(res)
      }
    ) */
  }
}

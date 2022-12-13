import { Component, OnInit } from '@angular/core';
import { DataPokemonService } from 'src/app/services/data-pokemon.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  public obtenerDataPokemons: any
  public obtenerSetDataPokemon: any

  constructor(private dataPokemonService: DataPokemonService){}

  ngOnInit(): void {
    this.dataPokemonService.obtenerDataPokemons().subscribe(
      res => {
        this.obtenerSetDataPokemon = res.results
        this.obtenerDataPokemons = this.obtenerSetDataPokemon
        //console.log(this.obtenerDataPokemons)
        // console.log(res)
      },/*
      error => {
        this.apiError = true
      } */
    )
  }

  public searchPoke(value: any){
    const buscador = this.obtenerSetDataPokemon.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    })
    this.obtenerDataPokemons = buscador
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError,  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataPokemonService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

  constructor(private http: HttpClient) { }

  obtenerDataPokemons(): Observable <any>{
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {
          this.obtenerPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
        })
      }),
      catchError((err) => {
        return throwError(() => new Error(err))
      })
    )
  }

  public obtenerPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
      ),
      catchError((err) => {
        return throwError(() => new Error(err))
      })
  )}
}

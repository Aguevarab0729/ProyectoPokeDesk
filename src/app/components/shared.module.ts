import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//header, buscador y lista de pokemon
import { HeaderComponent } from './header/header/header.component';
import { SearchComponent } from './search/search.component';
import { CardsComponent } from './cards/cards.component';
import { SideNavComponent } from './nav/side-nav/side-nav.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SearchComponent,
        CardsComponent,
        SideNavComponent
    ],
    exports: [
        HeaderComponent,
        SearchComponent,
        CardsComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})

export class SharedModule {}

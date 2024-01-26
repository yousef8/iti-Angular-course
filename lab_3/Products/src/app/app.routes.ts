import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageUnderConstructionComponent } from './page-under-construction/page-under-construction.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: 'login',
        component: PageUnderConstructionComponent
    },
    {
        path: 'register',
        component: PageUnderConstructionComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

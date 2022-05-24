import { RouterModule, Routes } from '@angular/router';


import { administrarfacturasComponent } from './component/administrarfacturas/administrarfacturas.component';



import { LoginComponent } from './component/login/login.component';



const APP_ROUTES: Routes = [







    { path: 'administrarfacturas', component: administrarfacturasComponent },
    { path: 'administrarfacturas/:userName', component: administrarfacturasComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });

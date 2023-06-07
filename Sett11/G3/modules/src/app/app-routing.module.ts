import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
        import('./components/home/home/home.module').then((m) => m.HomeModule)
    },
    {
        path: 'users',
        loadChildren: () =>
        import('./components/users/users/users.module').then((m) => m.UsersModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}

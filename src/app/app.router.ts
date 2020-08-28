import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
    // {
    //     path: '',
    //     component: XComponent,
    //     data: { animation: 'routercore' },
    // },
    // { path: '**', component: Page404Component }
];
export const AppRouter = RouterModule.forRoot(appRoutes, {
    useHash: true,
    onSameUrlNavigation: "reload",
    scrollPositionRestoration: 'top'
});


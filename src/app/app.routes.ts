import {RouterModule,Route} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

const routes:Route[]=[
{path:"home",component:HomeComponent},
{path:"about",component:AboutComponent},
{path:"contact",component:ContactComponent}
]
export const RoutesProvider = RouterModule.forRoot(routes);
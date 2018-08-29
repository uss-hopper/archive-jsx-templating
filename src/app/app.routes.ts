//import needed @angularDependencies
import {RouterModule, Routes} from "@angular/router";


//import all needed components
import {HomeComponent} from "./home/home.component";


//import all needed Interceptors
import {APP_BASE_HREF} from "@angular/common";
import {DeepDiveInterceptor} from "./shared/interceptors/deep.dive.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";


import {SessionService} from "./shared/services/session.service";
import {PostService} from "./shared/services/post.service";
import {NavBarComponent} from "./shared/components/nav-bar/nav-bar.component";
import {PostsComponent} from "./posts/posts.component";


//an array of the components that will be passed off to the module
export const allAppComponents = [HomeComponent, NavBarComponent, PostsComponent];

//an array of routes that will be passed of to the module
export const routes: Routes = [
	{path: "posts", component: PostsComponent},
	{path: "", component: HomeComponent}

];

// an array of services

const services: any[] = [SessionService, PostService];

// an array of misc providers
const providers: any[] = [
	{provide: APP_BASE_HREF, useValue: window["_base_href"]},
	{provide: HTTP_INTERCEPTORS, useClass: DeepDiveInterceptor, multi: true}
];

export const appRoutingProviders: any[] = [providers, services];

export const routing = RouterModule.forRoot(routes);
//import needed @angularDependencies
import {RouterModule, Routes} from "@angular/router";

//import all needed Interceptors
import {APP_BASE_HREF} from "@angular/common";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {SessionService} from "./shared/services/session.service";
import {SplashComponent} from "./splash/splash.component";
import {DeepDiveInterceptor} from "./shared/interceptors/deep.dive.interceptor";
import {AboutUsComponent} from "./about-us/about-us.component";
import {PostsComponent} from "./posts/posts.component";
import {PostService} from "./shared/services/post.service";


//an array of the components that will be passed off to the module
export const allAppComponents = [SplashComponent, AboutUsComponent, PostsComponent];

//an array of routes that will be passed of to the module
export const routes: Routes = [
	{path: "about-us", component: AboutUsComponent },
	{path: "posts", component: PostsComponent},
	{path: "", component: SplashComponent}



];

// an array of services



export const appRoutingProviders: any[] = [
	SessionService,
	PostService,
	{provide: HTTP_INTERCEPTORS, useClass: DeepDiveInterceptor, multi: true}

];

export const routing = RouterModule.forRoot(routes);
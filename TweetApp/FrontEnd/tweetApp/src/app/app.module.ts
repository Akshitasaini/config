import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//components
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MediadetailComponent } from './components/mediadetail/mediadetail.component';
import { MyMediaComponent } from './components/my-media/my-media.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { RegisterComponent } from './components/register/register.component';
import { UploadMediaComponent } from './components/upload-media/upload-media.component';


//custom pipe
import { ReversePipe } from './reverse.pipe'

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailsComponent,
    HeaderComponent,
    LoginComponent,
    MediadetailComponent,
    MyMediaComponent,
    NewsFeedComponent,
    RegisterComponent,
    UploadMediaComponent,
   
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { FormsModule } from '@angular/forms';
import { PurchaseService } from './Services/purchase.service';

@NgModule({
    declarations: [AppComponent, MainComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
	//Other 2 services were injected another way
    providers: [PurchaseService],
    bootstrap: [AppComponent],
})
export class AppModule {}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CataloguePage } from './catalogue.page';
import { CataloguePageRoutingModule } from './catalogue-routing.module';
import { CatalogueService } from '../shared/services/catalogue.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CataloguePageRoutingModule,
    HttpClientModule,    
  ],
  declarations: [
    CataloguePage
  ],
  providers:[CatalogueService]
})
export class CataloguePageModule {}

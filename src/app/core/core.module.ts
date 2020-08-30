import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [BannerComponent],
    exports: [BannerComponent],
    imports: [CommonModule, RouterModule]
  })
  export class CoreModule {}
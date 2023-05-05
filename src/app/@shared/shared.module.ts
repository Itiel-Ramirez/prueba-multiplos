import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoaderComponent } from './loader/loader.component';
import { MultiplosComponent } from './multiplos/multiplos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [TranslateModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [LoaderComponent, MultiplosComponent],
  exports: [LoaderComponent, MultiplosComponent, FormsModule],
})
export class SharedModule {}

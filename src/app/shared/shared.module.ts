import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../base/base.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  exports: [CommonModule, BaseModule, FormsModule, LayoutModule, RouterModule, ReactiveFormsModule, HttpClientModule],
})
export class SharedModule {}

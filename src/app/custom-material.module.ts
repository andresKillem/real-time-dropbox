import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  imports: [MatFormFieldModule, MatIconModule, MatButtonModule, MatProgressBarModule, MatCardModule, MatGridListModule, MatDividerModule, MatProgressSpinnerModule, MatInputModule],
  exports: [MatFormFieldModule, MatIconModule, MatButtonModule, MatProgressBarModule, MatCardModule, MatGridListModule, MatDividerModule, MatProgressSpinnerModule, MatInputModule],
})
export class CustomMaterialModule { }

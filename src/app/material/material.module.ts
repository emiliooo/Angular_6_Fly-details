import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatCheckboxModule, MatSelectModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule, MatButtonModule, MatDialogModule, MatSnackBarModule } from '@angular/material';

const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule
];

@NgModule({
  exports: [
    ...MATERIAL_MODULES
  ],
  declarations: []
})
export class MaterialModule { }

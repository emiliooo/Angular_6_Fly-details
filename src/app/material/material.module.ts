import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatCheckboxModule, MatSelectModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule, MatButtonModule, MatDialogModule, MatSnackBarModule, MatDialogConfig, MAT_DIALOG_DEFAULT_OPTIONS, MatSnackBarConfig, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MAT_SNACK_BAR_GLOBAL_CONFIG: MatSnackBarConfig = {
  duration: 2500,
  verticalPosition: 'bottom',
  horizontalPosition: 'center'
};

const MAT_DIALOG_GLOBAL_CONFIG: MatDialogConfig = {
  width: '700px',
  disableClose: true,
  hasBackdrop: true
};

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
  MatToolbarModule,
  BrowserAnimationsModule
];

@NgModule({
  exports: [
    ...MATERIAL_MODULES
  ],
  declarations: [],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: MAT_DIALOG_GLOBAL_CONFIG },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACK_BAR_GLOBAL_CONFIG }
  ]
})
export class MaterialModule { }

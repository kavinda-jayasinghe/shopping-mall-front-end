import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MockAuthService } from 'src/app/service/mock-auth.service';

@Component({
  selector: 'app-login-register-dialog',
  templateUrl: './login-register-dialog.component.html',
  styleUrls: ['./login-register-dialog.component.css']
})
export class LoginRegisterDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LoginRegisterDialogComponent>,
    private authService: MockAuthService,
    private router: Router
  ) { }

  login(username: string, password: string): void {
    this.authService.login(username, password).subscribe((response) => {
      if (response.success) {
        // If login successful, set isLoggedIn to true, close the dialog, and navigate to the dashboard
        this.authService.setLoggedIn(true);
        this.dialogRef.close();
        this.router.navigate(['/dashboard']);
      } else {
        // Handle login failure
        alert('Login failed. Please try again.');
      }
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

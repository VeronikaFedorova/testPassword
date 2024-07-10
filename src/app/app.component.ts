import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div class="password-field">
      <input
        type="password"
        [(ngModel)]="password"
        (ngModelChange)="checkPasswordStrength()"
      />
      <div class="strength-indicator">
        <div [style.background-color]="strengthColors[0]"></div>
        <div [style.background-color]="strengthColors[1]"></div>
        <div [style.background-color]="strengthColors[2]"></div>
      </div>
    </div>
  `,
  styles: [
    `
      .password-field {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 20vw;
      }
      .strength-indicator {
        display: flex;
        justify-content: space-between;
      }
      .strength-indicator div {
        width: 33.33%;
        height: 20px;
        border-radius: 10px;
      }
    `,
  ],
  imports: [FormsModule],
  standalone: true,
})
export class PasswordComponent {
  password = '';
  strengthColors = ['gray', 'gray', 'gray'];

  checkPasswordStrength() {
    const password = this.password;
    let hasLetters = password.match(/[a-zA-Z]/);
    let hasDigits = password.match(/\d/);
    let hasSymbols = password.match(/[^a-zA-Z0-9]/);

    if (password.length === 0) {
      this.strengthColors = ['gray', 'gray', 'gray'];
      return;
    }
    if (password.length < 8) {
      this.strengthColors = ['red', 'red', 'red'];
      return;
    }

    hasLetters = password.match(/[a-zA-Z]/);
    hasDigits = password.match(/\d/);
    hasSymbols = password.match(/[^a-zA-Z0-9]/);

    if (hasLetters && hasDigits && hasSymbols) {
      this.strengthColors = ['green', 'green', 'green'];
    } else if (
      (hasLetters && hasSymbols) ||
      (hasLetters && hasDigits) ||
      (hasDigits && hasSymbols)
    ) {
      this.strengthColors = ['yellow', 'yellow', 'gray'];
    } else if (hasLetters || hasDigits || hasSymbols) {
      this.strengthColors = ['red', 'gray', 'gray'];
    } else {
      this.strengthColors = ['gray', 'gray', 'gray'];
    }
  }
}

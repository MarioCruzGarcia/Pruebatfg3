import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <div class="modal">
      <div class="modal-content">
        <p>¿Desea recibir un correo electrónico de confirmación para este evento?</p>
        <div class="modal-actions">
          <button (click)="confirm.emit(true)">Sí</button>
          <button (click)="confirm.emit(false)">No</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .modal-content {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
    }

    .modal-actions {
      margin-top: 10px;
      text-align: right;
    }
  `]
})
export class ConfirmDialogComponent {
  @Output() confirm = new EventEmitter<boolean>();
}

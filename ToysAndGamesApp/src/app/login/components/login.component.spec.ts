import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../AuthService';
import { By } from '@angular/platform-browser';
import { User } from '../models/User';

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [
        LoginComponent
      ],
      providers: [
        AuthService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ToysAndGamesApp'`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Login');
  });


  it('should return invalid form', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const email = app.userForm?.controls['name']
    email?.setValue('o.liraduran@gmail.com')


    expect(app.userForm?.invalid).toBeTrue();
  });

  it('should return invalid form submit',  () => {

    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const name = app.userForm?.controls['name']
    name?.setValue('admin')

    const pass = app.userForm?.controls['password']
    pass?.setValue('admin')

    app.logIn();
    expect(app.authRes).toBeTrue();
  });

});

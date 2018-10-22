import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { StorageService } from '../services/Storage_Service';
import { UISercice } from '../services/UIService';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../services/app-data.service';
import { LoginPage } from '../login/login';
import { PagePage } from '../page/page';

/**
 * Generated class for the SavePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-save-password',
  templateUrl: 'save-password.html',
})
export class SavePasswordPage implements OnInit {
  ShowIf: any;
  ngOnInit() {
    this.ShowIf = this.navParams.get('ischangePassword');
  }
  TenantId: string;
  SavePasswordForm: FormGroup;
  passwordMessage: string;
  confirmpasswordMessage: string;
  isResendOTP: boolean;
  ChangePasswordForm: FormGroup;
  oldPasswordMessage: string;

  constructor(private storageService: StorageService, private alertCtrl: AlertController, private uiService: UISercice, private toastrService: ToastrService, public navParams: NavParams, public loadingController: LoadingController, private fb: FormBuilder, public navCtrl: NavController, private registerService: RegisterService) {
    this.TenantId = this.navParams.get('TenantId');
    this.SavePasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
      confirmpwd: ['', [Validators.required]]
    }, { validator: this.matchingPasswords });//builds the formgroup with same formcontrolname.

    const passwordControl = this.SavePasswordForm.get('password');
    passwordControl.valueChanges.subscribe(value => this.setErrorMessageForPasswordField(passwordControl));//call the particular method if value changes in the control.

    const confirmpasswordControl = this.SavePasswordForm.get('confirmpwd');
    confirmpasswordControl.valueChanges.subscribe(value => this.setErrorMessageForPasswordField(confirmpasswordControl));//call the particular method if value changes in the control.


    this.ChangePasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmNewpwd: ['', [Validators.required, Validators.minLength(4)]]
    }, { validator: this.matchingPasswordsForCP });//builds the formgroup with same formcontrolname.

    const oldPasswordControl = this.ChangePasswordForm.get('oldPassword');
    oldPasswordControl.valueChanges.subscribe(value => this.setErrorMessageForChangePasswordForm(oldPasswordControl));

    const passwordControl_CP = this.ChangePasswordForm.get('newPassword');
    passwordControl_CP.valueChanges.subscribe(value => this.setErrorMessageForChangePasswordForm(passwordControl_CP));

    const confirmpasswordControl_CP = this.ChangePasswordForm.get('confirmNewpwd');
    confirmpasswordControl_CP.valueChanges.subscribe(value => this.setErrorMessageForChangePasswordForm(confirmpasswordControl_CP));

  }
  setErrorMessageForPasswordField(c: AbstractControl): void {
    this.passwordMessage = '';  //To not display the error message, if there is no error.
    this.confirmpasswordMessage = ''; //To not display the error message, if there is no error.
    let control = this.uiService.getControlName(c);  //gives the control name property from particular service.
    if ((c.touched || c.dirty) && c.errors) {
      if (control === 'password') {
        this.passwordMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
        //maps the error message from validationMessages array.
      }
      else if (control === 'confirmpwd') {
        this.confirmpasswordMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
        //maps the error message from validationMessages array.
      }
    }
  }

  setErrorMessageForChangePasswordForm(c: AbstractControl): void {
    this.oldPasswordMessage = '';
    this.passwordMessage = '';
    this.confirmpasswordMessage = '';
    let control = this.uiService.getControlName(c);
    if ((c.touched || c.dirty) && c.errors) {
      if (control === 'oldPassword') {
        this.oldPasswordMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      }
      else if (control === 'newPassword') {
        this.passwordMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      }
      else if (control === 'confirmNewpwd') {
        this.confirmpasswordMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
      }
    }
  }
  private validationMessages = { //used in above method.
    oldPassword_required: '*Please Enter Old Password',
    oldPassword_minlength: 'Mobile Number cannot be less than 4 characters',

    password_required: 'Please enter password',
    password_minlength: 'Enter minimum 8 digits',
    password_pattern: 'Password should contain at least 8 Characters in length, At least One Uppercase, One Number and One Special character',

    confirmpwd_required: 'Please Re-Enter password',
    confirmpwd_minlength: 'This field should match with Password',
    confirmpwd_invalid: 'Password doesnot match'
  };
  matchingPasswords(group: FormGroup) { // here we have the 'passwords' group
    let password = group.controls.password.value;
    let confirmpwd = group.controls.confirmpwd.value;
    if (!password || !confirmpwd) {
      return null;
    }
    return password === confirmpwd ? null : { notSame: true }
  }
  matchingPasswordsForCP(group: FormGroup) { // here we have the 'passwords' group
    let password = group.controls.newPassword.value;
    let confirmpwd = group.controls.confirmNewpwd.value;
    if (!password || !confirmpwd) {
      return null;
    }
    return password === confirmpwd ? null : { notSame: true }
  }

  OnSavePassword() {  //Fires, if we click on SavePasswordForm Submit button.
    if (this.TenantId != null) {
      var userPost = {
        TenantId: this.TenantId,  //ActiveTenantId
        //TenantId: this.navParams.get('TenantId'), 
        Password: this.SavePasswordForm.controls['confirmpwd'].value,
        UniqueId: this.guid(),
        MobileNo: this.registerService.MobileNo
      }
    }
    else {
      var userPost = {
        TenantId: this.registerService.TenantId,  //ActiveTenantId
        Password: this.SavePasswordForm.controls['confirmpwd'].value,
        UniqueId: this.guid(),
        MobileNo: this.registerService.MobileNo
      }
    }
    let loading = this.loadingController.create({
      content: 'Please wait while registering the Password......'
    });
    loading.present();

    this.registerService.CreateUser(userPost).subscribe((data: any) => {
      if (this.TenantId != null) {
        var user = {
          ActiveTenantId: this.TenantId,
          UserId: data.UserId,
          UserName: data.UserName,
          UniqueKey: data.UniqueKey
        }
      }
      else {
        var user = {
          ActiveTenantId: this.registerService.TenantId,
          UserId: data.UserId,
          UserName: data.UserName,
          UniqueKey: data.UniqueKey
        }
      }

      this.storageService.SetUser(JSON.stringify(user));
      //Saves the User table in localstorage.
      this.navCtrl.push(LoginPage);
      //this.navCtrl.setRoot(PagePage);
      loading.dismiss();

    }, (error) => {
      this.toastrService.error(error, 'Error!');
      var alert = this.alertCtrl.create({
        title: "Error Message",
        subTitle: error,
        buttons: ['OK']
      });
      alert.present();
      loading.dismiss();
    });

  }


  OnChangePassword() {  //Fires, if we click on ChangePasswordForm Submit button.
    var changePassword = {
      UserName: this.storageService.GetUser().UserName,
      Old: this.ChangePasswordForm.get('oldPassword').value,
      New: this.ChangePasswordForm.get('confirmNewpwd').value
    }
    let loading = this.loadingController.create({
      content: 'Please wait while we Change Password....'
    });
    loading.present();

    this.registerService.ChangePassword(changePassword).subscribe((data: any) => {
      if (data.IsValid == false) {
        this.toastrService.error('SOME ERROR', 'Error!');
      }
      else {
        this.toastrService.success('Please login with the New Password', 'Success!');
        var alert = this.alertCtrl.create({
          title: "Message",
          subTitle: "Please login with the New Password",
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(LoginPage);
      }
      loading.dismiss();
    }, (error) => {
            if (error == '401') {
              this.registerService.SetRefreshTokenNeeded();
              this.registerService.GetToken(localStorage.getItem('refreshToken')).subscribe((data: any) => {
                  localStorage.setItem('refreshToken',data.RefreshToken);
                  this.registerService.SetToken(data.AccessToken);
                  this.registerService.SetRefreshTokenNeeded();
                  this.registerService.ChangePassword(changePassword).subscribe((data: any) => {
                    console.clear();
                    if (data.IsValid == false) {
                      this.toastrService.error('SOME ERROR', 'Error!');
                    }
                    else {
                      this.toastrService.success('Please login with the New Password', 'Success!');
                      var alert = this.alertCtrl.create({
                        title: "Message",
                        subTitle: "Please login with the New Password",
                        buttons: ['OK']
                      });
                      alert.present();
                      this.navCtrl.push(LoginPage);
                    }
                      loading.dismiss(); 
                  });
              });
          }
          else {
              this.toastrService.error(error, 'Error!');
              var alert = this.alertCtrl.create({
                  title: "Error Message",
                  subTitle: error,
                  buttons: ['OK']
              });
              alert.present();     //To show alert message  
              loading.dismiss();    //To close loading panel
          }
    });

  }
  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavePasswordPage');
  }

}

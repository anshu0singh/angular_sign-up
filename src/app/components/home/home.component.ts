import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  user$ =this.authService.currentUser$;
  quiztitle: any;
  quizDescription: any;
  coverPicture!: File;

  constructor(private authService :AuthenticationService){}

  ngOnInit(): void {
    
  }

  onFileSelected(event: any) {
    this.coverPicture = event.target.files[0];}

    selectPicture() {}
  submitForm() {
    if (this.quiztitle && this.quizDescription && this.coverPicture) {
      // Here, you can perform any necessary actions with the submitted data, such as sending it to an API or processing it further.
      console.log('Quiz Title:', this.quiztitle);
      console.log('Quiz Description:', this.quizDescription);
      console.log('Cover Picture:', this.coverPicture);
    } else {
      console.log('Please fill in all the required fields.');
    }
  }
}

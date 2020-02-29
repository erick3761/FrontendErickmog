import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ingresarimg',
  templateUrl: './ingresarimg.component.html',
  styleUrls: ['./ingresarimg.component.css']
})
export class IngresarimgComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private httpClient: HttpClient) { }

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }


  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8585/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Imagen cargada correctamente';
          alert("subido");
        } else {
          this.message = 'Error imagen';
          alert("Error subir");
        }
      }
      );


  }

  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    console.log("ENTRANDO FRONT PATH");
    this.httpClient.get('http://localhost:8585/image/get/' + this.imageName)
      .subscribe(
        res => {

          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.pic;
          console.log("RECUPERANDO FRONT PATH" + this.base64Data);
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
}

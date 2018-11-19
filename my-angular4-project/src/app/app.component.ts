import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import  'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Project !';
  private apiURL = "http://localhost:8080/login/hello";
  data : any = {};

private headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Credentials': true 
});
  constructor(private http : Http){
  	console.log("Hey this is http service call");
  	this.showData();
  	this.getData();
  }

 getData(){
 	return this.http.get(this.apiURL,{headers: this.headers})
 	.map((res: Response) => res.json())
 }

showData(){
	this.getData().subscribe(rdata =>{
		console.log(rdata);
		this.data = rdata;
	})
}

}

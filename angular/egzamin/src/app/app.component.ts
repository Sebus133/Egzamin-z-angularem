import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
      
  }

  title = 'egzamin';
  nazwa_kursow = ["programowanie w c#", "Angular dla początkujących","kurs django"];
  liczba_kursow = this.nazwa_kursow.length;
   imie_nazwisko:string="";
   kurs:number=1;
   wybrany_kurs:string="";

submit(){
  if(this.kurs==1){
    this.wybrany_kurs=this.nazwa_kursow[0]
    console.log(this.imie_nazwisko);
    console.log(this.wybrany_kurs);
  }
  else if(this.kurs==2){
    this.wybrany_kurs=this.nazwa_kursow[1]
    console.log(this.imie_nazwisko);
    console.log(this.wybrany_kurs);
  }
  else if(this.kurs==3){
    this.wybrany_kurs=this.nazwa_kursow[2]
    console.log(this.imie_nazwisko);
    console.log(this.wybrany_kurs);
  }
  else{
    console.log("Nieprawidłowy numer kursu");
  }


}

}

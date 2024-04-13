import { Component } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(private servicio:UsersService){}
  id:string=""
        pass:string=""
        rol:string=""

        usuario:any
        guardarJSON(){
          const temp={
            id:this.id,
            pass:this.pass,
            rol:this.rol
          }
          this.limpiar()
          return temp;
        }
        limpiar(){
          this.id=""
          this.pass=""
          this.rol=""

        }

  ngOnInit(){
    this.servicio.getUsers().subscribe(u=>{
      this.usuario=u
    })
    localStorage.setItem("acceso","F")
  }
  login(datos:any){
    console.log(datos.value)
    for(let i=0;1<this.usuario.length;i++){
      let tempFormulario=JSON.stringify(datos.value)
      let tempUser=JSON.stringify(this.usuario[i])
      console.log(tempUser)
        if(tempFormulario==tempUser){
          console.log("usuario encontrado")
          if(tempUser.includes("admin")){
            localStorage.setItem("acceso","TA")
          }else{
            localStorage.setItem("acceso","TI")
          }
                   
          break;
        }
      
    }
  }

}

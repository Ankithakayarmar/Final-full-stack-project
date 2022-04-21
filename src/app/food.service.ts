import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  group(arg0: { mob: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors | null)[])[]; }): import("@angular/forms").FormGroup {
    throw new Error('Method not implemented.');
  }
 

  constructor(private http:HttpClient) { }
  link = 'http://localhost:9000';

  public addservice(adduserdata)
  {
    return this.http.post(this.link+'/add',adduserdata);
  }
  public insertservice(adduserdata)
  {
    return this.http.post(this.link+'/add',adduserdata);
  }
  public cartservice(adduserdata)
  {
    return this.http.post(this.link+'/add',adduserdata);
    
  }
  public confirmservice(adduserdata)
  {
    return this.http.post(this.link+'/add',adduserdata);
    
  }
  public deleteservice(deletedata)
  {
    return this.http.post(this.link+'/delete',deletedata);
    
  }
  public fetchservice()
  {
  return this.http.get(this.link+'/fetch');
  }
  public updateservice(update)
  {
  return this.http.post(this.link+'/update',update);
  }
}

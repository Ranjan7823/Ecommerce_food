import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EndPointService } from './end-point';


@Injectable({
    providedIn:'root'
})

export class CoreService {
  
    constructor(private http:HttpClient ){

    }

    getAllCategory(): Observable<any> {
        return this.http.get(EndPointService.GetAllFoodCategory);
    }
}

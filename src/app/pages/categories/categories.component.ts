import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core-service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private service: CoreService){}
  categoryList:any=[];
  ngOnInit(): void {
    this.getAllCategoryItem();
  }
  getAllCategoryItem(){
    this.service.getAllCategory().subscribe((res)=>{
      if(res){
        this.categoryList = res.data;
      }  
    })
  }

}

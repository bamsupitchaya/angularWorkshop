import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() selectedProduct: any;
  xxx:any;
  pId: "";
  pName: "";
  pCost: ""; 

  constructor() { }

  
  pushProduct(){
    // xxx คือ เก็บค่า selectedProduct มาเก็บไว้ใน xxx
    this.xxx =this.selectedProduct;
  }
  ngOnInit() {
  }
}

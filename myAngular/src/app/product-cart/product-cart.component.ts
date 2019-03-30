import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  cartList: any=[];
  _pushProduct : any;
  
  //ค่าที่ได้รับเข้ามาจะทำที่ get แล้วจะ return ที่ได้รับ
  get addproduct(): any{
    return this._pushProduct;
  }

  @Input()
  //ถ้ามีการเปลี่ยนแปลงจะมาทำที่ set
  set addproduct(val: any){
    if(val){
      let _index = -1
      this.cartList.forEach((object,index) => {
        if(object.pId  == val.pId){
          _index = index ;
        }
      });
      if (_index > -1){
        this.cartList[_index].qty = Number(this.cartList)[_index].qty+Number(val.qty);
      }else{
        this.cartList.push(JSON.parse(JSON.stringify(val)));
      }
   
  }
  } 

  constructor() { }

  ngOnInit() {
  }

}

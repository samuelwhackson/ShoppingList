import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-component',
  templateUrl: './shopping-list-component.component.html',
  styleUrls: ['./shopping-list-component.component.css']
})
export class ShoppingListComponentComponent implements OnInit {

  list1 = [
  {ItemID:1, ItemName:'Milk', ListID:0, HighPriority:false, Index:0},
  {ItemID:2, ItemName:'Eggs', ListID:1, HighPriority:false, Index:1},
  {ItemID:3, ItemName:'Sugar', ListID:2, HighPriority:false, Index:2},
  {ItemID:4, ItemName:'Water', ListID:3, HighPriority:false, Index:3},
  {ItemID:5, ItemName:'Sausage', ListID:4, HighPriority:false, Index:4},
  {ItemID:7, ItemName:'Coffee', ListID:6, HighPriority:false, Index:6}

  ];

  list2 = [

  ];


  public toggleSelected(item, list) {


      this.list1.forEach(loopItem => {
          if(loopItem != item){
                loopItem.selected = false;
          }else{
            if(loopItem.selected == false){
                  loopItem.selected = true;
            }else{
                  loopItem.selected = false;
            }
          }
      });

      this.list2.forEach(loopItem => {
          if(loopItem != item){
                loopItem.selected = false;
          }else{
            if(loopItem.selected == false){
                  loopItem.selected = true;
            }else{
                  loopItem.selected = false;
            }
          }
      });



  }

  public  async moveSelected(direction){

    switch (direction) {
      case 'left':
            this.list1.forEach(loopItem => {

                if(loopItem.selected){

                    this.list2.push(loopItem);
                    loopItem.selected =false;
                    this.list1 = this.list1.filter(obj => obj !== loopItem);

                }

          });
        break;

        case 'right':
        this.list2.forEach(loopItem => {

            if(loopItem.selected){

                this.list1.push(loopItem);
                loopItem.selected =false;
                this.list2 = this.list2.filter(obj => obj !== loopItem);

            }

      });

        break;

        case 'up':

        for(let i =0; i<this.list1.length; i++){

          if(this.list1[i].selected==true && i>0 ){
              this.list1.splice(i-1, 2, this.list1[i],this.list1[i-1]);
          }
        }

        for(let i =0; i<this.list2.length; i++){
          if(this.list2[i].selected==true && i>0 ){
              this.list2.splice(i-1, 2, this.list2[i],this.list2[i-1]);
          }
        }

        break;

        case 'down':

        for(let i =0; i<this.list1.length; i++){

          if(this.list1[i].selected==true && i<this.list1.length-1 ){

              this.list1.splice(i, 2, this.list1[i+1],this.list1[i]);
              i= this.list1.length;
          }
        }

        for(let i =0; i<this.list2.length; i++){

          if(this.list2[i].selected==true && i<this.list2.length-1 ){
              this.list2.splice(i, 2, this.list2[i+1],this.list2[i]);
                  i= this.list1.length;
          }
        }

          break;

      default:
        break;
    }


  }


  public arraymove(arr, fromIndex, toIndex) {

    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }

  constructor() { }

  ngOnInit() {
  }




  }

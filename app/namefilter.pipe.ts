import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namefilterpipe'
})
export class namefilterpipe implements PipeTransform {
  transform(phoneList: Array<any>, searchValue: string){
    if (!searchValue) {
      return phoneList;
    }
    else{
      return phoneList.filter(x=>x.lname.toLowerCase().startsWith(searchValue.toLowerCase()));
    }
  }

}
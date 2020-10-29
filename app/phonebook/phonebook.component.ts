import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class ContactsComponent implements OnInit {

  contactlist:any[]=[{FirstName:"Harry",LastName:"potter",PhoneNumber:"(953-888-9998)"},
  {FirstName:"Pills",LastName:"Paul",PhoneNumber:"(973-891-7968)"},
  {FirstName:"Kelvin",LastName:"John",PhoneNumber:"(913-188-4928)"},
  {FirstName:"Noel",LastName:"Jonty",PhoneNumber:"(912-178-9921)"},
  {FirstName:"Daisy",LastName:"Darwin",PhoneNumber:"(912-178-9921)"}
];

getcontactinfo:any={};
public searchText:any;
Message;

  constructor() { }
 
  addcontact(){
   
        this.contactlist.push(this.getcontactinfo);
        this.getcontactinfo={};
        alert("Contact Added Successfully")
        
  }
  deletecontact(fn){
    for(let i=0;i<this.contactlist.length;i++){
      if(fn == this.contactlist[i].FirstName)
      {

       this.contactlist.splice(fn,1);
      }
  else
  {
    alert("Contact Not Deleted")
  }
}
}
  indexvalue;
  editcontact(fn){
    for(let i=0;i<this.contactlist.length;i++){
      if(fn == this.contactlist[i].FirstName){
        this.getcontactinfo.FirstName=this.contactlist[i].FirstName;
    this.getcontactinfo.LastName=this.contactlist[i].LastName;
    this.getcontactinfo.PhoneNumber=this.contactlist[i].PhoneNumber;
    this.indexvalue=fn;

      }
      else{
        this.Message="Not Editable";
      }
    }    

  }
updatecontact(){
  let fn = this.indexvalue;
  for(let i=0;i<this.contactlist.length;i++)
  {
    if(fn==this.contactlist[i].FirstName)
    {
      this.contactlist[i] = this.getcontactinfo;
      this.getcontactinfo={};
      this.Message="Contact Updated Successfully";
    }
    else{
      this.Message="Cannot Be Updated";

    }
  }

}

  ngOnInit():void{
  }

}
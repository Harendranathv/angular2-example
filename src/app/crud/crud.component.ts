import { Component, OnInit } from '@angular/core';

declare var backand:any;

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {


	name:string = 'World';
    description:string = 'Wonderful';
    public items:any[] = [];
    searchQuery: string;

    constructor() {   
        this.searchQuery = '';
        let that = this;
        backand.socket.on("items_updated", 
            (data: any) => {
                    console.log("items_updated", data);
                    let a = data as any[];
                    let newItem = {};
                    a.forEach((kv)=> newItem[kv.Key] = kv.Value);
                    that.items.unshift(newItem);
            }
        );
    }

    public postItem() {
        let item = {
            name: this.name, 
            description: this.description
        };

        backand.service.create('todo', item)
            .then((data: any) => {
                // add to beginning of array
                this.items.unshift({ id: null, name: this.name, description: this.description });
                console.log(this.items);
                this.name = '';
                this.description = '';
            },
            (err: any) => {
                console.log(err);
            }
        );
    }

    public getItems() {
       backand.service.getList('todo')
            .then((data: any) => {
                console.log(data);
                this.items = data.data.data;
            },
            (err: any) => { 
                console.log(err);
                this.items = [{ name: 'yoram', 'description': 'sssss' }];
            }      
        );
    }

    public filterItems() {
        // set q to the value of the searchbar
        var q = this.searchQuery;

        // if the value is an empty string don't filter the items
        if (!q || q.trim() == '') {
          return;
        }
        else{
            q = q.trim();
        }

       
        let params = {
            filter: [
                backand.helpers.filter.create('name', backand.helpers.filter.operators.text.contains, q),
            ],
        }

        backand.service.getList('todo', params)
            .then((data: any) => {         
                console.log(data);
                this.items = data.data.data;
            },
            (err: any) => {
                console.log(err)
            }
        );
    }

}


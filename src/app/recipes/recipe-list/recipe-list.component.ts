import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
@Output() recipes:Recipe[]=[
  new Recipe('Spaghetti','Yummy spaghetti!!','https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2018%2F12%2F39ee03d747ff0e93c946bdaaf07320e7679f0287.jpeg')
]
  constructor() { }

  ngOnInit() {
  }
onRecipeSelected(recipe:Recipe){
  this.recipeWasSelected.emit(recipe)
}
}

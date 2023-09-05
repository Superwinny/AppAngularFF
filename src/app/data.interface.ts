export interface RestoInterface{
  title: string;
  data: RestoCategoryInterface[]
}

export interface RestoCategoryInterface{
  title:string;
  uuid:string;
  recipe: RecipeInterface[];
}

export interface RecipeInterface{
  description: string;
  imageUrl:string;
  price: number;
  title: string;
  uuid: string;
}

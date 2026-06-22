
// use local products.json file from public folder
//note: minor changes to the products.json file might not be reflected.
// in production this can be fixed by adding a version query parameter to the url, e.g. products.json?v=1.0.0
// the version number can be incremented whenever the products.json file is updated, ensuring that the latest version is fetched and cached properly by the browser.
export const productsjsonurl = `${import.meta.env.BASE_URL}products.json?v=1.0.1`;

export interface Product {
  id: string;
  name: string;
  categoryName: string;
  subcategoryName: string;
  price: number;
  image: string;
  imageBase?: string;
  description: string;
  details: string;
  available: number;
}

export interface Subcategory {
  id: number;
  name: string;
  title: string;
  sortOrder?: number;
}

export interface Category {
  id: number;
  name: string;
  title: string;
  sortOrder?: number;
  subcategories: Subcategory[];
}

export function fetchCategories(): Promise<Category[]> {
  return fetch(productsjsonurl)
    .then(response => response.json())
    .then(data => data.categories);
}

export function fetchSubCategories(categoryId: number): Promise<Subcategory[]> {
  return fetchCategories()
    .then(categories => {
      const category = categories.find(cat => cat.id === categoryId);
      return category ? category.subcategories : [];
    });
}

export function fetchProducts(): Promise<Product[]> {
  return fetch(productsjsonurl)
    .then(response => response.json())
    .then(data => data.products);
}

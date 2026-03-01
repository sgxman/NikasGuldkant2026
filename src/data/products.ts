
export const productsjsonurl = 'https://dl.dropboxusercontent.com/scl/fi/ax4a6m4xe7hrd712ryjvf/products.json?rlkey=yrxltr6e7nle9p8dpilesks85';

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
}

export interface Category {
  id: number;
  name: string;
  title: string;
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

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPrecentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: Array<string>
    createdAt: string;
}

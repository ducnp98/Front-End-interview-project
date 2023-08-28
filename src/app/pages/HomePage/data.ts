import FurnitureImage from "../../assets/images/furniture.jpg";
import HandBagImage from "../../assets/images/bag.webp";
import ShowImage from "../../assets/images/shoe.jpeg";
import IphoneImage from "../../assets/images/iphone.jpeg";
import BookImage from "../../assets/images/book.avif";
import TravelImage from "../../assets/images/travel.jpeg";

import HarryImage from "../../assets/images/harrypotter.webp";
import NikeShoeImage from "../../assets/images/nike.jpeg";
import IpadImage from "../../assets/images/ipad.webp";
import FujiCameraImage from "../../assets/images/fuji.webp";

import AppleImage from "../../assets/images/brands/apple.png";
import SamsungImage from "../../assets/images/brands/samsung.jpeg";
import LgImage from "../../assets/images/brands/lg.jpeg";
import NokiaImage from "../../assets/images/brands/nokia.png";
import NikeImage from "../../assets/images/brands/nike.png";
import AdidasImage from "../../assets/images/brands/adidas.jpeg";
import ConverseImage from "../../assets/images/brands/converse.jpeg";
import PanasonicImage from "../../assets/images/brands/panasonic.jpeg";
import { Colors } from "../../utils/theme";

type Category = {
  id: number;
  title: string;
  image: string;
};

export const TopCatagoriesData: Category[] = [
  {
    id: 1,
    title: "Furniture",
    image: FurnitureImage,
  },
  {
    id: 2,
    title: "Hand bag",
    image: HandBagImage,
  },
  {
    id: 3,
    title: "Books",
    image: BookImage,
  },
  {
    id: 4,
    title: "Techs",
    image: IphoneImage,
  },
  {
    id: 5,
    title: "Sneaker",
    image: ShowImage,
  },
  {
    id: 6,
    title: "Travel",
    image: TravelImage,
  },
];

export type Product = {
  id: number;
  title: string;
  ratingStar: string;
  comments: number;
  description: string;
  image: string;
};

export const ProductList: Product[] = [
  {
    id: 1,
    title: "Harry Potter",
    description: "Harry Potter",
    ratingStar: "4.9",
    comments: 53245,
    image: HarryImage,
  },
  {
    id: 2,
    title: "Ipad Pro 2020",
    description: "Ipad Pro 2020",
    ratingStar: "4.4",
    comments: 45,
    image: IpadImage,
  },
  {
    id: 3,
    title: "Nike Air Mornach",
    description: "Nike Air Mornach",
    ratingStar: "5.0",
    comments: 1324,
    image: NikeShoeImage,
  },
  {
    id: 4,
    title: "Fuji Camera",
    description: "Fuji Camera",
    ratingStar: "4.9",
    comments: 63234,
    image: FujiCameraImage,
  },
  {
    id: 5,
    title: "Harry Potter",
    description: "Harry Potter",
    ratingStar: "4.9",
    comments: 53245,
    image: HarryImage,
  },
  {
    id: 6,
    title: "Ipad Pro 2020",
    description: "Ipad Pro 2020",
    ratingStar: "4.4",
    comments: 45,
    image: IpadImage,
  },
  {
    id: 7,
    title: "Nike Air Mornach",
    description: "Nike Air Mornach",
    ratingStar: "5.0",
    comments: 1324,
    image: NikeShoeImage,
  },
  {
    id: 8,
    title: "Fuji Camera",
    description: "Fuji Camera",
    ratingStar: "4.9",
    comments: 63234,
    image: FujiCameraImage,
  },
];

type Brand = {
  id: number;
  title: string;
  image: string;
};

export const BrandList: Brand[] = [
  { id: 1, title: "Apple", image: AppleImage },
  { id: 2, title: "Samsung", image: SamsungImage },
  { id: 3, title: "LG", image: LgImage },
  { id: 4, title: "Panasonic", image: PanasonicImage },
  { id: 5, title: "Nokia", image: NokiaImage },
  { id: 6, title: "Nike", image: NikeImage },
  { id: 7, title: "Adidas", image: AdidasImage },
  { id: 8, title: "Converse", image: ConverseImage },
];

type SaleOffProduct = {
  id: number;
  title: string;
  save: number;
  color: string;
  image: string;
};

export const SaleOffProductList: SaleOffProduct[] = [
  {
    id: 1,
    title: "Save your money up to 70%",
    save: 70,
    color: Colors.yellowPastel,
    image: FurnitureImage,
  },
  {
    id: 2,
    title: "Save your money up to 40%",
    save: 40,
    color: Colors.pinkPastel,
    image: BookImage,
  },
  {
    id: 3,
    title: "Save your money up to 30%",
    save: 30,
    color: Colors.bluePastel,
    image: IphoneImage,
  },
  {
    id: 4,
    title: "Save your money up to 50%",
    save: 50,
    color: Colors.greenPastel,
    image: TravelImage,
  },
];

// allProducts.js
import men1 from "./men1.jpg";
import men2 from "./men2.jpg";
import men3 from "./men3.webp";
import men4 from "./men4.jpg";
import men5 from "./men5.jpg";
import men6 from "./men6.webp";
import men7 from "./men7.jpg";
import men8 from "./men8.jpeg";
import men9 from "./men9.jpg";
import men10 from "./men10.webp";
import men11 from "./men11.jpg";
import men12 from "./men12.jpg";
import men13 from "./men13.webp";
import men14 from "./men14.webp";
import men15 from "./men15.webp";
import men16 from "./men16.webp";

import women1 from "./women1.webp";
import women2 from "./women2.jpg";
import women3 from "./women3.jpeg";
import women4 from "./women4.webp";
import women5 from "./women5.webp";
import women6 from "./women6.jpg";
import women7 from "./women7.webp";
import women8 from "./women8.avif";
import women9 from "./women9.webp";
import women10 from "./women10.avif";
import women11 from "./women11.avif";
import women12 from "./women12.jpg";
import women13 from "./women13.jpg";
import women14 from "./women14.jpg";
import women15 from "./women15.avif";
import women16 from "./women16.webp";

import kids1 from "./kids1.jpg";
import kids2 from "./kids2.jpg";
import kids3 from "./kids3.jpg";
import kids4 from "./kids4.jpg";
import kids5 from "./kids5.jpg";
import kids6 from "./kids6.jpg";
import kids7 from "./kids7.jpeg";
import kids8 from "./kids8.jpeg";
import kids9 from "./kids9.webp";
import kids10 from "./kids10.webp";
import kids11 from "./kids11.avif";
import kids12 from "./kids12.webp";
import kids13 from "./kids13.webp";
import kids14 from "./kids14.jpg";
import kids15 from "./kids15.webp";
import kids16 from "./kids16.webp";

const products = [
  // 16 Men Products
  { id: 1, title: "Men Product 1", category: "men", image: men1, newPrice: 499, oldPrice: 699 },
  { id: 2, title: "Men Product 2", category: "men", image: men2, newPrice: 599, oldPrice: 799 },
  { id: 3, title: "Men Product 3", category: "men", image: men3, newPrice: 699, oldPrice: 899 },
  { id: 4, title: "Men Product 4", category: "men", image: men4, newPrice: 799, oldPrice: 999 },
  { id: 5, title: "Men Product 5", category: "men", image: men5, newPrice: 899, oldPrice: 1099 },
  { id: 6, title: "Men Product 6", category: "men", image: men6, newPrice: 999, oldPrice: 1199 },
  { id: 7, title: "Men Product 7", category: "men", image: men7, newPrice: 1099, oldPrice: 1299 },
  { id: 8, title: "Men Product 8", category: "men", image: men8, newPrice: 1199, oldPrice: 1399 },
  { id: 9, title: "Men Product 9", category: "men", image: men9, newPrice: 1299, oldPrice: 1499 },
  { id: 10, title: "Men Product 10", category: "men", image: men10, newPrice: 1399, oldPrice: 1599 },
  { id: 11, title: "Men Product 11", category: "men", image: men11, newPrice: 1499, oldPrice: 1699 },
  { id: 12, title: "Men Product 12", category: "men", image: men12, newPrice: 1599, oldPrice: 1799 },
  { id: 13, title: "Men Product 13", category: "men", image: men13, newPrice: 1699, oldPrice: 1899 },
  { id: 14, title: "Men Product 14", category: "men", image: men14, newPrice: 1799, oldPrice: 1999 },
  { id: 15, title: "Men Product 15", category: "men", image: men15, newPrice: 1899, oldPrice: 2099 },
  { id: 16, title: "Men Product 16", category: "men", image: men16, newPrice: 1999, oldPrice: 2199 },

  // 16 Women Products
  { id: 17, title: "Women Product 1", category: "women", image: women1, newPrice: 599, oldPrice: 799 },
  { id: 18, title: "Women Product 2", category: "women", image: women2, newPrice: 699, oldPrice: 899 },
  { id: 19, title: "Women Product 3", category: "women", image: women3, newPrice: 799, oldPrice: 999 },
  { id: 20, title: "Women Product 4", category: "women", image: women4, newPrice: 899, oldPrice: 1099 },
  { id: 21, title: "Women Product 5", category: "women", image: women5, newPrice: 999, oldPrice: 1199 },
  { id: 22, title: "Women Product 6", category: "women", image: women6, newPrice: 1099, oldPrice: 1299 },
  { id: 23, title: "Women Product 7", category: "women", image: women7, newPrice: 1199, oldPrice: 1399 },
  { id: 24, title: "Women Product 8", category: "women", image: women8, newPrice: 1299, oldPrice: 1499 },
  { id: 25, title: "Women Product 9", category: "women", image: women9, newPrice: 1399, oldPrice: 1599 },
  { id: 26, title: "Women Product 10", category: "women", image: women10, newPrice: 1499, oldPrice: 1699 },
  { id: 27, title: "Women Product 11", category: "women", image: women11, newPrice: 1599, oldPrice: 1799 },
  { id: 28, title: "Women Product 12", category: "women", image: women12, newPrice: 1699, oldPrice: 1899 },
  { id: 29, title: "Women Product 13", category: "women", image: women13, newPrice: 1799, oldPrice: 1999 },
  { id: 30, title: "Women Product 14", category: "women", image: women14, newPrice: 1899, oldPrice: 2099 },
  { id: 31, title: "Women Product 15", category: "women", image: women15, newPrice: 1999, oldPrice: 2199 },
  { id: 32, title: "Women Product 16", category: "women", image: women16, newPrice: 2099, oldPrice: 2299 },

  // 16 Kids Products
  { id: 33, title: "Kids Product 1", category: "kids", image: kids1, newPrice: 299, oldPrice: 399 },
  { id: 34, title: "Kids Product 2", category: "kids", image: kids2, newPrice: 349, oldPrice: 449 },
  { id: 35, title: "Kids Product 3", category: "kids", image: kids3, newPrice: 399, oldPrice: 499 },
  { id: 36, title: "Kids Product 4", category: "kids", image: kids4, newPrice: 449, oldPrice: 549 },
  { id: 37, title: "Kids Product 5", category: "kids", image: kids5, newPrice: 499, oldPrice: 599 },
  { id: 38, title: "Kids Product 6", category: "kids", image: kids6, newPrice: 549, oldPrice: 649 },
  { id: 39, title: "Kids Product 7", category: "kids", image: kids7, newPrice: 599, oldPrice: 699 },
  { id: 40, title: "Kids Product 8", category: "kids", image: kids8, newPrice: 649, oldPrice: 749 },
  { id: 41, title: "Kids Product 9", category: "kids", image: kids9, newPrice: 699, oldPrice: 799 },
  { id: 42, title: "Kids Product 10", category: "kids", image: kids10, newPrice: 749, oldPrice: 849 },
  { id: 43, title: "Kids Product 11", category: "kids", image: kids11, newPrice: 799, oldPrice: 899 },
  { id: 44, title: "Kids Product 12", category: "kids", image: kids12, newPrice: 849, oldPrice: 949 },
  { id: 45, title: "Kids Product 13", category: "kids", image: kids13, newPrice: 899, oldPrice: 999 },
  { id: 46, title: "Kids Product 14", category: "kids", image: kids14, newPrice: 949, oldPrice: 1049 },
  { id: 47, title: "Kids Product 15", category: "kids", image: kids15, newPrice: 999, oldPrice: 1099 },
  { id: 48, title: "Kids Product 16", category: "kids", image: kids16, newPrice: 1049, oldPrice: 1149 }
];

export default products;
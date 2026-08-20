export interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    category: "Helado",
    items: [
      { name: "Cono", price: 2.50, description: "Cono con una bola de helado" },
      { name: "Cono Grande", price: 2.75, description: "Cono grande con una bola de helado" },
      { name: "Copa o vaso", price: 2.25, description: "Una bola de helado en copa o vaso, puedes agregar el cono por $0.50" },
      { name: "Bola extra", price: 2.25, description: "Añade una bola de helado" },
      { name: "Bola pequeña extra", price: 1.25, description: "Añade una bola de helado pequeña" },
      { name: "Para llevar 8onz", price: 4.00, description: "8onz de delicioso helado que podrás guardar y disfrutar en casa gracias a nuestro envase especial" }
    ]
  },
  {
    category: "Postres",
    items: [
      { name: "Waffles Completo", price: 6.50, description: "4 rebanadas de waffles, coronado con una bola de helado, crema batida y sirope" },
      { name: "Mini Waffles", price: 3.75, description: "2 rebanadas de waffles, coronado con una bola de helado, crema batida y sirope" },
      { name: "Teddy Jelly", price: 3.00, description: "Base de gelatina, una bola de helado pequeña topping y nuestro hermoso osito" },
      { name: "Sundae", price: 5.00, description: "2 Bolas de helado con sirope, crema batida y topping" },
      { name: "Brownie", price: 2.25, description: "Una deliciosa rebanada de brownie caliente" },
      { name: "Brownie con helado", price: 4.50, description: "Una deliciosa rebanada de Brownie caliente, coronado con helado, crema batida, sirope y fruta" },
      { name: "Banana Split", price: 5.50, description: "Banana dividida a la mitad, con 3 bolas de helado, crema batida, sirope y cereza" },
      { name: "Sandwich de Helado", price: 3.25, description: "2 galletas de chispas de chocolate con helado en el medio" }
    ]
  },
  {
    category: "Salado",
    items: [
      { name: "Waffles con Jamón Serrano", price: 7.00, description: "Delicioso waffles con queso crema, tomate, jamón serrano, aceitunas negras, arugula y crema balsámica" },
      { name: "Bagel", price: 6.50, description: "Emparedado de pan Bagel con pavo, queso pepper Jack, tomate, arugula y pesto, acompañado de chips" }
    ]
  },
  {
    category: "Bebidas",
    items: [
      { name: "Milkshake", price: 4.75, description: "Delicioso milkshake de vainilla, chocolate, oreo o caramelo" },
      { name: "Milkshake Brownie", price: 6.50, description: "Delicioso milkshake de vainilla o chocolate, Coronado con brownie" },
      { name: "Chocolate caliente", price: 2.00 },
      { name: "Agua", price: 1.00 },
      { name: "Soda", price: 1.25 },
      { name: "Americano", price: 2.50 },
      { name: "Capuchino", price: 3.00 },
      { name: "Chai latte tea", price: 3.25 }
    ]
  },
  {
    category: "Extras",
    items: [
      { name: "Topping", price: 0.75 },
      { name: "Sirope", price: 0.75 },
      { name: "Fruta", price: 0.75 }
    ]
  }
];

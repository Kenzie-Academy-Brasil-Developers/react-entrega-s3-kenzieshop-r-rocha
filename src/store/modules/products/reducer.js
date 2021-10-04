const initialState = [
    {id: 1, name: "Café Torrado em Grãos Bourbon Baggio - 500g", price: 37.80, image: "https://cdn.shopify.com/s/files/1/1867/9411/products/BaggioBourbonEspressoTM250g.png?v=1607092133"},
    {id: 2, name: "Baggio Café Gourmet Espresso - 250g", price: 19.90, image: "https://cdn.shopify.com/s/files/1/1867/9411/products/BaggioGourmetEspressoTM250g.png?v=1607091802"},
    {id: 3, name: "Baggio Café Premium Caffe.com - 250g", price: 42.90, image: "https://cdn.shopify.com/s/files/1/1867/9411/products/BaggioCaffe.ComTM250g.png?v=1610557074"},
    {id: 4, name: "Kit Baggio Gourmet: Bourbon - Espresso - Caffe.com - 3kg", price: 37.80, image: "https://cdn.shopify.com/s/files/1/1867/9411/products/kitescritorio_2_a95c141d-59cf-480b-b831-0c13023a957a.png?v=1607104228"},
    {id: 5, name: "Baggio Café Aromas Chocolate Trufado - 250g", price: 22.90, image: "https://cdn.shopify.com/s/files/1/1867/9411/products/Chocolate_trufado.png?v=1568828366"}
];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return state;
    
    default:
      return state;
  }
};

export default productReducer;
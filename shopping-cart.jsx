const NavBar = ({stockItems, minStock}) => {
  const [cart, setCart] = React.useState([]);
  const [stock, setStock] = React.useState(stockItems);
  const {Button} = ReactBootstrap;

  const moveToCart = e => {
    let [name, number] = e.target.innerHTML.split(':');
    let newStock = stock.map(item => {
      if (item.name == name && item.instock > minStock) {
        item.instock --;
        cart.push(item.name);
      }
      return item;
    });
    setCart(cart);
    setStock(newStock);
  }

  const updatedList = stock.map((item, index) => {
      return <Button key={index} onClick={moveToCart}>{item.name}:{item.instock}</Button>;
  });

  const updatedCart = cart.map((item, index) => {
      return <Button key={index}>{item}</Button>;
  });

  return (
    <>
      <ul style={{listStyleType: "none"}}>{updatedList}</ul>
      <h1>Shopping Cart</h1>
      <ul style={{listStyleType: "none"}}>{updatedCart}</ul>
    </>
  );
}

const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 }
];

ReactDOM.render(
  <NavBar stockItems={menuItems} minStock={0} />,
  document.getElementById("root")
);

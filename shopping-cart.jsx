const NavBar = ({stockItems, minStock}) => {
  const updatedList = stockItems.map((item, index) => {
    if (item.instock >= minStock) { 
      return <li key={index}>{item.name}</li>;
    }
  });

  return <ul style={{listStyleType: "none"}}>{updatedList}</ul>;
}

const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 }
];

ReactDOM.render(
  <NavBar stockItems={menuItems} minStock={2} />,
  document.getElementById("root")
);

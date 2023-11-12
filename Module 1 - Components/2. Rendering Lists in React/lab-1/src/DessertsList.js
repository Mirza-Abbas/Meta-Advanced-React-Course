function DessertsList(props) {

  function check(cal) {
    return cal.calories <= 500;
  }

  const data = props.data.filter(check);

  data.sort(function (a, b) {
    return a.calories - b.calories;
  });

  const listItems = data.map(dessert => {

    const itemText = `${dessert.name} - ${dessert.calories} cal.`;

    return (
      <li>{itemText}</li>
    )
  })

  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default DessertsList;

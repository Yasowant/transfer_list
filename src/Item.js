const Item = ({ item, handelToggle }) => {
  return (
    <label>
      <input type="checkbox" onChange={() => handelToggle(item)} />
      {item}
    </label>
  );
};

export default Item;

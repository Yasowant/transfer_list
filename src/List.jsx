import Item from "./Item";

const List = ({ items, handelToggle }) => {
  return (
    <div className="list flex">
      {items.map((item) => {
        return <Item key={item} item={item} handelToggle={handelToggle} />;
      })}
    </div>
  );
};
export default List;

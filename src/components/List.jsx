import ListItem from "./ListItem";
function List({ trips, onHandleFilter, onToggleItem }) {
  console.log("sub parent");

  return (
    <>
      <ul className="list">
        {trips && trips.length > 0 ? (
          trips.map((trip) => {
            return (
              <ListItem
                key={trip.id}
                id={trip.id}
                title={trip.enteredInput}
                count={trip.selectOptions}
                isCheck={trip.isCheck}
                onFilter={onHandleFilter}
                onToggle={onToggleItem}
              />
            );
          })
        ) : (
          <p>No trips found</p>
        )}
      </ul>
    </>
  );
}
export default List;

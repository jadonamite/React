// refer to the initial commit "Introduction to List (20/11) for further understanding"
import PropTypes from "prop-types";

function List({ category = "Category", items = [] }) {
   const Category = category;
   const itemslist = items;

   const listItems = itemslist.map((item) => (
      <li key={item.id}>
         <b>{item.name}</b> : <i>{item.calories} cal per serving</i>
      </li>
   ));
   return (
      <>
         <h3 className="list-category">{Category}</h3>
         <ol className="list-item">{listItems}</ol>
      </>
   );
}
List.propTypes = {
   category: PropTypes.string,
   items: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number,
         name: PropTypes.string,
         calories: PropTypes.number,
      })
   ),
};
export default List;

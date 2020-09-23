import React from "react";

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickItem,
}) {
  // const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    onClickItem(index);
  };
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClickItem={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;

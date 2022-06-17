import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";

import { addItem } from '../redux/slices/cartSlice'

function HoneyBlock({id, imageUrl, title, price, sizes}) {
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart.items.find(obj => obj.id == id));
  const [activeSize, setActiveSize] = useState(0);

  const addedCount = cartItem ? cartItem.count : 0;
  
  
  const onClickAdd = () => {
     const item = {
      id,
      imageUrl,
      title,
      price,
      size: sizes[activeSize],
     };
     dispatch(addItem(item));
  };

    return (
        <div className="honey-block-wrapper">
          <div className="honey-block">
              <img
                className="honey-block__image"
                src={imageUrl}
                alt="Honey"
              />
              <h4 className="honey-block__title">{title} </h4>
              <div className="honey-block__selector">
                <ul>
                  {sizes.map((size, i) => (
                    <li key={i} onClick={() => setActiveSize(i)} className={activeSize == i ? 'active' : ''}>{size} л.</li>
                  ))}
                </ul>
              </div>
              <div className="honey-block__bottom">
                <div className="honey-block__price">{price} ₽</div>
                <button onClick={onClickAdd}  className="button button--outline button--add">
                  <span>В корзину</span>
                  {addedCount > 0 && <i>{addedCount}</i>}
                </button>
              </div>
            </div>
        </div>
    )
}

export default HoneyBlock;
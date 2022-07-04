import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { selectCartItemById } from "../redux/slices/selectCart";

import { addItem, CartItem } from '../redux/slices/cartSlice'


type HoneyBlockProps = {id:string; imageUrl:string; title:string; price:number; sizes:number[];};

const HoneyBlock: React.FC< HoneyBlockProps> = ({id, imageUrl, title, price, sizes}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById);
  const [activeSize, setActiveSize] = useState(0);

  const addedCount = cartItem ? cartItem.count : 0;
   
  price = price * (activeSize + 1);
  
  const onClickAdd = () => {
     const item: CartItem = {
      id,
      imageUrl,
      title,
      price,
      size: sizes[activeSize],
      count: 0,
     };
     dispatch(addItem(item));
  };


  let totalPrice =  price * Number(sizes);

  console.log(totalPrice);

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
                    <li key={i} onClick={() => setActiveSize(i)}  className={activeSize == i ? 'active' : ''}>{size} л.</li>
                  ))}
                </ul>
              </div>
              <div className="honey-block__bottom">
                <div className="honey-block__price">{price } ₽</div>
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
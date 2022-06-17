import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
    return (
        <>
        <div class="cart cart--empty">
            <h2>Корзина пустая <icon>😕</icon></h2>
            <p>
              Вероятней всего, вы еще не заказывали товар.<br />
              Для того, чтобы заказать , перейди на главную страницу.
            </p>
            <img src="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Empty cart" />
            <Link to="/" class="button button--black">
              <span>Вернуться назад</span>
            </Link>
        </div>
        </>
    )   
}

export default CartEmpty;
import { calcTotalPrice } from './calcTotalPrice';
export const getHoneyFromLS = () => {
    const data = localStorage.getItem('honey');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(items);
 
    
     return {
        items,
        totalPrice,
    }
    
}; 
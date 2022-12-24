import { FaCartArrowDown } from 'react-icons/fa';
import { useStateContext } from '../context/stateContext';

const CartBag = () => {
    const { totalQuantities } = useStateContext();
    
    return (
     <div>
        <button type="button" className='cart-icon'>
            <FaCartArrowDown style={{ fontSize: '1.2em' }} />
            <span className='cart-item-qty'>{totalQuantities}</span>
        </button>
     </div>
    )
}

export default CartBag
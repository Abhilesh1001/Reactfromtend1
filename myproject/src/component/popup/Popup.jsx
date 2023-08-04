import React,{useEffect,useRef,useState} from 'react'
import Cart from './Cart'
import {useSelector} from  'react-redux'
import {useNavigate} from 'react-router-dom'
const Popup = () => {
  
  const cartlen = useSelector((state)=>state.len.len)
  const [cartVisible, setCartVisible] = useState(false);
  const [popoverContent, setPopoverContent] = useState('');
  const popoverRef = useRef(null);
  const navigate = useNavigate()
   console.log(cartlen)
  useEffect(()=>{
    console.log(cartlen)
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
    return () => {
      popoverList.forEach((popover) => popover.dispose());
    };
    
  },[cartlen])
  useEffect(()=>{
    console.log('cart',cartlen)
  },[cartlen])
  useEffect(() => {
    // Update the popover content when cart data changes
    if (cartVisible) {
      if (cartlen > 0) {
        setPopoverContent(<Cart />);
      } else {
        setPopoverContent('Cart is empty');
        setCartVisible(false); // Hide the popover if the cart is empty
      }
    }
  }, [cartlen, cartVisible]);


  useEffect(()=>{
    
  },[cartlen])
  let len = 0
  const handleClick =()=>{
    // console.log('onClick')
    setCartVisible(!cartVisible);
    len++;
  }
  useEffect(() => {
    if (cartVisible && cartlen === 0) {
      setCartVisible(false); // Hide the cart if it's open but the cart is empty
    }
  }, [cartlen, cartVisible]);

  useEffect(()=>{
  },[len])
    
  return (
    <div>
    <a 
      type="button"
      className="btn btn-secondary"
      data-bs-container="body"
      data-bs-toggle="popover"
      data-bs-placement="bottom"
      data-bs-html="true"
      data-bs-content={popoverRef.current && popoverRef.current.innerHTML} // Set popover content as innerHTML of the ref
      onClick={handleClick}
    >
      cart({cartlen})
    </a>
    {/* The Cart component is mounted here, but it won't be displayed on the page */}
    <div ref={popoverRef} style={{ display: 'none' }}>
      <Cart />
    </div>
  </div>
  )
}

export default Popup

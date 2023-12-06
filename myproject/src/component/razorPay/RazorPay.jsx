import React, { useState } from 'react'
import axios from 'axios'
import useRazorpay from "react-razorpay";
import {useSelector,useDispatch} from 'react-redux'


const RazorPay = ({handllesub}) => {
    const totalSum = useSelector((state)=>state.len.totalSum)
    
    const user = useSelector((state) => state.login.user)
    const [Razorpay] = useRazorpay();
    const complete_payment =(payment_id,order_id,signature)=>{

      axios.post("http://127.0.0.1:8000/razorpay/order/complete",{
            "payment_id":payment_id,
            "order_id":order_id,
            "signature":signature,
            "amount":totalSum
        }).then(function(response){
            console.log(response.data)
        }).catch((error)=>{
          console.log(error)
        })
    }


    const razorPayment = async () => {
        axios.post("http://127.0.0.1:8000/razorpay/order/create",{
            "amount":totalSum*100,
            "currency":"INR"
        }).then(function(response){
            console.log(response.data.data)
            const order_id = response.data.data.id
            const options = {
                key: "rzp_test_EBbOQM7GSjBegF", // Enter the Key ID generated from the Dashboard
                name: "ABHIKART",
                description: "Test Transaction",
                image: "https://example.com/your_logo",
                order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
                handler: function (response) {
                  // alert(response.razorpay_payment_id);
                  // alert(response.razorpay_order_id);
                  // alert(response.razorpay_signature);
                  handllesub(response.razorpay_payment_id,response.razorpay_order_id,response.razorpay_signature,totalSum)
                  complete_payment(response.razorpay_payment_id,response.razorpay_order_id,response.razorpay_signature)  
                },
                prefill: {
                  name: user.name,
                  email: user.email,
                  contact: "9999999999",
                },
                notes: {
                  address: "Razorpay Corporate Office",
                },
                theme: {
                  color: "#3399cc",
                },
              };
            
              const rzp1 = new Razorpay(options);
            
              rzp1.on("payment.failed", function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
              });
            
              rzp1.open();

        })

    }
    return (
        <div >
                <button type='button' onClick={razorPayment}  className='btn btn-primary'>Pay Now</button>
        </div>
    )
}

export default RazorPay
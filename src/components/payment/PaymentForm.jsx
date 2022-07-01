import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import {
    PaymentElement,
    useStripe,
    useElements
  } from "@stripe/react-stripe-js";
import Swal from 'sweetalert2'
import { cartContext } from '../../context/CartContext';

export default function PaymentForm() {

    const stripe = useStripe();
    const elements = useElements();
    const {setItems} = useContext(cartContext)
    const navigate = useNavigate()

    const pay = async (event)=>{
        event.preventDefault()
        const result = await stripe.confirmPayment({
            elements,
            redirect:"if_required"
        });

        console.log(result)

        if(result.paymentIntent.status==="succeeded"){
            console.log("exitosoo")
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Pago exitoso',
                showConfirmButton: false,
                timer: 1800
              })
            setItems({
                type: "CLEAR"
            })  
            navigate("/store")
        }
    }
    return (
        <div>
            <form onSubmit={pay}>
                <PaymentElement id="payment-element"></PaymentElement>
                <br />
                <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">Pagar</button>
            </form>
        </div>
    )
}

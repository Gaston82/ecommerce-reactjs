import React from 'react'
import {
    PaymentElement,
    useStripe,
    useElements
  } from "@stripe/react-stripe-js";

export default function PaymentForm() {

    const stripe = useStripe();
    const elements = useElements();

    const pay = async (event)=>{
        event.preventDefault()
        const result = await stripe.confirmPayment({
            elements,
            redirect:"if_required"
        });

        console.log(result)

        if(result.paymentIntent.status==="succeeded"){
            console.log("exitosoo")
            alert("Pago exitoso!!!")
            // Limpiar el contexto del carrito
        }else{
            console.log("error")
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

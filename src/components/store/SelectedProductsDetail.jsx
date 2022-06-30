import React from 'react'

export const SelectedProductsDetail = () => {
  return (
    <>

        <form className="bg0 p-t-75 p-b-85">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                        <div className="m-l-25 m-r--38 m-lr-0-xl">
                            <div className="wrap-table-shopping-cart">
                                <table className="table-shopping-cart">
                                        <tr className="table_head">
                                            <th className="column-1">Product</th>
                                            <th className="column-2"></th>
                                            <th className="column-3">Price</th>
                                            <th className="column-4">Quantity</th>
                                            <th className="column-5">Total</th>
                                        </tr>

                                        <tr className="table_row">
                                            <td className="column-1">
                                                <div className="how-itemcart1">
                                                    <img src="images/item-cart-04.jpg" alt="IMG"></img>
                                                </div>
                                            </td>
                                            <td className="column-2">Fresh Strawberries</td>
                                            <td className="column-3">$ 36.00</td>
                                            <td className="column-4">
                                                <div className="wrap-num-product flex-w m-l-auto m-r-0">
                                                    <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                        <i className="fs-16 zmdi zmdi-minus"></i>
                                                    </div>

                                                    <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product1" value="1"></input>

                                                    <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                        <i className="fs-16 zmdi zmdi-plus"></i>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="column-5">$ 36.00</td>
                                        </tr>

                                        <tr className="table_row">
                                            <td className="column-1">
                                                <div className="how-itemcart1">
                                                    <img src="images/item-cart-05.jpg" alt="IMG"></img>
                                                </div>
                                            </td>
                                            <td className="column-2">Lightweight Jacket</td>
                                            <td className="column-3">$ 16.00</td>
                                            <td className="column-4">
                                                <div className="wrap-num-product flex-w m-l-auto m-r-0">
                                                    <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                        <i className="fs-16 zmdi zmdi-minus"></i>
                                                    </div>

                                                    <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product2" value="1"></input>

                                                    <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                        <i className="fs-16 zmdi zmdi-plus"></i>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="column-5">$ 16.00</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                            <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                                <h4 className="mtext-109 cl2 p-b-30">
                                    Total de la compra
                                </h4>


                                <div className="flex-w flex-t p-t-27 p-b-33">
                                    <div className="size-208">
                                        <span className="mtext-101 cl2">
                                            Total:
                                        </span>
                                    </div>

                                    <div className="size-209 p-t-1">
                                        <span className="mtext-110 cl2">
                                            $79.65
                                        </span>
                                    </div>
                                </div>

                                <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
                                    PAGAR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </form>

    </>
  )
}

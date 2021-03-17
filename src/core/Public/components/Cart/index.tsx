import React, { useState, useMemo } from 'react';
import { RootState } from 'store/root-reducer';
import { useHistory, Link } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux';

import Datatable from 'components/React/Datatable/Datatable';
import { Row } from 'react-table';
import { addToCart, removeFromCart, clearCart } from 'store/modules/cart/actions';

const Cart = ({ addToCart, removeFromCart, clearCart, counter, priceSum }) => {
  const history = useHistory();
    const columns = useMemo( () => [
        { Header: "SN", Cell: ( { row: {index}}: {row: Row} ) => index + 1 },
        { Header:"Product", accessor: "name" },
        {
            Header: "Quantity", accessor: "quantity", Cell: ({ row }: { row: Row<{ id: number }> }) => (
              <ul className="list list__inline">
                <li>
      
                  <svg onClick={() => removeFromCart(row.original)} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
      
                </li>
      
                <li>
                  {row.original.quantity}
                </li>
      
                <li>
      
                  <svg onClick={() => addToCart(row.original)} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
      
                </li>
              </ul>
            )
          },
          { Header: "Amount (In Rs)", id: 'price', accessor: (row) => row.price * row.quantity },
          {
            Header: "Actions", headerClass: 'text-right', accessor: "actions", Cell: ({ row }: { row: Row<{ id: number }> }) => (
              <ul className="list list__inline">
                <li>
                  <button title="Remove Item" className="btn btn-icon-only" onClick={() => clearCart(row.original._id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                  </button>
                </li>
              </ul>
            )
          }
    ], [])

    return (
      <>
      <nav className="navbar navbar-expand-md bg-light navbar-light my-3 font-weight-bold" id="main-nav">
          <div className="container">
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                  </ul>
              </div>  
          </div>
      </nav> 
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-md-2">
            <Datatable columns={columns} data={counter || []} filter={false} />
          </div>
  
          <div className="col-lg-6 offset-md-2">
            <div className="d-flex justify-content-end">
              <span className="mr-5" style={{ fontSize: '20px' }}>Total: {priceSum}</span>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

const mapStateToProps = (state: any) => ({
    counter: state?.cart?.items || [],
    priceSum: state?.cart?.items.reduce( (acc, item) => acc + item.quantity * item.price,
    0
    ) || 0
  })
  
  const mapDispatchToProps = {
    addToCart,
    removeFromCart,
    clearCart
  
  }
  
  const connector = connect(mapStateToProps, mapDispatchToProps);
  type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Cart)

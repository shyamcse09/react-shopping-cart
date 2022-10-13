import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { CartState } from '../context/Context';
import Rating from './Rating';

const Filters = () => {
  const {filterState: {
    byStock,
    byFastDelivery,
    byRating,
    sort
  }, filterDispatch } 
  = CartState();

  return (
    <div className='filters'>
      <span className='title'>Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange = {() => 
            filterDispatch({
              type: 'SORT_BY_PRICE',
              payload: 'LowToHigh',
            })
          }
          checked= {sort === 'LowToHigh' ? true : false }
        /> 
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange = {() => 
            filterDispatch({
              type: 'SORT_BY_PRICE',
              payload: 'HighToLow',
            })
          }
          checked= {sort === 'HighToLow' ? true : false }
        />  
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange = {() => 
            filterDispatch({
              type: 'FILTER_BY_STOCK',
            })
          }
          checked = {byStock}
        /> 
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange = {() => 
            filterDispatch({
              type: 'FILTER_BY_DELIVERY',
            })
          }
          checked = {byFastDelivery}
        />   
      </span>
      <span>
        <label  style={{ paddingRight: 10 }}> Rating: </label>
        <Rating rating={byRating} style={{cursor: "pointer"}} 
        onClick={(i) => 
          filterDispatch({
            type: 'FILTER_BY_RATING',
            payload: i+1,
          })
        }></Rating>  
      </span>
      <Button 
      vriant="light"
      onClick = {() => {
        filterDispatch({
          type: 'CLEAR_FILTER',
        })
      }}
      > 
        Clear Filters 
      </Button>
    </div>
  )
}

export default Filters
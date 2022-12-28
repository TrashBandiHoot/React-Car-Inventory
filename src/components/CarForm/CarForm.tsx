import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseYear, chooseBrand, chooseModel, choosePrice } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

interface CarFormProps {
  id?: string;
  data?: {};
};

interface ContactState {
  year: string;
  brand: string;
  model: string;
  price: number;
};

export const CarForm = (props:CarFormProps) => {

  const dispatch = useDispatch();
  const store = useStore();
  const model = useSelector<ContactState>(state => state.model)
  const {register, handleSubmit} = useForm({ })

  const onSubmit = (data:any, event:any) => {
    console.log(props.id)
    if(props.id!){
      server_calls.update(props.id!, data);
      console.log(`Updated : ${data} ${props.id}`);
      console.log(data);
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset();
    } else {
      dispatch(chooseYear(data.year));
      dispatch(chooseBrand(data.brand));
      dispatch(chooseModel(data.model));
      dispatch(choosePrice(data.price));
      server_calls.create(store.getState());
      setTimeout( () => {window.location.reload()}, 1000)
    }
  }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='year'>Year</label>
            <input {...register('year')} name="year" placeholder='Year' />
          </div>
          <div>
            <label htmlFor='brand'>Brand</label>
            <input {...register('brand')} name="brand" placeholder='Brand' />
          </div>
          <div>
            <label htmlFor='model'>Model</label>
            <input {...register('model')} name="model" placeholder='Model' />
          </div>
          <div>
            <label htmlFor='price'>Price</label>
            <input {...register('price')} name="price" placeholder='Price' />
          </div>
          <Button type='submit'>Submit</Button>
        </form>
    </div>
  )
}

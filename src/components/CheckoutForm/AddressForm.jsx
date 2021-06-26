import React from 'react';
import { InputLabel, Select, MenuItem, Button, Grid,Typography } from '@material-ui/core';
import {useForm, FormProvider} from 'react-hook-form';
import FormInput from './FormInput';

const AddressForm = () => {

    const methods = useForm();
    return (
        <div>
            <Typography variant={6} gutterBottom>Shipping address</Typography>
            <FormProvider {...methods}>
             <form onSubmit=''>
                <Grid container spacing={3}>
                   <FormInput required name='firstName' label='First name'/>
                </Grid>
             </form>
            
            </FormProvider>
        </div>
    )
}

export default AddressForm;
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Paper} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import {observer} from 'mobx-react';

const Delivery = ({type, onChange}) => {
    return (
        <Typography component={Paper}>
            <div className="cart-delivery">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Выберите тип доставки:</FormLabel>
                    <RadioGroup aria-label="delivery" name="delivery">
                        <FormControlLabel value="Почтой"  control={<Radio checked={type === 'Почтой'} color="primary" onClick = {() => onChange('Почтой')}/>} label="Почтой"/>
                        <FormControlLabel value="До двери"   control={<Radio checked={type === 'До двери'} color="primary" onClick = {() => onChange('До двери')}/>} label="До двери"/>
                    </RadioGroup>
                </FormControl>
            </div>
        </Typography>
    );
}

export default observer(Delivery);
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Paper} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import {observer} from 'mobx-react';
import appStore from '../../stores/store';
const Delivery = () => {
    return (
        <Typography component={Paper}>
            <div className="cart-delivery">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Выберите тип доставки:</FormLabel>
                    <RadioGroup aria-label="delivery" name="delivery">
                        <FormControlLabel value="Почтой"  control={<Radio checked={appStore.selectedDeliveryType === 'Почтой'} color="primary" onClick = {() => appStore.toggleDeliveryType('Почтой')}/>} label="Почтой"/>
                        <FormControlLabel value="До двери"   control={<Radio checked={appStore.selectedDeliveryType === 'До двери'} color="primary" onClick = {() => appStore.toggleDeliveryType('До двери')}/>} label="До двери"/>
                    </RadioGroup>
                </FormControl>
            </div>
        </Typography>
    );
}

export default observer(Delivery);
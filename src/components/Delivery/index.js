import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import { observer } from 'mobx-react';
import { cartCollection } from '../../stores/store';

const Delivery = () => {
    return (
        <Typography component={Paper}>
            <div className="cart-delivery">
                <FormControl component="fieldset">
                    <FormLabel component="legend">
                        Выберите тип доставки:
                    </FormLabel>
                    <RadioGroup aria-label="delivery" name="delivery">
                        <FormControlLabel
                            value="Почтой"
                            control={
                                <Radio
                                    checked={
                                        cartCollection.deliveryBonus.type ===
                                        'Почтой'
                                    }
                                    color="primary"
                                    onClick={() =>
                                        cartCollection.deliveryBonus.changeType(
                                            'Почтой'
                                        )
                                    }
                                />
                            }
                            label="Почтой"
                        />
                        <FormControlLabel
                            value="До двери"
                            control={
                                <Radio
                                    checked={
                                        cartCollection.deliveryBonus.type ===
                                        'До двери'
                                    }
                                    color="primary"
                                    onClick={() =>
                                        cartCollection.deliveryBonus.changeType(
                                            'До двери'
                                        )
                                    }
                                />
                            }
                            label="До двери"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </Typography>
    );
};

export default observer(Delivery);

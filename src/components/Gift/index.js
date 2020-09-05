import React from 'react';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { observer } from 'mobx-react';
import { cartCollection } from '../../stores/store';

const Gift = () => {
    return (
        <Typography component={Paper}>
            <div className="cart-gift">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Выберите подарок:</FormLabel>
                    <RadioGroup aria-label="gift" name="gift">
                        <FormControlLabel
                            value="Салфетка для монитора"
                            control={
                                <Radio
                                    checked={
                                        cartCollection.giftBonus.type ===
                                        'Салфетка для монитора'
                                    }
                                    color="primary"
                                    onClick={() =>
                                        cartCollection.giftBonus.changeType(
                                            'Салфетка для монитора'
                                        )
                                    }
                                />
                            }
                            label="Салфетка для монитора"
                        />
                        <FormControlLabel
                            value="Флешка"
                            control={
                                <Radio
                                    checked={
                                        cartCollection.giftBonus.type ===
                                        'Флешка'
                                    }
                                    color="primary"
                                    onClick={() =>
                                        cartCollection.giftBonus.changeType(
                                            'Флешка'
                                        )
                                    }
                                />
                            }
                            label="Флешка"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </Typography>
    );
};

export default observer(Gift);

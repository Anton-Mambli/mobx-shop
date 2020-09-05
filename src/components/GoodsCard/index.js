import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { cartCollection, goodsCollection } from '../../stores/store';

const GoodsCard = props => {
    const { id, img, name, price, disabled } = props;
    const [count, setCount] = useState(1);
    return (
        <div className="catalog-list__col">
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={name}
                        image={require(`../../pic/${img}`)}
                        title={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Цена: {price} рублей.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        disabled={disabled}
                        size="small"
                        color="primary"
                        onClick={() => {
                            count > 1 ? setCount(count - 1) : setCount(1);
                        }}
                    >
                        -
                    </Button>
                    {count}
                    <Button
                        disabled={disabled}
                        size="small"
                        color="primary"
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </Button>
                    <Button
                        disabled={disabled}
                        size="small"
                        color="primary"
                        onClick={() => goodsCollection.addItem(id, count)}
                    >
                        В корзину
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default GoodsCard;

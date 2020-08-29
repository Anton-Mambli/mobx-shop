import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cartStore from '../../stores/cartStore';
import goodStore from '../../stores/goodsStore';
const GoodsCard = props => {
    let {id, img, name, count, cost, disabled} = props;
    return (
        <div className="catalog-list__col">
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={name}
                        image={img}
                        title={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Цена: {cost} рублей.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => props.decreaseCount(id, goodStore)}>
                        -
                    </Button>
                    {count}
                    <Button size="small" color="primary" onClick={() => props.increaseCount(id, goodStore)}>
                        +
                    </Button>
                    <Button disabled={disabled} size="small" color="primary" onClick={() => props.addToCart(id, goodStore, cartStore)}>
                        {disabled ? 'Добавлено в корзину' : 'В корзину'}
                    </Button>
                </CardActions>
            </Card>
        </div>
    );

}

export default GoodsCard;
import React from 'react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

const HeaderCartButton = props => {

    const [itemCount, setItemCount] = React.useState(1);

    return (
        <div>
            <Badge color="secondary" badgeContent={itemCount}>
                <ShoppingCartIcon />{" "}
            </Badge>
        </div>

    );

};

export default HeaderCartButton
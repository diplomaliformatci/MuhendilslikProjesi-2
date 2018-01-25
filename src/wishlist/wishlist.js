import React , {Component} from 'react';
import './wishlist.css';
import DataService from '../services/data-service';
import ProductCondensed from '../product condensed/product-condensed';
import NotificationService  , {NOTIF_WISHIST_CHANGED} from '../services/notification-service';


let ns = new NotificationService();


class WishList extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {wishList:[]};
       
        this.createWishList = this.createWishList.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
    }
    
    
    componentDidMount() {
        ns.addObserver(NOTIF_WISHIST_CHANGED , this , this.onWishListChanged);
    }
    
    
    componentWillUnmount() {
        ns.removeObserver(this , NOTIF_WISHIST_CHANGED);
    }
    
    
    onWishListChanged(newWishList) {
        this.setState({wishList: newWishList});
    }
    
    
    createWishList = () => {
        const list = this.state.wishList.map((product) => 
                                             <ProductCondensed product={product} key={product._id}></ProductCondensed>
                                            ); 
                                             
                                             return (list);
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">Wish List</h4>
                    <ul className="list-group">
                        {this.createWishList()}
                    </ul>
                </div>
            </div>
        );
    }
}


export default WishList;
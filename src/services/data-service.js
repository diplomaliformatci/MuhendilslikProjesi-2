import NotificationService , {NOTIF_WISHIST_CHANGED} from './notification-service';
let instance = null;
var wishList = [];
let ns = new NotificationService();

class DataService {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }
    
    
    
    itemOnWishlist = item => {
        for (var x = 0 ; x < wishList.length ; x++) {
            if (wishList[x]._id === item._id) {
                return true;
            }
        }
        
        return false;
    }
    
    
    addWishlistItem = item => {
        wishList.push(item);
        ns.postNotification(NOTIF_WISHIST_CHANGED , wishList);
    }
    
    
    removeWishListItem = item => {
        for (var x = 0 ; x < wishList.length; x++) {
            if (wishList[x]._id === item._id) {
                wishList.splice(x,1);
                break;
            }
        }
    }
    
}

export default DataService;
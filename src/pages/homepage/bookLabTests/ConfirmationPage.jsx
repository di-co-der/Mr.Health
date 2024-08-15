import { useLocation } from 'react-router-dom';

const BookingConfirmation = () => {
    const location = useLocation();
    const cartItems = location.state?.cartItems || [];

    return (
        <div>
            <h1>Booking Confirmation</h1>
            {cartItems.length === 0 ? (
                <p>No items in your cart!</p>
            ) : (
                cartItems.map((item, index) => (
                    <div key={index}>
                        <h3>{item.name}</h3>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ₹{item.price}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default BookingConfirmation;

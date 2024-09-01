import { instance } from "./server.js"

export const checkout = async (req, res) => {
    try {
        const options = {
            amount: 25000,
            currency: "INR",
        };
        
        const order = await instance.orders.create(options);
        
        console.log(order);
        
        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to create order',
        });
    }
};

const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
    .then(() => console.log("connection successful"))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        },
    ],
});
// customerSchema.pre("findOneAndDelete",async()=>{
//     console.log("pre middleware");
// });
customerSchema.post("findOneAndDelete",async(customer)=>{
    if(customer.orders.length){
        let res = await Order.deleteMany({_id:{$in: customer.orders}});
        console.log(res);
    }//post delete - delete the cust's order info after when customer name deleted together
});//pre - delete order first then cust deleted

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);
const findCustomer = async () => {

let result = await Customer.find({}).populate("orders");
//populate is used to extract data with its inner details
    console.log(result[0]);
};
// findCustomer();
const addCust = async () =>{
    let newCust = new Customer({
        name:"raj"
    });
    let newOrder= new Order({
        item:"brger",
        price:44,
    });

    newCust.orders.push(newOrder);
    await newOrder.save();
    await newCust.save();
    console.log("added new customer");
};
// addCust();
const delCust = async()=>{
    let data = await Customer.findByIdAndDelete("66d97cb2daf8253fa2a0627a");
    console.log(data);
};
delCust();

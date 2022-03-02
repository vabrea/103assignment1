let buyerFirstname="Von"
let buyerLastname="Abrea"
let buyerAddress="1234 Street"
let buyerCity="Ventura"
let buyerState="CA"
let buyerZip="93004"
let buyerEmail="von@gmail.com"
let sellerName="Amazon.com"
let orderNumber="98765"
let orderItem="Whiteboard"
let itemDescription="20x20in dry erase board"
let itemQty="1"
let itemNumber="242424"
let itemPrice="$100"
let itemTax="$10"
let itemShipping="$5"
let itemLocation="Dallas, TX"
let shippingTime="2-3 Business Days."
let shipArrival="March 4, 2022"
let orderMessage="Thank you for shopping with Amazon.com"


let template=`
    <h2>Thank you for your purchase from <u>${sellerName}</u></h2>
    <p>Order Number: ${orderNumber} arriving on ${shipArrival}<p>
    <h4>Items Ordered</h4>
    <p> <b>Item Name: ${orderItem}</b>
    <br>
    Item Description: ${itemDescription}
    <br>
    Items Ordered: ${itemQty}
    <br>
    Item Price: ${itemPrice}
    <br>
    Item Tax: ${itemTax}
    <br>
    Shipping Cost: ${itemShipping}
    <br>
    Item Number: ${itemNumber}
    <br>
    Shipped From: ${itemLocation}
    <br>
    <br>
    ${orderMessage}, your item will arrive in ${shippingTime}
    <br>
    <br>
    <b>Shipping Info:</b>
    <br>
    ${buyerFirstname} ${buyerLastname}
    <br>
    ${buyerAddress}
    <br>
    ${buyerCity}, ${buyerState} ${buyerZip}
    <br>
    Email: ${buyerEmail}
    </p>
`

document.write(template)
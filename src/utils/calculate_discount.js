function applyDiscount(price, discountPercentage) {
    // debugger;
    if(price <= 0 || discountPercentage <= 0 || typeof(price) !== 'number' || typeof(discountPercentage) !== 'number'){
        throw new Error('invalid params..');
    }
    const discount = discountPercentage / 100;  // Convert percentage to decimal
    const newPrice = price * (1 - discount)
    return `$${newPrice.toFixed(2)}`;
}

export default applyDiscount

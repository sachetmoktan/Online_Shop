export const addItemToCart = (items: any[], cartItemToAdd: any) => {
    const existingItem = items.find(
      item => item._id === cartItemToAdd._id
    );
  
    if (existingItem) {
      return items.map(item =>
        item._id === cartItemToAdd._id
          ? { ...item, quantity: item.quantity + 1 }
          : { ...item }
      );
    }
  
    return [...items, { ...cartItemToAdd, quantity: 1 }];
  };
  
  export const removeItemFromCart = (items: any[], cartItemToRemove) => {
    const existingItem = items.find(
      item => item._id === cartItemToRemove._id
    );
  
    if (existingItem.quantity === 1) {
      return items.filter(item => item._id !== cartItemToRemove._id);
    }
  
    return items.map(item =>
      item._id === cartItemToRemove._id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  };
  
  export const deleteItemFromCart = (items: any[], cartItemIdToRemove) => {
    return items.filter(cartItem => cartItem._id !== cartItemIdToRemove);
  }
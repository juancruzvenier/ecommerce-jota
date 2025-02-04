const items = [
  { id: '1', name: 'Auto', category: 'vehiculos', description: 'Un auto rápido', price: 10000 },
  { id: '2', name: 'Moto', category: 'vehiculos', description: 'Una moto veloz', price: 5000 },
  { id: '3', name: 'Laptop', category: 'tecnologia', description: 'Una laptop potente', price: 1500 },
  { id: '4', name: 'Smartphone', category: 'tecnologia', description: 'Un smartphone moderno', price: 800 },
  // ...otros productos
];

export const getItems = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(items.filter(item => item.category === categoryId));
      } else {
        resolve(items);
      }
    }, 1000);
  });
};

export const getItem = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.find(item => item.id === itemId));
    }, 1000);
  });
};

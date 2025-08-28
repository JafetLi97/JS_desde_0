// pasando this

function saludar(...rest) {
    console.log(this, rest);
}

saludar.call({prop: 'holamundo'}, 1, 5); 
saludar.apply({prop: 'holamundo'}, [1, 5]); 
saludar.bind({prop: 'holamundo'}, 1, 5)();
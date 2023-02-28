class Product {
    constructor(title, description, price, thumbnail, code, stock) {

        this.title = title,
            this.description = description,
            this.price = price,
            this.thumbnail = thumbnail,
            this.code = code,
            this.stock = stock
    }
}

class ProductManager {
    constructor() {
        this.products = [];
        this.lastId = 0;
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            throw new Error("Todos los campos son obligatorios");
        }

        const existingProduct = this.products.find(p => p.code === product.code);
        if (existingProduct) {
            throw new Error("El código del producto ya existe");
        }

        product.id = ++this.lastId;
        this.products.push(product);
    }

    getProducts() {
        return this.products
    }

    getProductById(id) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                return this.products[i];
            }
        }
        console.error('Not found');
        return null;
    }

}

const productManager = new ProductManager();




try {
    productManager.addProduct(new Product("Teclado", "Teclado", 20, 'abc', 1, 10));
    productManager.addProduct(new Product("Monitor", "Monitor", 12, 'abc', 2, 10));
    productManager.addProduct(new Product("Monitor", "Monitor", 12, 'abc', 2, 10));
} catch (error) {
    console.error(error.message);
}

console.log(productManager.getProducts());

console.log(productManager.getProductById(1));
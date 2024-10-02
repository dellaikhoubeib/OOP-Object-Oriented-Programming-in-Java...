class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Méthode pour calculer le prix total de l'article (produit * quantité)
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Méthode pour obtenir le total des articles dans le panier
    getTotalItems() {
        return this.items.length;
    }

    // Méthode pour ajouter des articles au panier
    addItem(product, quantity) {
        // Vérifier si le produit est déjà dans le panier
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            // Si le produit existe, augmenter la quantité
            existingItem.quantity += quantity;
        } else {
            // Sinon, créer un nouvel article
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
    }

    // Méthode pour supprimer des articles du panier
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Méthode pour afficher les articles du panier
    displayCart() {
        this.items.forEach(item => {
            console.log(`Produit: ${item.product.name}, Quantité: ${item.quantity}, Prix total: ${item.getTotalPrice()} `);
        });
    }

    // Méthode pour obtenir le prix total du panier
    getTotalCartPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}


// Créer des produits
const product1 = new Product(1, 'Ordinateur Portable', 1200);
const product2 = new Product(2, 'Téléphone', 800);
const product3 = new Product(3, 'Casque', 150);

// Créer un panier d'achat
const cart = new ShoppingCart();

// Ajouter des articles au panier
cart.addItem(product1, 1); // 1 Ordinateur Portable
cart.addItem(product2, 2); // 2 Téléphones
cart.addItem(product3, 3); // 3 Casques

// Afficher le panier
cart.displayCart();

// Supprimer un article du panier (par exemple, le produit avec id 2)
cart.removeItem(2);

// Afficher à nouveau le panier après suppression
console.log('--- Panier après suppression ---');
cart.displayCart();

// Obtenir le prix total du panier
console.log(`Prix total du panier: ${cart.getTotalCartPrice()}`);

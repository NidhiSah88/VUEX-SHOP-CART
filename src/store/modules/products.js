import axios from "axios";

const state = {
    products:[

    ]
};
// {
//     id:1,
//     title:"product1",
//     price:"200"
// },
// {
//     id:2,
//     title:"product2",
//     price:"400"
// },{
//     id:3,
//     title:"product3",
//     price:"500"
// },
const getters = {
    // store all products array in allproducts from state
    allProducts: state => state.products
};
const actions = {
    async getProducts({commit}){
        const response = await axios.get("http://localhost:3000/products");
        commit("setProducts",response.data);
    },
    // form se add hone k baad post hoga then use jo data send krenge wo add hoga url me 
    async addProduct({commit},product){
        const response = await axios.post("http://localhost:3000/products",product);
        commit("newProduct", response.data);
    },
    //to delete particular product
    async deleteProduct({commit}, id){
        await axios.delete(`http://localhost:3000/products/${id}`);
        commit("removeProduct", id);
    }
};
const mutations = {
    setProducts:(state,products) => (state.products = products),
   //adding product
    newProduct: (state,product) => state.products.unshift(product),
    removeProduct: (state, id) =>
    (state.products = state.products.filter(product => product.id !== id))
};

// code from : https://github.com/tauseef89/vuex-shop
export default{
    state,
    getters,
    actions,
    mutations
}
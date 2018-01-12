//dados reais viriam do banco de dados do backend.

var produtos = [

    {//0
        codigo: 50,
        imagem: {
            src: ".\img\camiseta.jpg",
            alt: "camiseta roxa",
        },
        descricao: "Puma Golf Ragian Tech Polo Tee",
        color: "purple",
        size: "XXL",
        preco: 72,
        qtde: 3,
    },

    {//1
        codigo: 99,
        imagem: {
            src: ".\img\shoes.jpg",
            alt: "tênis de corrida azul",
        },
        descricao: "Nike Men´s Running Shoes",
        color: "orange",
        size: "43",
        preco: 129,
        qtde: 1,
    },

    {//2
        codigo: 287,
        imagem: {
            src: ".\img\jacket.jpg",
            alt: "jaquete de neve preta",
        },
        descricao: "DC Men´s Axis Snowboard Jacket",
        color: "blue",
        size: "S",
        preco: 89,
        qtde: 2,
    },
]

    // <tr class="cart-item row" >
    //     <td class="cart-item__description col-cl-2 col-tb-4 col-dk-6">
    //         <i class="fa fa-times-circle"></i>
    //         <img class="description__image" src=".\img\camiseta.jpg" alt="camiseta roxa">
    //         <div class="description-details">
    //             <h4 class="description-details__title">Puma Golf Ragian Tech Polo Tee</h4>
    //             <div class="description-details__info">
    //                 <p class="description-details-info__label">Color: </p>
    //                 <i class="fa fa-circle" aria-hidden="true"></i>
    //                 <p class="description-details-info__label">Size:</p>
    //                 <p class="description-details__size-selected">XXL</p>
    //             </div>
    //         </div>
    //     </td>
    //     <td class="item-price col-cl-1 col-tb-2 col-dk-2">
    //         <div class="item-price__details">
    //             <p class="currency">$</p>
    //             <p class="value">$72</p>
    //         </div>
    //     </td>
    //     <td class="item-quantity col-cl-1 col-tb-2 col-dk-2">
    //         <input type="number" class="item-quantity__value">
    //     </td>
    //     <td class="item-total col-cl-1 col-tb-2 col-dk-2">
    //         <div class="item-total__details">
    //             <p class="currency">$</p>
    //             <p class="value">216</p>
    //         </div>
    //     </td>
    // </tr>
   
            function listarprodutos() {
    //Gerar o temploate através do array de objetos
    var template = "";

    for(var i=0; i <produtos.length; i++) {
        template += '<tr class="cart-item row">';
        template += '<td class="cart-item__description col-cl-2 col-tb-4 col-dk-6">'; 
        template += '<i class="fa fa-times-circle"></i>'; 
        template +='<img class="description__image" src=".\img\camiseta.jpg" alt="camiseta roxa">';
        template += '<div class="description-details">'; 
        template += '<h4 class="description-details__title">Puma Golf Ragian Tech Polo Tee</h4>';
        template += ' <div class="description-details__info">';
        template += '<p class="description-details-info__label">Color: </p>';
        template += '<i class="fa fa-circle" aria-hidden="true"></i>';
        template += '<p class="description-details-info__label">Size:</p>';
        template += '<p class="description-details__size-selected">XXL</p>';
        template += '</div>';
        template += '</div>';
        template += '</td>';
        template += '<td class="item-price col-cl-1 col-tb-2 col-dk-2">';
        template += '<div class="item-price__details">';
        template += '<p class="currency">$</p>';
        template += '<p class="value">$72</p>';
        template += '</div>';
        template += '</td>';
        template += '<td class="item-quantity col-cl-1 col-tb-2 col-dk-2">';
        template += '<input type="number" class="item-quantity__value">';
        template += '</td>';
        template += '<td class="item-total col-cl-1 col-tb-2 col-dk-2">';
        template += '<div class="item-total__details">';
        template += '<p class="currency">$</p>';
        template += '<p class="value">216</p>';
        template += '</div>';
        template += '</td>';
        template += '</tr>';
    }

    document.getElementById('products').innerHTML = template;
}

console.log(produtos);
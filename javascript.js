const wrapper=document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products=[
    {
        id:1,
        title:"Air Force",
        price:4999,
        colors:[
        {
            code:"black",
            img:"img/air.png",
        },
        {
            code:"darkblue",
            img:"img/air2.png",
        },          
      ],
    },

    
    {
        id:2,
        title:"Jordan",
        price:8999,
        colors:[
        {
            code:"white",
            img:"img/jordan.png",
        },
        {
            code:"green",
            img:"img/jordan2.png",
        },
      ],
    },



    {
        id:3,
        title:"Blazer",
        price:9999,
        colors:[
        {
            code:"white",
            img:"img/blazer.png",
        },
        {
            code:"green",
            img:"img/blazer2.png",
        },
      ],
    },


    {
        id:4,
        title:"Crater",
        price:6999,
        colors:[
        {
            code:"black",
            img:"img/crater.png",
        },
        {
            code:"white",
            img:"img/crater2.png",
        },
      ],
    },



    {
        id:5,
        title:"Hippie",
        price:5999,
        colors:[
        {
            code:"gray",
            img:"img/hippie.png",
        },
        {
            code:"black",
            img:"img/hippie2.png",
        },
      ],
    },
]


let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");



menuItems.forEach((item,index) => {
    item.addEventListener("click", ()=>{
        //changing the slide
       wrapper.style.transform=`translateX(${-100 * index}vw)`;

       //changing tht choosen product
       choosenProduct=products[index]

       //change texts  of current product
       currentProductTitle.textContent= choosenProduct.title;
       currentProductPrice.textContent= choosenProduct.price;
       currentProductImg.src= choosenProduct.colors[0].img;

       //assiigning new colors
       currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor = choosenProduct.colors[index].code;
       });
    });
});

//img with color
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });


//for sizes
currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });
        size.style.backgroundColor="black";
        size.style.color="white";
    });
});


const productButton =document.querySelector(".productButton");
const payment =document.querySelector(".payment");
const close =document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})
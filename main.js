//object arrays (local data only)
const categories = [
  {
    id: 1,
    category: "Shirts",
    brand: "Shein",
    img: "./img/shirt1.webp",
    name: "Men Quarter Zip Ribbed Knit Polo",
    price: "80.40",
  },
  {
    id: 2,
    category: "Polo",
    brand: "Shein",
    img: "./img/shirt2.webp",
    name: "Men Solid Ribbed Knit Polo Shirt",
    price: "85.40",
  },
  {
    id: 3,
    category: "Polo",
    img: "./img/shirt3.webp",
    brand: "Shein",
    name: "Men Half Zip Solid Polo Shirt",
    price: "75.40",
  },
  {
    id: 4,
    category: "Polo",
    img: "./img/shirt4.webp",
    brand: "Shein",
    name: "Men Quarter Zip Ribbed Knit Polo",
    price: "90.40",
  },
  {
    id: 5,
    category: "Polo",
    brand: "Dazy",
    img: "./img/shirt5.webp",
    name: "Men Drop Shoulder Tee",
    price: "55.40",
  },
  {
    id: 6,
    category: "Shirts",
    brand: "Dazy",
    img: "./img/shirt6.webp",
    name: "Men Notched Neckline Solid Tee",
    price: "58.40",
  },
  {
    id: 7,
    category: "Shirts",
    brand: "Dazy",
    img: "./img/shirt7.webp",
    name: "Men Letter Graphic Tee",
    price: "53.30",
  },
  {
    id: 8,
    category: "Shirts",
    brand: "Dazy",
    img: "./img/shirt8.webp",
    name: "Men Solid Notched Neck Tee",
    price: "82.40",
  },
  {
    id: 9,
    category: "Jackets",
    brand: "Shein",
    img: "./img/s9.webp",
    name: "Men Letter Embroidery Two All Sizes",
    price: "100.40",
  },
  {
    id: 10,
    category: "Jackets",
    brand: "Shein",
    img: "./img/s10.webp",
    name: "Block Slogan Graphic Varsity Jacket",
    price: "105.40",
  },
  {
    id: 11,
    category: "Jackets",
    brand: "Shein",
    img: "./img/s11.webp",
    name: "Men Double Breasted Lapel Neck Drop",
    price: "125.40",
  },
  {
    id: 12,
    category: "Jackets",
    brand: "Shein",
    img: "./img/s12.webp",
    name: "Contrast Trim Drop Shoulder Coat All",
    price: "115.40",
  },
  {
    id: 13,
    category: "Jeans",
    brand: "Dazy",
    img: "./img/s13.webp",
    name: "Men Light Wash Slant Pocket Jeans All Sizes",
    price: "89.40",
  },
  {
    id: 14,
    category: "Jeans",
    brand: "Dazy",
    img: "./img/s14.webp",
    name: "Men Skull And Floral Print Wide Leg Jeans ALl Sizes",
    price: "92.40",
  },
  {
    id: 15,
    category: "Shoes",
    brand: "Dazy",
    img: "./img/s15.webp",
    name: "Men Colorblock Lace-up Front Skate Shoes All Sizes",
    price: "93.30",
  },
  {
    id: 16,
    category: "Shoes",
    brand: "Shein",
    img: "./img/s21.webp",
    name: "Shein Minimalist Buckle Decor Strappy Sandals All Sizes",
    price: "193.30",
  },
  {
    id: 17,
    category: "Jeans",
    brand: "Dazy",
    img: "./img/s17.webp",
    name: "DAZY Men Washed Straight Leg Jeans All Sizes",
    price: "112.40",
  },
  {
    id: 18,
    category: "Jeans",
    brand: "Dazy",
    img: "./img/s18.webp",
    name: "DAZY High Waist Straight Leg Ripped Jeans",
    price: "124.40",
  },
  {
    id: 19,
    category: "Shoes",
    brand: "Shein",
    img: "./img/s19.webp",
    name: "Shein Minimalist Slingback Wedge Sandals All Sizes",
    price: "153.30",
  },
  {
    id: 20,
    category: "Shoes",
    brand: "Shein",
    img: "./img/s20.webp",
    name: "Snakeskin Embossed Clear Pyramid Heeled Thong Sandals",
    price: "183.30",
  },
  {
    id: 21,
    category: "Accessories",
    brand: "Dazy",
    img: "./img/s16.webp",
    name: "Letter Embroidered Baseball Cap",
    price: "42.40",
  },
  {
    id: 22,
    category: "Accessories",
    brand: "Dazy",
    img: "./img/s22.webp",
    name: "Men Square Frame Fashion Glasses",
    price: "43.40",
  },
  {
    id: 23,
    category: "Accessories",
    brand: "Dazy",
    img: "./img/s23.webp",
    name: "Men Simple Baseball Cap",
    price: "23.40",
  },
  {
    id: 24,
    category: "Accessories",
    brand: "Dazy",
    img: "./img/s24.webp",
    name: "Men Slogan Graphic Crew Socks",
    price: "33.40",
  },
];

// variables
const btnContainer = document.querySelector(".btn-container");
const productContainer = document.querySelector(".pro-container");

// dynamic buttons when website loads (event)
window.addEventListener("DOMContentLoaded", () => {
  //display products
  displayShirts(categories);

  //dynamic buttons function
  displayButtons(categories); //what we insert is the object array because is will be pass to the parameter
});

const displayButtons = (array) => {
  //change the parameter to array because whatever array is inserted it will be reduce
  //grab the object array and reduce it so when another category is added it will update automatically the buttons
  const showBtns = array.reduce(
    //change it to array or use the parameter
    (values, array) => {
      //if the value is not included in the category it will be push or added to the array of category
      if (!values.includes(array.category)) {
        values.push(array.category);
      }
      return values;
    },
    //the default of the first index
    ["All"]
  );

  //after reducing we must map it so that we can manipulate the object array like changing the innerhtml
  const mappedBtns = showBtns
    .map((item) => {
      //item is now the new value of category
      return `<button class="filterbtn" type="button" data-id=${item}>${item}</button>`;
    })
    .join(""); //join para mawala yung comma in between (,)

  //changing the innerhtml with the mapped buttons
  btnContainer.innerHTML = mappedBtns;

  //grab all the buttons
  const filterBtns = document.querySelectorAll(".filterbtn");

  //loop sa lahat ng btns
  filterBtns.forEach((btn) => {
    //add click event each btn
    btn.addEventListener("click", (e) => {
      //use current target para malaman kung anong button ang cliniclick
      const specificCategory = e.currentTarget.dataset.id; //with their own dataset
      const filteredCategory = categories.filter((array) => {
        //i filter natin yung object array which is categories
        if (array.category === specificCategory) {
          //if ang specific sa category daw mag match sa array natin which is ang categories and their category then i rereturn natin ang array object which is ang categories
          return categories;
        }
      });
      if (specificCategory === "All") {
        //if ang specific category daw mag match sa data set na 'All' i call natinn yung function na displayshirts kanina
        displayShirts(categories);
      } else {
        //else or pag hindi all or i mean the rest data sets which are (shirts,polo,jackets,jeans,jackets,accessories) i call natin yung display shirts pero yung na filtered na
        displayShirts(filteredCategory);
      }
    });
  });
};

// display shirts function
displayShirts = (array) => {
  //yung array na parameter is yung object array natin which is ang categories

  //display shirts
  const displayShirts = array
    .map((item) => {
      //i map natin yung object array para ma edit natin
      //change natin with their own object value
      return `<div class="product"> 
    <img src=${item.img} alt=${item.name} />
    <div class="description">
      <h4>${item.brand}</h4>
      <h5 class="prod2">${item.name}</h5>
      <div class="star">
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
      </div>
    </div>
    <div class="footer">
      <h4>$${item.price}</h4>
    </div>
  </div>`;
    })
    .join(""); //join ulit para mawala comma (,)
  productContainer.innerHTML = displayShirts; //change natin ang html sa nagawa natin sa taas

  //add link to the first product mwehehehe, i learned setAttribute now
  const firstProduct = document.querySelector(".product");
  firstProduct.addEventListener("click", () => {
    firstProduct.setAttribute(
      "onclick",
      (window.location.href = "sproduct.html")
    );
  });
};

// automatic date
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

// navbar
const bar = document.querySelector("#bar");
const navbar = document.querySelector("#navbar");
const hide = document.querySelector("#close");

bar.addEventListener("click", () => {
  navbar.classList.add("active");
});

hide.addEventListener("click", () => {
  navbar.classList.remove("active");
});

// dark mode

//variables
const checkbox = document.querySelector("#checkbox");
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");
//local storage
let mandellaMode = localStorage.getItem("mandellaMode");
let checkedBox = localStorage.getItem("checkedBox");

const enableMandellaMode = () => {
  sections.forEach((section) => {
    section.classList.add("dark-mode");
  });
  footer.classList.add("dark-mode");

  //update darkmode in the local storage
  localStorage.setItem("mandellaMode", "enabled");
};

const disableMandellaMode = () => {
  sections.forEach((section) => {
    section.classList.remove("dark-mode");
  });
  footer.classList.remove("dark-mode");

  //update darkmode in the local storage
  localStorage.setItem("mandellaMode", "disabled");
};

if (mandellaMode === "enabled") {
  enableMandellaMode();
}

checkbox.addEventListener("click", () => {
  mandellaMode = localStorage.getItem("mandellaMode");
  if (mandellaMode !== "enabled") {
    enableMandellaMode();
  } else {
    disableMandellaMode();
  }
});

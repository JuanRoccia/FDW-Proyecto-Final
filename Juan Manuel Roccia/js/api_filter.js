document.addEventListener("DOMContentLoaded", function() {

  // Funcion para filtrar los productos
  function renderProducts(products) {
    // Limpiar los contenedores de productos
    additionalProductsContainer.innerHTML = '';
    additionalProductsContainerFx.innerHTML = '';
    mainProductContainer.innerHTML = '';
    mainProductContainer2.innerHTML = '';
    
    // FREE PRODUCTS
    // freeProductsContainer.innerHTML = '';
    // FREE PRODUCTS END

    // Verificar si hay productos
    if (products.length > 0) {
      // Obtengo el producto principal
      // let mainProduct = products[0];
      let mainProduct = products.find(product => product.id == 1);

      // Si no hay ningún producto con id diferente de 1, selecciono el primer producto
      if (!mainProduct) {
        mainProduct = products[0];
      }

      // Divido el nombre del producto en partes
      let mainNameParts = mainProduct.name.split(' ');

      // HTML para el producto principal SoftwareInstrument
      let mainProductHTML = `
      <div class="product-description">
          <h1>
              <span>${mainNameParts[0]}</span>
              <small>${mainNameParts[1]}</small>
          </h1>
          <p>${mainProduct.description}</p>
          <button type="button" class="button-container btn-container">
              <div class="button-background"></div>
              <div class="button-slide"></div>
              <a id="btn" class="custom-button" role="button" href="">Discover the range</a>
          </button> 
      </div>
      <div class="main-image-container">
          <div class="product-image">
              <div data-for="btn" id="wrap" class="wrap-image">
                  <img data-for="btn" id="img" src="${mainProduct.image}" alt="image product">
              </div>    
          </div>
      </div>
      `;
      
      // HTML para el producto principal SoftwareEffect
      let mainProductFxHTML = `
      <div class="product-description">
          <h1>
              <span>${mainNameParts[0]}</span>
              <small>${mainNameParts[1]}</small>
          </h1>
          <p>${mainProduct.description}</p>
          <button type="button" class="button-container btn-container">
              <div class="button-background btn-golden"></div>
              <div class="button-slide"></div>
              <a id="btn" class="custom-button" role="button" href="">Discover the range</a>
          </button> 
      </div>
      <div class="main-image-container">
          <div class="product-image">
              <div data-for="btn" id="wrap" class="wrap-image bg-golden">
                  <img data-for="btn" id="img" src="${mainProduct.image}" alt="image product">
              </div>    
          </div>
      </div>
      `;
      
      // Verificar si el producto principal es un Software Instrument o un Software Effect
      if (mainProduct.isSoftwareInstrument) {
        // Agregar el HTML al contenedor del producto principal
        mainProductContainer.innerHTML = mainProductHTML;
      } else if (mainProduct.isSoftwareEffect) {
        // Agregar el HTML al contenedor del producto principal 2
        mainProductContainer2.innerHTML = mainProductFxHTML;
      }
    }
    
    // Numeros de los productos
    let n = 1;

     // Crear y agregar los elementos HTML 
    for (let i = 1; i < products.length; i++) {
        
      // Obtengo los productos adicionales
        let product = products[i];
        // Crear el elemento HTML para el producto SoftwareInstrument
        let productDivIns = document.createElement('div');
        productDivIns.classList.add('bg-grey');

        // Divido el nombre del producto en partes
        let nameParts = product.name.split(' ');

        // Crear el HTML para los productos SoftwareInstrument
        productDivIns.innerHTML = `
        <div class="offers-image bg-transparent">
          <div data-for="btn${n}" id="wrap${n}" class="wrap-image bg-transparent">
            <img data-for="btn${n}" id="img${n}" src="${product.image}" alt="${product.name}">
          </div>    
        </div>
        <div class="offers-description bg-transparent">
          <h2>_${nameParts[0]}<b>${nameParts[1] ? nameParts[1] : ''}</b> ${nameParts[2] ? nameParts[2] : ''} ${nameParts[3] ? nameParts[3] : ''}</h2>
          <p>${product.description}</p>
          <button type="button" class="button-container">
            <div class="button-background"></div>
            <div class="button-slide"></div>
            <div>
              <a id="btn${n}" class="custom-button" role="button" href="">
                <span class="price-formatter">
                  <span class="">${product.price}</span>
                </span>Buy Now
              </a>
            </div>
          </button>
        </div>
      `;

      // Crear el elemento HTML para el producto SoftwareEffect
        let productDivFx = document.createElement('div');
        productDivFx.classList.add('bg-grey');
      // Crear el HTML para los productos SoftwareEffect
      productDivFx.innerHTML = `
      <div class="offers-image bg-transparent">
        <div data-for="btn${n}" id="wrap${n}" class="wrap-image bg-golden">
          <img data-for="btn${n}" id="img${n}" src="${product.image}" alt="${product.name}">
        </div>    
      </div>
      <div class="offers-description bg-transparent">
        <h2>_${nameParts[0]}<b>${nameParts[1] ? nameParts[1] : ''}</b> ${nameParts[2] ? nameParts[2] : ''} ${nameParts[3] ? nameParts[3] : ''}</h2>
        <p>${product.description}</p>
        <button type="button" class="button-container">
          <div class="button-background btn-golden"></div>
          <div class="button-slide"></div>
          <div>
            <a id="btn${n}" class="custom-button" role="button" href="">
              <span class="price-formatter">
                <span class="">${product.price}</span>
              </span>Buy Now
            </a>
          </div>
        </button>
      </div>
    `;

    // FREE PRODUCTS
    let productDivFree = document.createElement('div');
    productDivFree.classList.add('bg-grey');

    // Crear el HTML para los productos FreeSoftware
    productDivFree.innerHTML = `
    <div class="offers-image bg-transparent">
        <div data-for="btn${n}" id="wrap${n}" class="wrap-image bg-golden">
          <img data-for="btn${n}" id="img${n}" src="${product.image}" alt="${product.name}">
        </div>    
      </div>
      <div class="offers-description bg-transparent">
        <h2>_${nameParts[0]}<b>${nameParts[1] ? nameParts[1] : ''}</b> ${nameParts[2] ? nameParts[2] : ''} ${nameParts[3] ? nameParts[3] : ''}</h2>
        <p>${product.description}</p>
        <button type="button" class="button-container">
          <div class="button-background btn-golden"></div>
          <div class="button-slide"></div>
          <div>
            <a id="btn${n}" class="custom-button" role="button" href="">
              <span class="price-formatter">
                <span class="">${product.price}</span>
              </span>Buy Now
            </a>
          </div>
        </button>
      </div>
    `;
    // FREE PRODUCTS END

      // Incremento el numero de los productos
      n = n + 1;

      // Agregar el producto al contenedor correspondiente
      if (product.isSoftwareInstrument) {
        additionalProductsContainer.appendChild(productDivIns);
      } else if (product.isSoftwareEffect) {
        additionalProductsContainerFx.appendChild(productDivFx);
      } else if (product.isFree) {
        // additionalProductsContainer.appendChild(productDivFree);

        // FREE PRODUCTS
        freeProductsContainer.appendChild(productDivFree);
        //  FREE PRODUCTS END

      }

      // Verificar si el contenedor de productos adicionales está vacío
      if (additionalProductsContainer.innerHTML === '') {
        // Si está vacío, ocultarlo
        additionalProductsContainer.style.display = 'none';
      } else {
        // Si no está vacío, mostrarlo
        additionalProductsContainer.style.display = 'flex';
      }
      // Verificar si el contenedor de productos adicionales FX está vacío
      if (additionalProductsContainerFx.innerHTML === '') {
        // Si está vacío, ocultarlo
        additionalProductsContainerFx.style.display = 'none';
      } else {
        // Si no está vacío, mostrarlo
        additionalProductsContainerFx.style.display = 'flex';
      }
      // Verificar si el contenedor del producto principal 2 está vacío
      if (mainProductContainer2.innerHTML === '') {
        // Si está vacío, ocultarlo
        mainProductContainer2.style.display = 'none';
      } else {
        // Si no está vacío, mostrarlo
        mainProductContainer2.style.display = 'flex';
      }
      // Verificar si el contenedor del producto principal 2 está vacío
      if (mainProductContainer.innerHTML === '') {
        // Si está vacío, ocultarlo
        mainProductContainer.style.display = 'none';
      } else {
        // Si no está vacío, mostrarlo
        mainProductContainer.style.display = 'flex';
      }

      // FREE PRODUCTS
      // Verificar si el contenedor de productos gratuitos está vacío
      // if (freeProductsContainer.innerHTML === '') {
      //   // Si está vacío, ocultarlo
      //   freeProductsContainer.style.display = 'none';
      // } else {
      //   // Si no está vacío, mostrarlo
      //   freeProductsContainer.style.display = 'flex';
      // }
      // FREE PRODUCTS END

      // Llama a la función addHoverListeners() que está definida en main.js
      addHoverListeners();
    }
  }


  // Comportamiento dinámico API
  // URL de la API desarrollada en Mockachino
  const apiURL = 'https://www.mockachino.com/d9d8fe7f-bc38-4c/products';

  // Obtengo todos los enlaces del menú
  let menuLinks = document.querySelectorAll('.filter-menu a');

  // Obtengo los contenedores de productos
  let additionalProductsContainer = document.querySelector('.exclusive-offers');
  let additionalProductsContainerFx = document.querySelector('.exclusive-offers-fx');
  let mainProductContainer = document.querySelector('.main-product1');
  let mainProductContainer2 = document.querySelector('.main-product2');

  // FREE PRODUCTS
  let freeProductsContainer = document.querySelector('.free-products');
  // FREE PRODUCTS END

  // Realizar una solicitud GET a la API
  fetch(apiURL)
      .then(response => {
          // Comprobar si la solicitud fue exitosa
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }

          // Si la solicitud fue exitosa, devolver los datos como JSON
          return response.json();
      })
      .then(data => {
          // Aca puedo usar los datos de los productos
          let products = data.products;

          // Itero sobre cada enlace
          menuLinks.forEach(function(link) {
              // Agrego un controlador de eventos de click a cada enlace
              link.addEventListener('click', function(event) {
                  // Evito que el enlace navegue a otra página
                  event.preventDefault();

                  // Remuevo la clase 'active' de todos los enlaces
                  menuLinks.forEach(link => link.classList.remove('active'));

                  // Agrego la clase 'active' al enlace clickeado
                  event.target.classList.add('active');

                  // Obtengo la categoría del enlace
                  let category = event.target.textContent.trim().substring(1);

                  // Filtro los productos basándome en la categoría
                  let filteredProducts;
                  if (category === 'All Products') {
                      filteredProducts = products;
                  } else if (category === 'Free') {
                      filteredProducts = products.filter(product => product.isFree);
                  } else if (category === 'Software Instruments') {
                      filteredProducts = products.filter(product => product.isSoftwareInstrument);
                  } else if (category === 'Software Effects') {
                      filteredProducts = products.filter(product => product.isSoftwareEffect);
                  }

                  // Limpio el contenedor de productos
                  additionalProductsContainer.innerHTML = '';
                  additionalProductsContainerFx.innerHTML = '';
                  mainProductContainer.innerHTML = '';
                  mainProductContainer2.innerHTML = '';

                  // FREE PRODUCTS
                  // freeProductsContainer.innerHTML = '';
                  // FREE PRODUCTS END

                  // Renderizo los productos filtrados
                  renderProducts(filteredProducts, additionalProductsContainer, additionalProductsContainerFx);
              });
          });

          // RESPONSIVE FILTER MENU
          // Definir products como una variable global
          // Elemento select
          let filterSelect = document.querySelector('#filter-select');
          // Controlador de eventos
          filterSelect.addEventListener('change', function(event) {
              // Obtén la categoría seleccionada
              let category = event.target.value;
          
              // Filtro los productos basándome en la categoría
              let filteredProducts;
              if (category === 'all-products') {
                  filteredProducts = products;
              } else if (category === 'free') {
                  filteredProducts = products.filter(product => product.isFree);
              } else if (category === 'software-instruments') {
                  filteredProducts = products.filter(product => product.isSoftwareInstrument);
              } else if (category === 'software-effects') {
                  filteredProducts = products.filter(product => product.isSoftwareEffect);
              }
          
              // Limpio el contenedor de productos
              additionalProductsContainer.innerHTML = '';
              additionalProductsContainerFx.innerHTML = '';
              mainProductContainer.innerHTML = '';
              mainProductContainer2.innerHTML = '';
          
              // Renderizo los productos filtrados
              renderProducts(filteredProducts, additionalProductsContainer, additionalProductsContainerFx);
          });
           
      })
      .catch(error => {
          // Si hubo un error en la solicitud, imprimir el error en la consola
          console.log('Hubo un problema con la solicitud fetch: ', error);
      });

});
// Me aseguro de que se haya cargado todo el DOM. 
document.addEventListener("DOMContentLoaded", function() {
    // Comportamiento dinámico API
    // URL de la API desarrollada en Mockachino
    const apiURL = 'https://www.mockachino.com/d9d8fe7f-bc38-4c/products';

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
            // Pruebo imprimirlos en la consola
            // console.log(data);

            // Aca puedo usar los datos de los productos
            let products = data.products;

            // Obtengo el contenedor de los productos (primera sección)
            let mainProductContainer = document.querySelector('.main-product');
            let additionalProductsContainer = document.querySelector('.exclusive-offers');

            // Creo el producto principal
            let mainProduct = products[0];
            let nameParts = mainProduct.name.split(' ');
            let part1 = nameParts[0];
            let part2 = nameParts[1];
            mainProductContainer.querySelector('h1 span').textContent = part1;
            mainProductContainer.querySelector('h1 small').textContent = part2;
            mainProductContainer.querySelector('p').textContent = mainProduct.description;
            mainProductContainer.querySelector('img').src = mainProduct.image;

            // Creo los productos adicionales
            let softwareInstruments = products.filter(product => product.isSoftwareInstrument);

            // Numeros de los productos
            let n = 1;

            for (let i = 1; i < softwareInstruments.length; i++) {
                let product = softwareInstruments[i];

                // Divido el nombre del producto en partes
                let nameParts = product.name.split(' ');

                // Creo un elemento div para cada producto
                let productDiv = document.createElement('div');

                // Para agregarle una clase al div
                productDiv.classList.add('bg-grey');

                // Creo el HTML para los productos
                productDiv.innerHTML = `
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
                // Incremento el numero de los productos
                n = n + 1;
                // Imprimo en consola para verificar la estructura
                // console.log(productDiv.innerHTML);
                
                // Agrego el producto al contenedor
                additionalProductsContainer.appendChild(productDiv);
            }

            // SEGUNDA SECCION DE PRODUCTOS

            // Obtengo el contenedor de los productos (segunda sección)
            let mainProductContainer2 = document.querySelector('.main-product2');
            let additionalProductsContainerFx = document.querySelector('.exclusive-offers-fx');

            // Creo el producto principal 2
            let mainProductFx = products[5];
            let namePartsFx = mainProductFx.name.split(' ');
            let part1Fx = namePartsFx[0];
            let part2Fx = namePartsFx[1];
            mainProductContainer2.querySelector('h1 span').textContent = part1Fx;
            mainProductContainer2.querySelector('h1 small').textContent = part2Fx;
            mainProductContainer2.querySelector('p').textContent = mainProductFx.description;
            mainProductContainer2.querySelector('img').src = mainProductFx.image;
            
            // Creo los productos adicionales 2
            let softwareEffects = products.filter(product => product.isSoftwareEffect);

            // Numeros de los productos
            let num = 6;

            for (let i = 1; i < softwareEffects.length; i++) {
                let product = softwareEffects[i];

                // Divido el nombre del producto en partes
                let nameParts = product.name.split(' ');

                // Creo un elemento div para cada producto
                let productDiv = document.createElement('div');

                // Para agregarle una clase al div
                productDiv.classList.add('bg-grey');

                // Creo el HTML para los productos
                productDiv.innerHTML = `
                <div class="offers-image bg-transparent">
                    <div data-for="btn${num}" id="wrap${num}" class="wrap-image bg-golden">
                        <img data-for="btn${num}" id="img${num}" src="${product.image}" alt="${product.name}">
                    </div>
                </div>
                <div class="offers-description bg-transparent">
                    <h2>_${nameParts[0]}<b> ${nameParts[1] ? nameParts[1] : ''}</b> ${nameParts[2] ? nameParts[2] : ''} ${nameParts[3] ? nameParts[3] : ''}</h2>
                    <p>${product.description}</p>
                    <button type="button" class="button-container">
                        <div class="button-background btn-golden"></div>
                        <div class="button-slide"></div>
                        <div>
                            <a id="btn${num}" class="custom-button" role="button" href="">
                                <span class="price-formatter">
                                    <span class="">${product.price}</span>
                                </span>Buy Now
                            </a>
                        </div>
                    </button>
                </div>
                `;
                // Incremento el numero de los productos
                num = num + 1;
                // Imprimo en consola para verificar la estructura
                // console.log(productDiv.innerHTML);

                // Agrego el producto al contenedor
                additionalProductsContainerFx.appendChild(productDiv);
            }

            // Llama a la función addHoverListeners() que está definida en main.js
            addHoverListeners();

        })
        .catch(error => {
            // Si hubo un error en la solicitud, imprimir el error en la consola
            console.log('Hubo un problema con la solicitud fetch: ', error);
        });

});
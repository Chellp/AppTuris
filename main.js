function rederizarMapa(){
    var platform = new H.service.Platform({
        'apikey': 'yuVUo6JZN0WY2DXClC1QDo1lh6g2kykRIRi0o2kOBvM'
      });
    
    var defaultLayers = platform.createDefaultLayers();
    
    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
          zoom: 10,
          center: { lat: 52.5, lng: 13.4 }
    });
    
}

rederizarMapa()

// Textos em diferentes idiomas

const translations = {
  pt: {
    title: "Bem-Vindo ao nosso site.",
    description: "Escolha um idioma no menu acima para mudar o conteúdo.",
    button: "Clique aqui",
    footer: "Todos os direitos reservados.",
  },

  en: {
    title: "Welcome to our website!",
    description: "Choose a language from the menu above to change the content.",
    button: "Click here",
    footer: "All rights reserved.",
  },

  es: {
    title: "¡Bienvenido a nuestro sitio web!",
    description: "Elija un idioma del menú de arriba para cambiar el contenido.",
    button: "Haz clic aquí",
    footer: "Todos los derechos reservados.",
  },
};

// Elementos do DOM

const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");
const buttonElement = document.getElementById("action-button");
const footerElemt = document.getElementById("footer-text");
const languageSelect = document.getElementById("language-select");

// Função para mudar o idioma

function changeLanguage(language) {
  const texts = translations[language];

  if(texts) {
    titleElement.textContent = texts.title;
    descriptionElement.textContent = texts.description;
    buttonElement.textContent = texts.button;
    footerElemt.textContent = texts.footer;
  }
}

// Evento de mudança de idioma

languageSelect.addEventListener("change",(event) => {
  const selectedLanguage = event.target.value;
  changeLanguage(selectedLanguage);
});

// Define o idioma padrão
changeLanguage("en");
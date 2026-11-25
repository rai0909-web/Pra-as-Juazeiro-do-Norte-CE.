// Em Javascript, este é o formato para comentar o código em linha: '//' seguido do comentário. 
// --------------------------------------------------------------------------------------------


// Cria as variáveis de latitude e longitude.
let latitude = -7.201556;
let longitude = -39.317729;

// Cria o objeto 'meuMapa' na <div> de id 'mapaLeaflet'.
let meuMapa = L.map('mapaLeaflet');

// Define o mapa com vista nas coordenadas especificadas com um zoom inicial de 8.
meuMapa.setView([latitude, longitude], 14);

// Cria o mapa usando as imagens ('tiles') do OpenStreetMap (OSM), com a opção de atribuição citando a fonte da base de imagens do OSM.
let mapaBase = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// Em seguida, o mapa é adicionado ao objeto 'meuMapa' com a função addTo().
mapaBase.addTo(meuMapa);

// Cria um marcador com as coordenadas especificadas.
let marcador1 = L.marker([ -7.201556, -39.317729]);

// Adiciona um marcador no mapa.
marcador1.addTo(meuMapa);

// Adiciona o texto ao marcador 'marcadorQuixadá, que é exibido quando clicado.
marcador1.bindPopup("<h1> Praça Padre Cícero, Juazeiro do Norte, CE.</h1> <img src= 'https://www.estevaooliveira.com.br/modulos/bairros/201901172025053296.jpeg' style='height: 150px'> <p> Localizada no centro de Juazeiro do Norte, no Cariri cearense, a Praça Padre Cícero é o principal marco urbano, político e religioso da cidade. Sua trajetória se confunde diretamente com o nascimento e o crescimento do município.</p>");

let marcador2 = L.marker([  -7.22597, -39.32749]);

// Adiciona um marcador no mapa.
marcador2.addTo(meuMapa);

// Adiciona o texto ao marcador 'marcadorQuixadá, que é exibido quando clicado.
marcador2.bindPopup("<h1>Praça do Giradouro, Juazeiro do Norte, CE. </h1> <img src='https://www.miseria.com.br/wp-content/uploads/2025/09/36531940_1742195082494171_1833099489406091264_n-660x360.webp' style='width: 300px'> <p> Localizada no centro de Juazeiro do Norte, no Cariri cearense, a Praça Padre Cícero é o principal marco urbano, político e religioso da cidade. Sua trajetória se confunde diretamente com o nascimento e o crescimento do município. </p>");
/*
Este é um comentário em bloco, formado por barra e asterisco.

// Função para "plotar" as coordenadas latitude e longitude em um lugar qualquer clicado no mapa.

// Cria o objeto 'balao' de popup do Leaflet.
let balao = L.popup();

// Define a função 'clicarNoMapa' tendo como argumento o lugar clicado no mapa com 'ponto'.
// Define o objeto 'balao' com a lat long do 'ponto' clicado, 
// em seguida define o conteúdo do popup,
// e abre o popup no mapa.

function clicarNoMapa(ponto) {
    balao
        .setLatLng(ponto.latlng)
        .setContent("Aqui é " + ponto.latlng)
        .openOn(meuMapa);
}

// Executa a função 'clicarNoMapa' com o click do mouse.
meuMapa.on('click', clicarNoMapa);

*/
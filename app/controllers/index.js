var article1 = new Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fermentum iaculis eu non diam phasellus. Varius morbi enim nunc faucibus a pellentesque sit. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Dui faucibus in ornare quam. Accumsan lacus vel facilisis volutpat est velit egestas dui. Blandit cursus risus at ultrices mi. Pellentesque elit ullamcorper dignissim cras tincidunt. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Id semper risus in hendrerit. Urna duis convallis convallis tellus. Non blandit massa enim nec dui", true, true);
var article2 = new Article("Mozilla Firefox", "Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018. Gregorio Samsa, svegliandosi una mattina da sogni agitati, si trovò trasformato, nel suo letto, in un enorme insetto immondo. Riposava sulla schiena, dura come una corazza, e sollevando un poco il capo vedeva il suo ventre arcuato, bruno e diviso in tanti segmenti ricurvi, in cima a cui la coperta da letto, vicina a scivolar giù tutta, si manteneva a fatica. Le gambe, numerose e sottili da far pietà, rispetto alla sua corporatura normale, tremolavano senza tregua in un confuso luccichio dinanzi ai suoi occhi. Cosa m’è avvenuto? pensò. Non era un sogno. La sua camera, una stanzetta di giuste proporzioni, soltanto un po’ piccola, se ne stava tranquilla fra le quattro ben note pareti. Sulla tavola, un campionario disfatto di tessuti - Samsa era commesso viaggiatore e sopra, appeso alla parete, un ritratto, ritagliato da lui - non era molto - da una rivista illustrata e messo dentro una bella cornice dorata: raffigurava una donna seduta, ma ben dritta sul busto, con un berretto e un boa di pelliccia; essa levava incontro a chi guardava un pesante manicotto, in cui scompariva tutto l’avambraccio.", true, true);
var article3 = new Article("Microsoft Edge", "Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer. In una terra lontana, dietro le montagne Parole, lontani dalle terre di Vocalia e Consonantia, vivono i testi casuali. Vivono isolati nella cittadina di Lettere, sulle coste del Semantico, un immenso oceano linguistico. Un piccolo ruscello chiamato Devoto Oli attraversa quei luoghi, rifornendoli di tutte le regolalie di cui hanno bisogno. È una terra paradismatica, un paese della cuccagna in cui golose porzioni di proposizioni arrostite volano in bocca a chi le desideri. Non una volta i testi casuali sono stati dominati dall’onnipotente Interpunzione, una vita davvero non ortografica. Un giorno però accadde che la piccola riga di un testo casuale, di nome Lorem ipsum, decise di andare a esplorare la vasta Grammatica. Il grande Oximox tentò di dissuaderla, poiché quel luogo pullulava di virgole spietate, punti interrogativi selvaggi e subdoli punti e virgola, ma il piccolo testo casuale non si fece certo fuorviare. Raccolse le sue sette maiuscole, fece scorrere la sua iniziale nella cintura, e si mise in cammino. Quando superò i primi colli dei monti Corsivi, si voltò a guardare un’ultima volta la skyline di Lettere, la sua città, la headline del villaggio Alfabeto e la subline della sua stessa strada, il vicolo Riga.", true, true);
var articles = [article1, article2, article3];

var sectionContainer = $("section");
var commentSection;

function addPost() {
    //creare un item HTML e aggiungerlo nel DOM.
    closeModal();
    var titleText = $("#articleTitleInput").val();
    var bodyText = $("#textArea").val();
    var pub = $("#pubblicSwitch1").is(':checked');
    var featured = $("#switch2").is(':checked');
    console.log(pub, featured);
    var Ar = new Article(titleText, bodyText, pub, featured);
    articles.push(Ar);
    if (pub) showArticle(Ar);
};

function showArticle(postArticle) {
    let uiTitle = `<h4>${postArticle.title}</h4>`;
    let uiBody = `<p class="article">${postArticle.body}</p>`;
    //commentSection = $(".commentSection").html();
    sectionContainer.append(uiTitle, uiBody, commentSection);
}

function closeModal() {
    $("#myModal").modal("hide");
};


function addItem() {
    let listElement = $("#inputList").val();
    console.log(listElement);
    let listContainer = $("#listContainer");
    if (listElement.val != " ") {
        let cb = `<input type="checkbox" class="list" ><label>${listElement}</label></br>`;
        listContainer.append(cb);
        listElement.value = "";
    } else {
        alert("plz add a value to item");
    }
};
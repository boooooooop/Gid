const taskNames = [
    "Meditera", "Städa", "Träna", "Laga mat",
    "Läs", "Skriv", "Måla", "Gå en promenad",
    "Tvätta", "Duscha", "Handla",
    "Lär dig ett nytt språk", "Ring en vän", "Organisera din garderob",
    "Titta på en dokumentär", "Öva på ett musikinstrument",
    "Planera en helgutflykt", "Volontärarbete för en lokal välgörenhet",
    "Prova en ny hobby", "Gör en naturvandring", "Besök ett museum",
    "Skriv ett tackkort", "Plantera en trädgård", "Utforska en ny stadsdel",
    "Gör en god gärning", "Deltag i en träningsklass", "Prova ett nytt recept",
    "Lär dig att dansa", "Ta en digital detox-dag", "Skapa en budget",
    "Skriv ner dina mål", "Börja skriv en journal", "Rensa din arbetsplats",
    "Lär dig att meditera", "Planera en picknick", "Besök en bondens marknad",
    "Gå med i en bokklubb", "Gör ett träningspass hemma", "Prova ett DIY-projekt",
    "Lyssna på en podcast", "Lär dig om en ny kultur", "Starta en blogg",
    "Skriv en dikt", "Träna yoga", "Besök en botanisk trädgård",
    "Lär dig att laga en ny maträtt", "Utforska lokala konstgallerier",
    "Gå stjärnskådning", "Delta i en liveföreställning", "Skriv en kort berättelse",
    "Prova en ny träningsutmaning", "Gör en naturskön bilresa", "Lär dig fotografi",
    "Besök en historisk plats", "Skapa en visionskarta", "Lär dig att sticka eller virka",
    "Planera en familjespelkväll", "Utforska en ny park", "Lägg ett pussel",
    "Ta en cykeltur", "Prova en ny frisyr", "Lär dig att koda",
    "Skapa ett konstverk", "Lär dig om en historisk person",
    "Prova ett nytt brädspel", "Ta ett avslappnande bad", "Lär dig att jonglera",
    "Skriv ett kärleksbrev", "Börja en tacksamhetsdagbok", "Lär dig origami",
    "Titta på en TED-talk", "Prova ett nytt cocktailrecept", "Utforska en närliggande skog",
    "Lär dig om ny teknologi", "Planera en bilresa", "Besök en lokal bondgård",
    "Prova en ny dansstil", "Lär dig lösa en Rubiks kub", "Börja en komposthög",
    "Gå fågelskådning", "Gör en naturskön vandring", "Lär dig att göra hemgjord tvål",
    "Titta på en klassisk film", "Lär dig att identifiera stjärnbilder", "Ta en tupplur",
    "Prova ett nytt brädspel", "Lär dig om kända konstnärer", "Börja en ny bok",
    "Planera en överraskning för någon", "Skapa en scrapbook", "Prova en ny sport",
    "Lär dig om en ny vetenskaplig upptäckt", "Ta en matlagningskurs",
    "Skriv ner dina drömmar", "Lär dig att göra hemgjorda ljus", "Prova en ny modestil",
    "Besök en djurpark eller akvarium", "Lär dig om en historisk händelse", "Starta ett DIY-hemmaprojekt",
    "Gå på en fotosafari", "Lär dig att identifiera lokal flora och fauna", "Planera en temafest",
    "Skapa en ny träningsrutin", "Prova ett nytt brädspel", "Starta en daglig meditationspraxis",
    "Gå fågelskådning", "Prova en ny träningsrutin", "Lär dig om en känd historisk person",
    "Planera en virtuell filmkväll med vänner", "Skapa ett fotoalbum med dina favoritminnen",
    "Morgonmeditation", "Bädda sängen", "30 minuters motion", "Tillaga en hälsosam frukost",
    "Läs ett kapitel ur en bok", "Skriv i din dagbok", "Skapa en liten konstverk", "Gör en naturpromenad",
    "Städa ett rum i ditt hus", "Snabb dusch", "Handla mat för dagen",
    "Lär dig ett nytt ord eller fras", "Ring eller skicka ett meddelande till en vän", "Organisera din arbetsplats",
    "Titta på en kort utbildningsvideo", "Öva på ett musikinstrument", "Planera en helgaktivitet",
    "Donera till välgörenhet online", "Prova ett nytt recept", "Sträcka dig i 10 minuter",
    "Lär dig en dansrörelse", "Koppla bort från skärmar i en timme", "Sätt en budget för dagen",
    "Skriv en att-göra-lista", "Förbered en picknick", "Besök en lokal park",
    "Gå med i en virtuell bokklubb", "Gör ett 15-minuters träningspass hemma", "Prova ett nytt DIY-projekt",
    "Lyssna på ett avsnitt av en podcast", "Utforska ett nytt kök", "Skriv ett blogginlägg",
    "Skissa en snabb teckning", "Öva mindfulness i 5 minuter", "Planera en filmkväll",
    "Lär dig en historisk händelse", "Skapa en visionskarta", "Sticka eller virka en stund",
    "Spela ett brädspel", "Ta ett skumbad", "Lär dig ett magiskt trick",
    "Skriv en tacksamhetslista", "Vik origami", "Titta på en inspirerande TED-talk",
    "Blanda en ny cocktail", "Utforska en närliggande naturstig", "Lär dig om en ny teknologi",
    "Planera en naturskön vägresa", "Besök ett lokalt museum", "Tillaga en ny efterrätt",
    "Prova ett brädspel du aldrig spelat förut", "Läs om kända konstnärer", "Börja en ny bok",
    "Skicka en överraskning till en älskad", "Skapa ett minnesskrapbok", "Öva en sport",
    "Lär dig en vetenskaplig fakta", "Ta en online-matkurs", "Skriv ner en dröm",
    "Gör hemgjorda ljus", "Experimentera med en ny modestil", "Besök en botanisk trädgård",
    "Titta på en dokumentär", "Lär dig ett nytt kortspe", "Planera en familjespelkväll",
    "Utforska en närliggande sjö eller strand", "Skapa en personlig spellista", "Prova en ny konstteknik",
    "Börja en naturdagbok", "Unna dig själv en spadag", "Lär dig om en historisk händelse",
    "Planera en kreativ dejtkväll", "Skriv ett brev till din framtida själv",
    "Öva en ny dansrutin", "Prova ett trädgårdsprojekt",
    "Starta en virtuell bokklubb med vänner", "Gör en naturvandring", "Prova ett hantverksprojekt",
    "Gör hemgjord tvål", "Planera en virtuell museitur", "Skapa en visionskarta för dina mål",
    "Prova en ny utomhusaktivitet", "Börja ett DIY-hemförbättringsprojekt", "Gå på stjärnskådning",
    "Lär dig om en känd uppfinnare", "Planera en picknick i parken",
    "Skapa en personlig korsordspussel", "Prova en ny typ av matlagning",
    "Lär dig om en historisk period", "Utforska en närliggande skog",
    "Gå på en naturskön bilresa", "Prova ett nytt bakrecept", "Lär dig om en ny rymdmission",
    "Planera en virtuell spelkväll med vänner", "Skriv en kort pjäs eller sketch",
    "Gör hemgjord pasta", "Prova ett nytt cocktailrecept", "Börja ett DIY-snickeriprojekt",
    "Gå på en fotoupplevelse", "Lär dig att identifiera lokal flora och fauna",
    "Planera en temafest med kostymer", "Skapa en ny träningsrutin", "Prova ett nytt brädspel",
    "Börja en daglig meditationspraxis", "Gå fågelskådning", "Experimentera med en ny träningsrutin",
    "Lär dig om en känd historisk person", "Planera en virtuell filmkväll med vänner",
    "Skapa ett fotoalbum med dina favoritminnen",
    "Morgonstretchingrutin", "Skriv ner tre saker du är tacksam för", "Prova ett nytt frukostrecept",
    "Lyssna på ett avsnitt av en podcast om ett nytt ämne", "Tillbringa 30 minuter i naturen", "Rensa ett område i ditt hem",
    "Lär dig ett nytt ord på ett främmande språk", "Skriv en positiv lapp till dig själv", "Utforska en ny stadsdel",
    "Gör ett 15-minuters träningspass hemma", "Läs en kort berättelse eller dikt", "Prova en mindfulnessmeditationssession",
    "Skicka ett uppmuntrande meddelande till en vän", "Besök en lokal park och ta foton", "Skriv ner dina mål för dagen",
    "Lär dig ett enkelt magiskt trick", "Tillaga en hälsosam lunch", "Besök ett närliggande museum eller konstgalleri",
    "Skapa en att-göra-lista för veckan", "Titta på en dokumentär om ett ämne som intresserar dig", "Skriv en kort journalanteckning",
    "Prova ett nytt konst- eller hantverksprojekt", "Lyssna på musik i en ny genre", "Gör en slumpmässig god handling för någon",
    "Lär dig om en historisk händelse ur ett annat perspektiv", "Prova en ny sorts te eller kaffe",
    "Öva på ett musikinstrument i 15 minuter", "Utforska en närliggande naturstig", "Skriv ett brev till din framtida själv",
    "Ta en naturskön bilresa och njut av utsikten", "Gör en snabb träningsvideo online", "Prova ett DIY-hemförbättringsprojekt",
    "Skapa en visionskarta för dina drömmar", "Lär dig en grundläggande kodningsfärdighet", "Planera en virtuell träff med vänner",
    "Besök en lokal bondens marknad", "Experimentera med en ny frisyr eller look", "Läs ett kapitel ur en klassisk roman",
    "Prova ett nytt brädspel eller kortspe", "Gör en snabb teckning eller doodle", "Lär dig om kända uppfinnare och deras uppfinningar",
    "Skriv en dikt eller kort historia", "Tillaga en läcker middag från grunden", "Planera en överraskning för en älskad",
    "Ta en virtuell rundtur på en historisk plats", "Lär dig att göra en enkel cocktail", "Utforska en närliggande skog eller park",
    "Öva på en yoga- eller meditationsession", "Börja en tacksamhetsdagbok", "Prova ett nytt dessertrecept",
    "Titta på en inspirerande TED-talk om ett spännande ämne", "Lär dig om en ny tekniktrend", "Planera en naturskön picknick",
    "Lyssna på en motiverande talare", "Experimentera med en ny konstteknik", "Ta ett avkopplande skumbad",
    "Skapa en personlig spellista för din dag", "Lär dig om en annan kulturs traditioner", "Besök en botanisk trädgård",
    "Skriv ner tre saker du har åstadkommit idag", "Prova en ny träningsutmaning eller träningsrutin",
    "Gör en 10-minuters uppröjningssession", "Lär dig om en intressant djurart", "Planera en virtuell filmkväll med vänner",
    "Läs om en vetenskaplig upptäckt eller teori", "Prova en ny utomhusaktivitet eller sport", "Börja ett DIY-trädgårdsprojekt",
    "Besök en djurpark eller akvarium virtuellt", "Skriv ett brev till någon du beundrar", "Experimentera med en ny matlagningsmetod",
    "Ta en virtuell rundtur på ett konstmuseum", "Lär dig ett roligt partitricks eller spel", "Planera en temamiddag hemma",
    "Utforska en närliggande sjö eller strand", "Gör en snabb avslappnings- eller andningsövning", "Skriv ner din drömsemesterplan",
    "Prova en ny språkinlärningsapp eller resurs", "Öva dina fotograferingsfärdigheter", "Planera en virtuell spelkväll med vänner",
    "Lär dig att göra hemgjorda ljus eller tvål", "Skapa en lista över böcker du vill läsa", "Titta på en klassisk film eller TV-serie",
    "Prova ett nytt pusselspel eller tankelek", "Ta en promenad i ditt lokala samhälle och plocka upp skräp",
    "Städa köket", "Träna i 30 minuter", "Laga en ny maträtt", "Skapa en tidskapsel med personliga meddelanden och föremål för framtiden",
    "Läs en bokkapitel", "Skriv i din dagbok i 15 minuter", "Måla med akrylfärger", "Gå en promenad i parken",
    "Tvätta bilen", "Ta en uppfriskande dusch", "Handla mat för veckan",
    "Lär dig grundläggande fraser på ett nytt språk", "Ring en vän och prata i minst 20 minuter", "Organisera din garderob",
    "Titta på en dokumentär om ett ämne du inte känner till", "Öva på ett musikinstrument i 20 minuter",
    "Planera en weekendresa till en ny stad", "Volontärarbete för en lokal välgörenhetsorganisation",
    "Prova på en ny hobby eller aktivitet", "Ta en naturskön hike i skogen", "Besök ett lokalt konstmuseum",
    "Skriv ett personligt tackkort till någon du uppskattar", "Plantera en blomsterträdgård", "Utforska en ny stadsdel i din stad",
    "Utför en slumpmässig god gärning för en främling", "Delta i en träningsklass eller yoga-session", "Prova att laga en gourmetmåltid från ett recept",
    "Lär dig grunderna i en ny dansstil", "Ta en dag utan elektronik och sociala medier", "Skapa en månadsbudget för dina utgifter",
    "Sätt upp specifika mål och skriv ner dem", "Börja skriva en dagbok om dina dagliga upplevelser", "Rensa och organisera ditt arbetsbord",
    "Lär dig att meditera och praktisera mindfulness", "Planera en picknick i en lokal park", "Besök en bondens marknad och prova lokalproducerade varor",
    "Gå med i en bokklubb och börja läsa en ny bok", "Utför en 15-minuters träningsrutin hemma", "Prova ett nytt DIY-projekt eller hantverk",
    "Lyssna på en inspirerande podcast-episod", "Utforska maten i ett nytt kök eller land", "Skriv ett blogginlägg om något du är passionerad över",
    "Skissa en snabb bild eller teckning", "Öva på mindfulness i 10 minuter", "Planera en filmkväll med vänner eller familj",
    "Lär dig om en specifik historisk händelse eller period", "Skapa en visionskarta för dina framtida mål", "Sticka eller virka en ny tröja eller mössa",
    "Organisera en familjegamekväll med brädspel och kortspel", "Utforska en ny park i din stad", "Försök att lösa ett avancerat pussel eller korsord",
    "Ta en cykeltur i din omgivning", "Prova en ny frisyr eller klädstil", "Börja lära dig grunderna i att koda och programmera",
    "Skapa ett eget konstverk eller målning", "Lär dig om en berömd historisk person och deras bidrag", "Spela ett nytt brädspel eller kortspel du aldrig har provat tidigare",
    "Ta ett avkopplande skumbad med doftljus", "Börja lära dig att jonglera med bollar", "Skriv ett kärleksbrev till din partner eller någon du bryr dig om",
    "Starta en tacksamhetsdagbok och skriv ner tre saker du är tacksam för varje dag", "Lär dig konsten av origami och skapa dina egna papperskonstverk",
    "Titta på en tankeväckande TED-talk om ett ämne som intresserar dig", "Blanda en ny och kreativ cocktail", "Utforska en närliggande skog eller naturreservat",
    "Lär dig om den senaste teknologiska utvecklingen", "Planera en naturskön vägresa till en ny destination", "Besök ett lokalt museum och utforska dess utställningar",
    "Prova att baka en ny och läcker efterrätt från ett recept", "Spela ett brädspel eller kortspel du älskar", "Läs om kända konstnärer och deras mest kända verk",
    "Börja läsa en ny bok som du har varit nyfiken på", "Planera en överraskning för någon du bryr dig om och gör deras dag speciell", "Skapa ett minnesalbum med dina bästa minnen och fotografier",
    "Öva en ny sport eller fysisk aktivitet", "Lär dig om en spännande vetenskaplig upptäckt eller teori", "Ta en online-matkurs och lär dig att laga en ny rätt", "Skriv ner dina drömmar och reflektioner i en dagbok",
    "Lär dig att tillverka egna ljus eller tvålar hemma", "Prova på en ny och modig klädstil eller utseende", "Besök en botanisk trädgård och njut av naturens skönhet",
    "Titta på en tankeväckande dokumentär om ett ämne som intresserar dig", "Lär dig ett nytt kortspel eller brädspel och utmana dina vänner och familjemedlemmar", "Planera en rolig familjekväll med spel och aktiviteter",
    "Utforska en närliggande sjö eller strand och njut av den natursköna utsikten", "Ta en kort avkopplande paus för att reflektera och andas djupt", "Skriv ner din drömsemesterplan och de platser du vill besöka",
    "Prova en ny språkinlärningsapp eller resurs för att utöka dina språkkunskaper", "Utveckla dina fotografiska färdigheter genom att ta bilder av din omgivning", "Planera en virtuell spelkväll med dina vänner och ha kul tillsammans",
    "Lär dig att tillverka egna ljus eller tvålar för att skapa personliga gåvor", "Skapa en lista över böcker du vill läsa och börja utforska nya berättelser", "Titta på en klassisk film eller TV-serie och njut av tidlös underhållning",
    "Prova ett nytt pussel eller knepigt tankelek för att utmana din hjärna", "Ta en promenad i ditt lokala samhälle och hjälp till att plocka upp skräp för att göra din omgivning renare",
];

function generateColorBasedOnName(name) {
    const hash = Array.from(name).reduce(
        (acc, char) => char.charCodeAt(0) + ((acc << 5) - acc),
        0
    );
    const color = `hsl(${hash % 360}, 70%, 50%)`;
    return color;
}

const tasks = taskNames.map(name => ({
    name,
    colorClass: `task-${name}`,
    color: generateColorBasedOnName(name),
}));

function shuffle(array) {
    let currentIndex = array.length, randomIndex, tempValue;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }

    return array;
}

const taskElements = document.querySelectorAll('.task');
let timer; // Timer to reset on each click
let cooldown = false; // Cooldown state initially set to false

function completeTask(event) {
    const taskElement = event.target;

    if (cooldown || taskElement.classList.contains('completed')) {
        return; // Prevent clicking during cooldown or for completed tasks
    }

    taskElement.classList.add('completed');
    clearTimeout(timer);
    timer = setTimeout(() => {
        generateNewTasks();
        cooldown = true; // Apply cooldown after new tasks are generated
        setTimeout(() => {
            cooldown = false; // Remove cooldown after about a second
        }, 1000);
    }, 1000);
}

function generateNewTasks() {
    const shuffledTasks = shuffle([...tasks]);

    taskElements.forEach((taskElement, index) => {
        taskElement.textContent = shuffledTasks[index].name;
        taskElement.style.backgroundColor = shuffledTasks[index].color;
        taskElement.classList.remove('completed');
        taskElement.className = `task ${shuffledTasks[index].colorClass}`;
    });
}

taskElements.forEach(taskElement => {
    taskElement.addEventListener('click', completeTask);
});

generateNewTasks();

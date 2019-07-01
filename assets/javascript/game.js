//GLOBAL VARIABLES
var guesses,wins,losses,remainder,wordList;
wordList = ["ANAKIN", "DARTH VADER", "LUKE", "OBI-WAN", "C-3PO", "R2-D2", "CHEWBACCA", "HAN", "LEIA", "PADME", "QUI-GON", "EMPEROR", "YODA", "JAR JAR", "LANDO", "RED LEADER", "WEDGE", "BAIL ORGANA", "CAPTAIN PANAKA", "MACE WINDU", "NUTE GUNRAY", "BIGGS", "GOLD LEADER", "GENERAL GRIEVOUS", "TARKIN", "PIETT", "FODE/BEED", "RIC OLIE", "SHMI", "RUNE", "BOBA FETT", "OWEN", "ADMIRAL ACKBAR", "WATTO", "LAMA SU", "COUNT DOOKU", "GOLD FIVE", "RED TEN", "SIO BIBBLE", "JABBA", "MAD MADDA", "TAUN WE", "RIEEKAN", "CAPTAIN TYPHO", "ZEV", "DARTH MAUL", "BRAVO TWO", "JANGO FETT", "BOSS NASS", "GENERAL CEEL", "TEY HOW", "TC-14", "KITSTER", "RUWEE", "CLONE COMMANDER CODY", "CLONE COMMANDER GREE", "KI-ADI-MUNDI", "ODD BALL", "MON MOTHMA", "BERU", "DACK", "JANSON", "SEBULBA", "JIRA", "VALORUM", "WALD", "BRAVO THREE", "DOFINE", "TARPALS", "PK-4", "GREEDO", "CLIEGG", "SENATOR ASK AAK", "JOBAL", "ORN FREE TAA", "POGGLE", "SOLA", "SUN RIT", "PLO KOON", "FANG ZAR", "TION MEDON", "ON MEDON", "CAPTAIN ANTILLES", "GIDDEAN DANU", "MOTTI", "CAMIE", "DODONNA", "DERLIN","OZZEL", "NEEDA", "BIB FORTUNA", "JERJERROD", "BOUSHH", "RABE", "REY", "POE", "SNAP", "GENERAL HUX", "SNOKE", "COLONEL DATOO", "KYLO REN", "JESS", "ELLO ASTY", "NIV LEK", "YOLO ZIFF", "FINN", "ADMIRAL STATURA", "CAPTAIN PHASMA", "MAZ", "BALA-TIK","LIEUTENANT MITAKA", "UNKAR PLUTT", "LOR SAN TEKKA", "BB-8"];
guesses = [];
wins = 0;
losses = 0;
remainder = 9;
// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function(event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = event.key.toLowerCase();
    if(guesses.indexOf(letter) === -1){}
  };
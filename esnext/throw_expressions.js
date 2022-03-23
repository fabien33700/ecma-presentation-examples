// Initialisateur de paramètres
function save(filename = throw new Error("Filename is required")) {

}

// Corps des arrow functions (sur une sule ligne)
const unsafe = () => throw new Error("I'm an unsafe function");

// Expressions conditionnelles
function getEncoder(encoding) {
  const encoder = 
    encoding === "utf8" ? new UTF8Encoder() :
    encoding === "utf16le" ? new UTF16Encoder(false) :
    encoding === "utf16be" ? new UTF16Encoder(true) : 
    throw new Error("Unsupported encoding");
}

// Opérateur logique et de coalescence des nuls
const value = object.value || throw new Error('invalid value');
const value = object?.value?.child ?? throw new Error('invalid value');
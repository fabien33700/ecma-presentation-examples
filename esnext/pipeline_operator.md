|Type d'appel|Syntaxe|Equivalence|
|-|-|-|
|appel de fonction unaire|`value \|> foo(%)`|`foo(value)`|
|appel de fonction n-aire|`value \|> foo(1, %)`|`foo(1, value)`|
|appel de méthode|`obj \|> %.foo()`|`obj.foo()`|
|appel direct|`fn \|> %()`|`fn()`|
|opération arithmétique|`value \|> % + 1`|`value + 1`|
|littéraux de tableaux|`value \|> [%, 1]`|`[value, 1]`|
|littéraux d'objets|`value \|> {foo: %}`|`{foo: value}`|
|instanciation|`value \|> new Foo(%)`|`new Foo(value)`|
|attente de promesse|`promise \|> await %`|`await promise`|
|envoi de valeur dans un générateur|`value \|> yield %`|`yield value`|
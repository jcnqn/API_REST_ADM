# api_rest_adn

Esta es una api rest que evalúa secuencias de adn para identificar si son mutaciones en base a un patrón predefinido.

### Pre-requisitos 📋

Para instalar este API_REST es necesario tener instalado previamente
```
NodeJS

NPM

```
https://nodejs.org/es/download/

NPM es parte de la instalación de NodeJS


## Clonación e Instalación 🚀

Para clonar este proyecto debes abrir una consola de comandos y ejecutar el siguiente comando

Para Windows
```
$ git clone https://github.com/jcnqn/API_REST_ADN.git
```

Para macOS o Linux

```
$ sudo git clone https://github.com/jcnqn/API_REST_ADN.git
```
Luego deberás ingresar la contraseña de administrador.

##Una vez que el repositorio este en una carpeta local

Luego debes ingresar a la carpeta del proyecto e instalar mediante los siguientes comandos

```
$ cd api_rest_adn
$ npm install
```
### Generar un archivo .env

El archivo debe contener la siguiente información

```
PORT=3000
DB_CNN=mongodb+srv://jucuneo:adsjhñañsdoiasd8ue@cluster0.9k2sn.mongodb.net/db_adn
```

##Ejecución y end points

A continuación se detalla el procedimiento para la evaluación de una cadena de adn.

Se debe enviar una petición POST a 

```
{url}/mutation

body
{
"dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
}
```
Las posibles respuestas son las siguientes

```
En caso de existir mutación, quiere decir que existen cuatro letras iguales de forma horizontal, vertical u oblicua.

STATUS 200

{
  "ok": true,
  "msg": "Existe mutación",
}
```

```
En caso de no existir mutación, no existen cuatro letras iguales en ninguna de las opciones descriptas.

STATUS 403

{
  "ok": false,
  "msg": "No existe mutación",
}
```

```
En caso que la cadena de ADN no sea válida, ya sea por que posee letras que no son (A,T,C,G) o la matriz no es simétrica (NxN)

STATUS 400

{
   "ok": false,
   "msg": "Cadena de DNA inválida"
}
```

##Obtención de estadísticas

Se debe enviar una petición GET a

```
{url}/stats
```

Las respuesta es la siguiente

```
STATUS 200

Ejemplo
{
    "ADN": {
        "count_mutations": 6,
        "count_no_mutation": 10,
        "ratio": 0.6
    }
}
```

TESTEANDO EL ENDPOINT /mutation

```
Responde Código 200 :{ ok: true , msg: Existe mutación }
        Petición POST enviando
        "dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
        Es una matriz de 6x6
```            
```
Responde  Código 200 :{ ok: true , msg: Existe mutación }
        Petición POST enviando
        "dna":["ATGCGAG","CAGTGCC","TTATGTG","AGAAGGA","CCCCTAT","TCACTGG","GAGTAGA"]
        Es una matriz de 7x7
```
```
Responde  Código 200 :{ ok: true , msg: Existe mutación }
       Petición POST enviando
       "dna":["ATGCG","CAGTG","TTATG","AGAAG","CCCCT"]
        Es una matriz de 5x5
```
```
Responde Código 403: { ok: false , msg: No existe mutación }
        Petición POST enviando
        "dna": ["ATGCGA", "CAGTGC", "TTATTT", "AGACGG", "GCGTCA", "TCACTG"]
        Es una matriz de 6x6
```        
```
Responde Código 403: { ok: false , msg: No existe mutación }
        Petición POST enviando
        "dna": ["ATGCGAG", "CAGTGCA", "TTATTTC", "AGACGGA", "GCGTCAT", "TCACTGG", "TAGTATC"]
        Es una matriz de 7x7
```        
```
Responde Código 400: { ok: false , msg: Cadena de DNA inválida }
        Petición POST enviando
        "dna":["ATCCGA","CTTRGC","TTATGT","ATAJAG","CTCCTA","TTACGG"]
        Posee una letra R
```        
```        
Responde Código 400: { ok: false , msg: Cadena de DNA inválida }
        Petición POST enviando
        "dna":["ATCCGA","CTTAGC","TTATGT","ATATAG","CTCCTAT","TTACGG"]
        La matriz es asimetrica con siete caracteres en el 5to término.

```     
TESTEANDO EL ENDPONT /stats
```    
Responde Código 200
        Petición GET        

```


## Construido con 🛠️

cors: v_2.8.5,
dotenv: v_8.2.0,
express: v_4.17.1,
mocha: v_8.3.2,
mongoose: v_5.12.4,
supertest: v_6.1.3




## Autor ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

**Julio Cuneo** - *Ingeniero Industrial y Desarrollador Web* -[LinkedIn]( https://www.linkedin.com/in/juliocuneo/)-

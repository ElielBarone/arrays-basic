import test from 'ava'

//1 - Crie um objeto do tipo array e sete na variável 'obj'
function getArrayObj(){
    var obj = 1;
    return obj;
}

//2 - Adicione ao objeto myDogs dois cães, "snoop" e "scoob"
function getMyDogs(){
    var myDogs = [];    
    return myDogs;
}

//3 - Utilizando filter, retorne apenas os dragões quentes, ou seja: "tharos" e "smaug"
function getMyDragons(){
    var myDragons = ["tharos", "icefyre", "smaug"];    
    return myDragons;
}

/*4 - Utilizando o map, retorne apenas as bandas de rock, 
      em objetos mais simples que contenham apenas os atributos:
      "name" e "integrantsCount"      
 */
function getBands(){
    var rockBands = [
                        {band: "green day", integrants: ["joe", "tré", "mike", "jason"]},
                        {band: "metallica", integrants: ["james", "lars", "dave", "kirk","cliff", "robert"]},
                        {band: "drowning the pool", integrants: ["pierce", "jasen", "stevie"]},

                    ];    
    return rockBands;
}

//CRIE AQUI SUAS FUNÇÕES AUXILIARES--------------------

//FIM DAS FUNÇÕES AUXILIARES---------------------------



test('O objeto criado deve ser um array' , t=> {     
    var arrayObj = getArrayObj();    
    t.true(Array.isArray(arrayObj))
})


test('O primeiro cão deve ser snoop, e o segundo scoob' , t=> {     
    var myDogs =  getMyDogs();
    t.is(myDogs.length, 2);
    t.is(myDogs[0], 'snoop');
    t.is(myDogs[1], 'scoob');
})

test('Apenas dragões quentes devem ser retornados' , t=> {     
    var myDragons =  getMyDragons();
    t.is(myDragons.length, 2);
    t.is(myDragons[0], 'tharos');
    t.is(myDragons[1], 'smaug');    
})

test('As bandas devem ser objetos mais simples' , t=> {     
    var myBands =  getBands();
    t.is(myBands.length, 3);

    t.deepEqual(myBands[0], {name:"green day", integrantsCount: 4});
    t.deepEqual(myBands[1], {name:"metallica", integrantsCount: 6});
    t.deepEqual(myBands[2], {name:"drowning the pool", integrantsCount: 3});       
})
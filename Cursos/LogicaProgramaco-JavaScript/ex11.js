/*
Pedir para o usuário digitar dois números que representam os lados de um retângulo. Mostrar na tela a área total. Esse código deve ser executado quando a página é aberta e também quando clicar num botão. O que acontece se o usuário inserir um dado inválido?
*/

/*
<html>
    <head>
        <meta charset="UTF-8"/>
    </head>
    <body>
        <button onclick="mostarAreaAlert(largura, altura)">mostrar área no alert</button>
        <button onclick="mostarAreaOutput(largura, altura)">mostrar área no output</button>
        
        <div id="output"></div>
        
        <script>
*/
            var largura = parseFloat(prompt('Digite a largura: '));
            var altura = parseFloat(prompt('Digite a altura: '));
            
            function mostarAreaAlert(){
                var area = calcularArea(largura, altura);
                alert('Área total: '+area)
            }
            function mostarAreaOutput(){
                var area = calcularArea(largura, altura);
                document.querySelector('#output').innerHTML = 'A Área total é: '+area;

            }

            function calcularArea(l, a){
                return  l * a;
            }
/*
        </script>
    </body>
</html>
*/

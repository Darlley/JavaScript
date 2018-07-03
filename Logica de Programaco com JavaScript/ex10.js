//CALCULADORA

/*
<html>
    <head>
        <meta charset="UTF-8"/>
    </head>
    <body>
        
        <button onclick="calcular('+')">+</button>
        <button onclick="calcular('-')">-</button>
        <button onclick="calcular('*')">*</button>
        <button onclick="calcular('/')">/</button>

        <div id="numero"></div>

        <script>
*/
            var n = parseFloat(prompt("Digite um número: "));
            numero.innerHTML = n;

            function calcular(simbolo){
                var n2 = parseFloat(prompt("Digite um número: "));
                switch(simbolo){
                    case '+':
                        n += n2;
                        break;
                    case '-':
                        n -= n2;
                        break;
                    case '*':
                        n *= n2;
                        break;
                    case '/':
                        n /= n2;
                        break;
                }
                numero.innerHTML = n;
            }

            var output = document.querySelector("#output");
            var mensagem = "";

            output.innerHTML = mensagem;
/*
        </script>
    </body>
</html>
*/

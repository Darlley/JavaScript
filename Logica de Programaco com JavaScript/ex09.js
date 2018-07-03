//CALCULADORA 

/*
<html>
    <head>
        <meta charset="UTF-8"/>
        <script>
*/
          var n = parseFloat(prompt("Digite um número: "));
          numero.innerHTML = n;

          function novo(){
            n = parseFloat(prompt("Digite um número: "));
            numero.innerHTML = n;
          }


          function somar(){
            var n2 = parseFloat(prompt("Digite um número: "));
            n += n2;
            numero.innerHTML = n;
          }

          function subtrair(){
            var n2 = parseFloat(prompt("Digite um número: "));
            n -= n2;
            numero.innerHTML = n;
          }

          function multiplicar(){
            var n2 = parseFloat(prompt("Digite um número: "));
            n *= n2;
            numero.innerHTML = n;
          }

          function dividir(){
            var n2 = parseFloat(prompt("Digite um número: "));
            n /= n2;
            numero.innerHTML = n;
          }

          function limpar(){
            mensagem = '';
            numero.innerHTML = mensagem;
          }

          var output = document.querySelector("#output");
          var mensagem = "";

          output.innerHTML = mensagem;
/*
      <script>
    </head>
    <body>
      <button onclick="novo()">NEW</button>
      <button onclick="limpar()">C</button>
      <button onclick="somar()">+</button>
      <button onclick="subtrair()">-</button>
      <button onclick="multiplicar()">*</button>
      <button onclick="dividir()">/</button>
    </body>
</html>
*/

var arr = new Array(25, 30, 45, 28, 0, 12, 78, 64);

//Mostrar na tela a soma dos numeros pares do array criado acima

var soma = 0;

for(var i=0; i<arr.length; i++){
  console.log(i);
  console.log(arr[i])

  if( !isNaN(arr[i]) && arr[i]%2===0){
    soma += arr[i];
  }
} 

alert(soma)

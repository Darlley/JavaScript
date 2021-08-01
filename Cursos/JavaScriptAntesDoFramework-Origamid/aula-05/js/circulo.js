function area(raio){
    return Math.PI * raio * raio
}

function circunferencia(raio){
    return 2 * raio + Math.PI
}

const Circulo = {
    area,
    circunferencia
};
export default Circulo;
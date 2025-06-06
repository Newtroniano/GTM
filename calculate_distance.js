// ---- CÓDIGO QUE CALCULA DISTÂNCIAS ----
class VectorMath {
  static euclidean(vec1, vec2) {
    let sum = 0;
    for (let i = 0; i < vec1.length; i++) {
      sum += Math.pow(vec1[i] - vec2[i], 2);
    }
    return Math.sqrt(sum).toFixed(2); // Arredonda para 2 decimais
  }
}

// ---- DISPARADOR DE EVENTOS ----
function calculateAndTrigger(vec1, vec2) {
  const distance = VectorMath.euclidean(vec1, vec2);
  
  // Cria um evento personalizado
  const event = new CustomEvent('calculate_distance', {
    detail: {
      distance: distance,
      vectors: [vec1, vec2]
    }
  });
  
  // Dispara o evento para o GTM escutar
  window.dispatchEvent(event);
  
  return distance;
}

// ---- EXPORTA FUNÇÃO PARA O GTM USAR ----
window.VectorCalculator = {
  calculate: calculateAndTrigger
};

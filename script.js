let modelo;

async function entrenarModelo() {
  modelo = tf.sequential();
  modelo.add(tf.layers.dense({ units: 1, inputShape: [1] }));

  modelo.compile({
    optimizer: tf.train.sgd(0.01),
    loss: 'meanSquaredError'
  });

  const xs = tf.tensor2d([-6, -5, -4, -3, -2, -1, 0, 1, 2], [9, 1]);
  const ys = tf.tensor2d([-6*2+6, -5*2+6, -4*2+6, -3*2+6, -2*2+6, -1*2+6, 0*2+6, 1*2+6, 2*2+6], [9, 1]);

  await modelo.fit(xs, ys, {
    epochs: 350,
    callbacks: {
      onTrainEnd: () => {
        document.getElementById("train-status").innerText = "✅ Entrenamiento finalizado. ¡Modelo listo!";
      }
    }
  });
}

async function hacerPrediccion() {
  const x = parseFloat(document.getElementById("inputX").value);
  if (isNaN(x)) {
    document.getElementById("result").innerText = "Por favor, ingresa un número válido.";
    return;
  }

  const inputTensor = tf.tensor2d([x], [1, 1]);
  const prediccion = modelo.predict(inputTensor);
  const y = (await prediccion.data())[0];

  document.getElementById("result").innerText = `Predicción: y = ${y.toFixed(2)}`;
}

entrenarModelo();

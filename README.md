
# Proyecto de Modelo de Regresión Lineal

Este proyecto consiste en crear un modelo de regresión lineal simple utilizando TensorFlow.js. El modelo predice el valor de 'y' a partir de 'x' en la fórmula y = 2x + 6. A continuación, se explica el proceso y cómo ejecutar la aplicación.

## Descripción

1. **Entrenamiento del modelo**:
   - El modelo se entrena utilizando 9 puntos de datos con valores de `x` en el rango de -6 a 2.
   - El modelo usa una red neuronal con una sola capa densa de 1 unidad.
   - Se utiliza el optimizador SGD (Stochastic Gradient Descent) con una tasa de aprendizaje de 0.01 y la función de pérdida 'meanSquaredError' (error cuadrático medio).

2. **Entrenamiento**:
   - El entrenamiento se realiza por **350 épocas**.
   - Después de cada época, el modelo ajusta sus parámetros para mejorar las predicciones.

3. **Predicción**:
   - El usuario puede ingresar un valor de `x` para que el modelo prediga el valor de `y`.

## Cómo ejecutar

1. Abre el archivo `index.html` en tu navegador.
2. Al cargar la página, el modelo comenzará a entrenarse automáticamente.
3. Una vez entrenado, el modelo estará listo para hacer predicciones.
4. Ingresa un valor para `x` en el campo de texto y haz clic en el botón "Predecir" para obtener el valor de `y`.

## Requisitos

- Navegador web moderno con soporte para JavaScript y TensorFlow.js.

## Archivos incluidos

- `index.html`: Contiene la estructura de la página y la interfaz de usuario.
- `styles.css`: Contiene los estilos visuales para la página.
- `script.js`: Contiene el código de JavaScript que define el modelo, el entrenamiento y la predicción.

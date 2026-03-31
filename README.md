# GPDev UI Core

Librería de componentes UI accesibles y sin dependencias, construida desde cero con Vanilla JS y CSS Grid puro.

## Filosofía de Arquitectura

Este proyecto demuestra la construcción de interfaces rápidas, escalables y semánticas, aplicando principios fundamentales de desarrollo exigidos en ecosistemas empresariales:

* **Cero Dependencias:** Lógica implementada exclusivamente con Vanilla JS Orientado a Objetos (Clases), optimizando el rendimiento, evitando sobrecargas en el cliente y demostrando un control absoluto sobre el motor del navegador.
* **Accesibilidad (a11y) Estricta:** Uso riguroso de atributos ARIA (`aria-expanded`, `aria-controls`, `role="region"`) para garantizar la correcta interpretación por lectores de pantalla. Estándar innegociable para la creación de Core Components en plataformas como Adobe Experience Manager (AEM).
* **Manipulación Eficiente del DOM:** Las animaciones pesadas se delegan al motor de renderizado CSS (usando transiciones en `grid-template-rows`), mientras que JavaScript actúa únicamente como un gestor de estados inyectando clases. Esto evita cálculos de píxeles costosos y elimina los cuellos de botella por *reflows* y *repaints*.

## Componentes Disponibles

* **Smart Accordion:** Panel de contenido interactivo con soporte para modo de apertura única o múltiple, transiciones fluidas a 60fps y marcado semántico dinámico.

## Visualización

Puedes interactuar con el componente en vivo a través de la [Demo en GitHub Pages](https://frangp05.github.io/gpdev-ui-core/).
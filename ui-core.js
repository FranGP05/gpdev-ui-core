/**
 * Arquitectura de Componentes
 * Inicializo mi clase Acordeón para mantener la lógica aislada
 */
class GPAccordion {
    constructor(element) {
        this.accordion = element;
        this.triggers = this.accordion.querySelectorAll('.gp-accordion-trigger');
        this.isSingle = this.accordion.getAttribute('data-accordion') === 'single';
        this.init();
    }

    init() {
        // Escucho el clic en cada uno de mis botones
        this.triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => this.togglePanel(e.currentTarget));
        });
    }

    togglePanel(trigger) {
        // Localizo el elemento padre completo de mi acordeón
        const item = trigger.closest('.gp-accordion-item');
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        // Si es de modo único, cierro el resto antes de abrir este
        if (this.isSingle && !isExpanded) {
            this.closeAll();
        }

        if (isExpanded) {
            // Si estaba abierto, lo cierro
            trigger.setAttribute('aria-expanded', 'false');
            item.classList.remove('is-open');
        } else {
            // Si estaba cerrado, lo abro
            trigger.setAttribute('aria-expanded', 'true');
            item.classList.add('is-open');
        }
    }

    closeAll() {
        // Cierro de golpe todos mis paneles
        this.triggers.forEach(trigger => {
            trigger.setAttribute('aria-expanded', 'false');
            trigger.closest('.gp-accordion-item').classList.remove('is-open');
        });
    }
}

/* =========================================
   Instanciación Automática
   ========================================= */
document.querySelectorAll('.gp-accordion').forEach(accordionElement => {
    new GPAccordion(accordionElement);
});
define([
        'jquery',
        'Magento_Payment/js/view/payment/cc-form'
    ],
    function ($, Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'RicardoMartins_PagSeguro/payment/rm_pagseguro_boleto'
            },

            context: function() {
                return this;
            },

            getCode: function() {
                return 'rm_pagseguro_boleto';
            },

            isActive: function() {
                return true;
            }
        });
    }
);

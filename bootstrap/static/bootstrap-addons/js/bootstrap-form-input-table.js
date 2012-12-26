/* uses a table as a radio or checkbox
 * actually for the checkbox mode see https://github.com/nathanfirth/jQuery-Selectable-Table-Rows
 * */

/**
 * this is actually very simple.
 *
 * build a table and in each row, in whatever TD, add a radio input or checkbox input.
 * when clicking on a row this code will add a selected class
 *
 *
 */

$(document).ready(function() {
    $('.table-selectable').delegate('tbody > tr', 'click', function() {
//        console.log('Table Selectable Row Clicked!');
        var inputSelector = 'input[name^="answer"]';
        var selectedClass = 'row-selected';
        var $checkbox = $(this).find(inputSelector);
        $checkbox.prop('checked', !$checkbox.prop('checked'));

        $('.table-selectable > tbody > tr').each(function() {
            $checkbox = $(this).find(inputSelector);
            $(this).toggleClass(selectedClass, $checkbox.prop('checked'));
        })
    });
});



















//------------------------------------------
/* instructions on how to extend bootstrap from: http://stackoverflow.com/questions/9137311/how-to-extend-twitter-bootstrap-plugin */

/*
 !function ($) {

 "use strict"; // jshint ;_;


 //SELECTABLETABLE CLASS DEFINITION
 //  ======================
 //
 //var SelectableTable = function (element, options) {
 //    this.options = options;
 //    this.$element = $(element)
 //      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
 //    this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
 //  }
 //
 //
 //
 //
 //
 //// save the original function object
 //var _super = $.fn.modal;
 //
 //// add custom defaults
 //$.extend( _super.defaults, {
 //    foo: 'bar',
 //    john: 'doe'
 //});
 //
 //// create a new constructor
 //var Modal = function(element, options) {
 //
 //    // do custom constructor stuff here
 //
 //     // call the original constructor
 //    _super.Constructor.apply( this, arguments );
 //
 //}
 //
 //// extend prototypes and add a super function
 //Modal.prototype = $.extend({}, _super.Constructor.prototype, {
 //    constructor: Modal,
 //    _super: function() {
 //        var args = $.makeArray(arguments);
 //        _super.Constructor.prototype[args.shift()].apply(this, args);
 //    },
 //    show: function() {
 //
 //        // do custom method stuff
 //
 //        // call the original method
 //        this._super('show');
 //    }
 //});


 */
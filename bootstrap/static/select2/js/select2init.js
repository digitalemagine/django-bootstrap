/***
 *
 * inits select2 widgets using data-* attributes
 *
 * this can be fun and fast and very general but becomes complicated as soon
 * as slightly different behaviour are desired - which is probably why there isn't such a think coming with select2 directly.
 *
 */


(function($) {
    $.fn.select2init = function() {
        return this.each(function() {
            //Do stuff
            var $this = $(this);
            var template = $this.data('template');
            function format(item) {
                /* a real templating would be better... so that I can specify this in the html!
                 *
                 * even a simple $varname -> replace $varname...
                 */
                if (template) {
                    return template.replace('{id}', item.id).replace('{text}', item.text);
                }
                return item.text;
            }
            var options = {};
            if ($this.data('template')) {
                options['formatResult'] = format;
                options['formatSelection'] = format;
            }
            if (($this.data('placeholder') || $this.attr('placeholder')) && $this.data('allow-clear')) {
                options['allowClear'] = true;
            } else {
                options['allowClear'] = false;
            }
            if ($this.data('source')) {
                options['ajax'] = {
                    url: $this.data('source'),
                    dataType: 'json',
                    data: function(term, page) { // page is the one-based page number tracked by Select2
                        return {
                            q: term, //search term
                            max: 200, // page size
                            p: page, // page number
                        };
                    },
                    results: function(data, page) { // parse the results into the format expected by Select2.
                        // since we are using custom formatting functions we do not need to alter remote JSON data
                        if (data.results) {
                            return data;
                        }
                        return {results: data, more: data.length > 0};
                    }
                };

                /* legacy - data-init-selection used to DISABLE the default init-selection when set to other than auto
                 */
                options['initSelection'] = (!$this.data('init-selection') || $this.data('init-selection') === 'auto') && function(element, callback) {
                    /* if there's a value, select it! */
//        var data = {id: element.val(), text: element.val()};
                    if (!element.val() || element.val() === '0' || element.val() === 'None') {
                        /* this was quite specific for a project */
                        callback({id: 0, text: 'Tous'});
                        return;
                    }
                    return $.ajax({
                        type: "GET",
//                    url: $this.data('source') + 'code:' + element.val(), /* this really depends on the backend...*/
                        url: $this.data('source') + (($this.data('source').indexOf('?') > -1) ? '&' : '?') + 'q=' + element.val(), /* this really depends on the backend...*/
                        dataType: 'json',
                        success: function(data) {
                            /* this is unused for this task */
                        }
                    }).done(function(data) {
                        /*
                         * cover two most common result formats: one is simply a list of values; the second is an obj with results, error, has_more
                         *
                         */
                        var result = data;
                        if (data.results) {
                            result = data.results;
                        }
                        if (result.length !== 1) {
                            console.warn('Could not find a unique value for ', this.url, ', found', result.length);
                            return null;
                        }
                        callback(result[0]);
                        $this.trigger('select2-initSelection');
                    });
                };
            }
            $select2 = $this.select2(options);
            if ($this.data('target')) {
                $target = $($this.data('target'));
                $this.on('change', function() {
                    $target.val($this.val());
                });
            }
        });
    };
}(jQuery));

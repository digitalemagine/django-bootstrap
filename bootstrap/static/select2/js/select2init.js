(function($) {
    $.fn.select2init = function() {
        return this.each(function() {
            //Do stuff
            $this = $(this);
            function format(item) {
                /* a real templating would be better... so that I can specify this in the html!
                 *
                 * even a simple $varname -> replace $varname...
                 */
                var template = $this.data('template');
                if (template) {
                    return template.replace('{id}', item.id).replace('{text}', item.text);
                }
                return item.text;
            }
            var options = {};
            if ($this.data('template')) {
                options['formatResult'] = format;
            };
            if ($this.data('allow-clear')) {
                options['allowClear'] = true;
            }
            console.log('this has allow-clear:', $this.data('allow-clear'));
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
                        console.log('results from ajax:', data);
                        if (data.results) {
                            return data;
                        }
                        return {results: data, more: data.length > 0};
                    }
                };
            }
//    if ($this.data('placeholder')) {
//        options['allowClear'] = true;
//    }
            options['initSelection'] = function(element, callback) {
                /* if there's a value, select it! */
//        var data = {id: element.val(), text: element.val()};
                if (!element.val() || element.val() === '0' || element.val() === 'None') {
                    callback({id: 0, text: 'Tous'});
                    return;
                }
                return $.ajax({
                    type: "GET",
//                    url: $this.data('source') + 'code:' + element.val(), /* this really depends on the backend...*/
                    url: $this.data('source') + '?q=' + element.val(), /* this really depends on the backend...*/
                    dataType: 'json',
                    success: function(data) {
                        //results: data.results;
                        return data[0]; // if this does not exist, there was a bad issue!
                    }
                }).done(function(data) {
                    //console.log(data);
                    callback(data[0]); /* why isn't this correct already ? */
                });
            };
            $select2 = $this.select2(options);
        });
    };
}(jQuery));

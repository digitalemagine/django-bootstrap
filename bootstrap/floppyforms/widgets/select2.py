# -*- coding: utf-8 -*-

"""
Select2 FloppyForm based Widgets
"""

import floppyforms as forms



class Select2Widget(forms.TextInput):
    """
    Simply extends the select template adding a data-provide=select2 and,
    if a "target" is provided, created a target input to hold the value.
    (the 'target' technique is used in case of troubles accessing the select2 value.
    Usually, it should not be necessary)
    """
    template_name = 'floppyforms/widgets/select2widget.html'

    def get_context(self, name, value, attrs):
        ctx = super(Select2Widget, self).get_context(name, value, attrs)
        ctx['attrs']['data-provide'] = 'select2'
        return ctx


class Select2HeavyWidget(forms.TextInput):
    """
    Automatically creates a "target" using the name, that will hold the value.
    An ajax "source" parameter is expected.
    (the 'target' technique is used in case of troubles accessing the select2 value.
    """
    template_name = 'floppyforms/widgets/select2heavy_widget.html'

#    def get_context(self, name, value, attrs, source, template=None, target=None, placeholder=None, allow_clear=None):
    def get_context(self, name, value, attrs):
        """
        For select inputs, this would also take `choices`
        """
        ctx = super(Select2HeavyWidget, self).get_context(name, value, attrs)
#        ctx['source'] = source
#        ctx['template'] = template
#        ctx['target'] = target
#        ctx['placeholder'] = placeholder
#        ctx['allow_clear'] = allow_clear
        return ctx
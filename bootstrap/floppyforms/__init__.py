# -*- coding: utf-8 -*-

import floppyforms as forms

"""
Custom floppyform based widgets:
    http://django-floppyforms.readthedocs.org/en/latest/customization.html
"""

class Select2Widget(forms.TextInput):
    template_name = 'floppyforms/widgets/select2widget.html'

    def get_context(self, name, value, attrs):
        ctx = super(Select2Widget, self).get_context(name, value, attrs)
        ctx['attrs']['data-provide'] = 'select2'
        return ctx


class Select2HeavyWidget(forms.TextInput):
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
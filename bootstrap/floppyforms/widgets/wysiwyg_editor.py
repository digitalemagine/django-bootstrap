# -*- coding: utf-8 -*-

"""
WYSIWYG Rich Editor
"""


import floppyforms as forms


class WysiwygEditorWidget(forms.TextInput):
    """
    A Wysiwyg editor, currently based on the bootstrap-wysiwyg library
    https://github.com/mindmup/bootstrap-wysiwyg

    NB.
    Currently, you have to add yourself the library menu and explicitly activate
    the wysiswyg editor!
    """
    template_name = 'floppyforms/widgets/wysiwyg_editor/widget.html'

    class Media:
        js = (
            'jquery/js/jquery-1.10.1.min.js',
            'bootstrap/js/bootstrap.min.js',
            'jquery/js/plugins/bootstrap-wysiwyg.js',
            'bootstrap-addons/js/wysiwyg_editor.js',
        )
        css = {
            'all': (
                'bootstrap/css/bootstrap.min.css',
                'bootstrap-addons/css/wysiwyg_editor.css',
                'font-awesome/css/font-awesome.min.css',
            )
        }

    def get_context(self, name, value, attrs):
        ctx = super(WysiwygEditorWidget, self).get_context(name, value, attrs)
        ctx['attrs']['data-editor'] = 'wysiwyg'
        return ctx

class WysiwygEditorAdminWidget(WysiwygEditorWidget):
    """
    The admin version includes required js/css that are already in the bootstrap theme otherwise
    """
    class Media:
        js = (
            'jquery/js/jquery-1.10.1.min.js',
            'bootstrap/js/bootstrap.min.js',
            'jquery/js/plugins/bootstrap-wysiwyg.js',
            'bootstrap-addons/js/wysiwyg_editor.js',
            'bootstrap-addons/js/wysiwyg_editor_toolbar.js',
        )
        css = {
            'all': (
                'bootstrap/css/bootstrap.min.css',
                'bootstrap-addons/css/wysiwyg_editor.css',
                'font-awesome/css/font-awesome.min.css',
            )
        }

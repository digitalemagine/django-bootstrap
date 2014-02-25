# -*- coding: utf-8 -*-


"""
Custom floppyform based widgets:
    http://django-floppyforms.readthedocs.org/en/latest/customization.html
"""

from select2 import Select2Widget, Select2HeavyWidget
from wysiwyg_editor import WysiwygEditorWidget, WysiwygEditorAdminWidget
#from widgets import Select2Widget, Select2HeavyWidget

__all__ = [
    'Select2Widget',
    'Select2HeavyWidget',
    'WysiwygEditorWidget',
    'WysiwygEditorAdminWidget',
]

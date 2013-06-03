# -*- coding: utf-8 -*-

from django.conf import settings # import the settings file

def bootstrap_settings(request):
    """
    Add settings.BOOTSTRAP_SETTINGS to the context so that they are accessible in the templates

    Now you can do things like

        'jQueryUI': True

    """
    default_settings = {
        'jQueryUI': {
            'enabled': True,
            'theme': 'smoothness'
        }
    }

    return {'bootstrap_settings': getattr(settings, BOOTSTRAP_SETTINGS, {})}
django-bootstrap
================

simplified integration of twitter bootstrap


* Author: Stefano Crosta
* Licence: BSD (and relevant licences from the included packages)
* Compatibility: Django 1.5+

Simply install this package to get bootstrap compressed media.

FloppyForms is a required dependency for forms (not automatically installed).

Boostrap with Jasny
-------------------

Currently using bootstrap 2.3.1 (http://twitter.github.com/bootstrap/) with Jasny Extensions version j6 (http://jasny.github.com/bootstrap/)

Slightly modified jasny typeahead to read `target` and `source` from dataset attributes.

Django bootstrap forms with FloppyForms
---------------------------------------

Includes out of the box support for floppyforms; just use the 'bootstrap.html' layout,

eg. by writing your own ``floppyforms/layouts/default.html`` as::

     {% extends "floppyforms/layouts/bootstrap.html" %}

This means that __in order to produce bootstrap forms you only need to__:

* get floppyforms and add it to your ``INSTALLED_APPS``
* use ``import floppyforms as forms`` in your forms declarations
* use {{ form }}

and that's all!

TableSorter is back
-------------------

Includes out of the box support for tablesorter 2.7.1 (https://github.com/mottie/tablesorter/) with a simple, bootstrape integrated style.

Select2
-------

Includes the amazing Select2 (http://ivaynberg.github.com/select2/) widget - you'll never use Bootstrap `typeahed` again.

Official Documentation
----------------------

Just install the app and extend your templates from `bootstrap/{jasny-}base.html`

Refer to the individual package documentations, eg. for bootstrap please see the `bootstrap official documentation`_ and `jasny bootstrap documentation`

.. _`bootstrap official documentation`: http://twitter.github.com/bootstrap/index.html
.. _`jasny bootstrap documentation`: http://jasny.github.com/bootstrap/index.html

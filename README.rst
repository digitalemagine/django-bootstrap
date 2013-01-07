django-bootstrap
================

simplified integration of twitter bootstrap


* Author: Stefano Crosta
* Licence: BSD (and relevant licences from the included packages)
* Compatibility: Django 1.5+

Simply install this package to get bootstrap compressed media.

Boostrap with Jasny
-------------------

Currently using bootstrap 2.2.2 (http://twitter.github.com/bootstrap/) with Jasny Extensions version j3 (http://jasny.github.com/bootstrap/)

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


Official Documentation
----------------------

For bootstrap please see the `bootstrap official documentation`_ and `jasny bootstrap documentation`

.. _`bootstrap official documentation`: http://twitter.github.com/bootstrap/index.html
.. _`jasny bootstrap documentation`: http://jasny.github.com/bootstrap/index.html

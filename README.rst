django-bootstrap
================

simplified integration of twitter bootstrap


* Author: Stefano Crosta
* Licence: BSD
* Compatibility: Django 1.5+

Simply install this package to get bootstrap compressed media.

Currently using bootstrap with Jasny Extensions version 2.1.1-j2 (http://jasny.github.com/bootstrap/)

Includes out of the box support for floppyforms; just use the 'bootstrap.html' layout,

eg. by writing your own ``floppyforms/layouts/default.html`` as::

     {% extends "floppyforms/layouts/bootstrap.html" %}

This means that in order to produce bootstrap forms you only need to:

* get floppyforms and add it to your ``INSTALLED_APPS``
* use ``import floppyforms as forms`` in your forms declarations
* use {{ form }}

and that's all!

For bootstrap please see the `bootstrap official documentation`_ and `jasny bootstrap documentation`

.. _`bootstrap official documentation`: http://twitter.github.com/bootstrap/index.html
.. _`jasny bootstrap documentation`: http://jasny.github.com/bootstrap/index.html

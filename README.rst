django-bootstrap
================

simplified integration of twitter bootstrap


* Author: Stefano Crost
* Licence: BSD
* Compatibility: Django 1.5+

Simply install this package to get bootstrap compressed media.

Currently using bootstrap v. 2.2.1

Includes out of the box support for floppyforms; just use the 'bootstrap.html' layout,

eg. by writing your own ``floppyforms/layouts/default.html`` as::

     {% extends "floppyforms/layouts/bootstrap.html" %}

This means that in order to produce bootstrap forms you only need to:

* get floppyforms and add it to your ``INSTALLED_APPS``
* use ``import floppyforms as forms`` in your forms declarations
* use {{ form }}

and that's all!

For bootstrap please see the `bootstrap official documentation`_

.. _`bootstrap official documentation`: http://twitter.github.com/bootstrap/index.html
# -*- coding: utf-8 -*-
from distutils.core import setup
from setuptools import find_packages

setup(
    name='django-bootstrap',
    version='1.2:2.3.1-j6', # combined versions :)  -- my own, bootstrap, jasny.
    author=u'Stefano Crosta',
    author_email='stefano@digitalemagine.com',
    packages=find_packages(),
    include_package_data=True,
    url='http://github.com:digitalemagine/django-bootstrap.git',
    license='Open Source',
    description='Simple integration of bootstrap by twitter into django',
    long_description=open('README.rst').read(),
    zip_safe=False,
)

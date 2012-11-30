# -*- coding: utf-8 -*-
from distutils.core import setup
from setuptools import find_packages

setup(
    name='django-bootstrap',
    version='0.1.0',
    author=u'Stefano Crosta',
    author_email='stefano@digitalemagine.com',    
    packages=find_packages(),
    url='http://github.com:digitalemagine/django-bootstrap.git',    
    license='Open Source',
    description='Simple integration of bootstrap by twitter into django',
    long_description=open('README.rst').read(),
    zip_safe=False,
)

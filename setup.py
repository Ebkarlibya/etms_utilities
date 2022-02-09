from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in etms_utilities/__init__.py
from etms_utilities import __version__ as version

setup(
	name="etms_utilities",
	version=version,
	description="ETMS Utilities",
	author="Ebkar Technologies",
	author_email="admin@ebkar.ly",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)

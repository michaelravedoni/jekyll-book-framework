<h1 align="center">jekyll-book-framework</h1> <br>
<!--<p align="center">
    <img alt="jekyll-book-framework logo" title="jekyll-book-framework logo" src="docs/logo-jekyll-book-framework.png" width="300">
</p>-->
<div align="center">
  <strong>Publish and write a book</strong>
</div>
<div align="center">
  A jekyll framework for publishing book in multiple format (HTML, PDF, epub)
</div>

<div align="center">
  <h3>
    <a href="#documentation">Documentation</a>
    <span> | </span>
    <a href="https://ravedoni.com/test/jekyll-book-framework/">Demo</a>
    <span> | </span>
    <a href="#contributing">Contributing</a>
  </h3>
</div>

<div align="center">
  <sub>Built with ❤︎ by
  <a href="https://michael.ravedoni.com/en">Michael Ravedoni</a> and
  <a href="https://github.com/michaelravedoni/jekyll-book-framework/contributors">
    contributors
  </a>
</div>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Release History](#release-history)
- [Authors and acknowledgment](#authors-and-acknowledgment)

## Introduction
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/michaelravedoni/jekyll-book-framework/blob/master/LICENSE)

This tool is inspired by [Antoine Fauchié](https://gitlab.com/antoinentl)'s excellent [thesis](https://memoire.quaternum.net/) (_Vers un système modulaire de publication : éditer avec le numérique_). The [project](https://gitlab.com/antoinentl/systeme-modulaire-de-publication) on which his thesis was based served as the basis for the development of `jekyll-book-framework`.

To get an idea, you can see the [demo of this project](https://ravedoni.com/test/jekyll-book-framework/).

## Features

- Markdown writing format
- PDF auto generation with [paged.js](https://gitlab.pagedmedia.org/tools/pagedjs)
- Static site generator with [Jekyll](https://jekyllrb.com/)
- Clean interface

## Usage

### Download
Download the project using git:

```bash
git clone https://github.com/michaelravedoni/jekyll-book-framework.git
cd jekyll-book-framework
```

Or, manually :

[Download](https://github.com/michaelravedoni/jekyll-book-framework/archive/master.zip) the project and unzip it.

Then rename the folder with the name you want. For example: `my-book` (`JEKYLL-BOOK-NAME` in the following steps).


### Install
To run the project, you have to install [Jekyll](https://jekyllrb.com/docs/installation/) (and therefore [Ruby](https://www.ruby-lang.org/en/documentation/installation/)). Also install [npm](https://www.npmjs.com/get-npm) if you want to easily deploy the FTP life application (see [_deploy_](#deploy)) or to easily run the project.

After you install [Ruby](https://www.ruby-lang.org/en/documentation/installation/), install the Jekyll CLI:

```bash
$ gem install jekyll bundler
```

Enter in your project's folder:

```bash
cd JEKYLL-BOOK-NAME
```

Install all Ruby and npm dependencies, such as Jekyll and plugins:

```bash
bundle install
npm run install
```

### Start
To start and serve the project for development, run:

```bash
npm run dev
```
Preview your local book in your web browser at `http://localhost:4000`.

To build the component for production, run:

```bash
npm run build
```

### Deploy
#### Via FTP (RSync)
For deploying the site via FTP (RSync), follow this instructions. In the main project folder `/`, run (if not already done) :
```bash
npm install
```

Rename the `env-model.json` file in `env.json` and open-it. Then fill the `<user>`, `<host>` and `<path/>` with your FTP remote server informations. For example:
```bash
username_example@example.ftp.com:web/JEKYLL-BOOK-NAME/
```

Then, to deploy the app, run :
```bash
npm run stage      #For testing on your test server
npm run stage-dry  #If you want to run a dry test

npm run deploy     #For the production server
npm run deploy-dry #If you want to run a dry test
```
### Via Git
Initialize your site directory as a Git repository (and connect your remote repository to your local repository) if you want it to be online available.

```bash
git init
git remote add origin https://github.com/username-or-organization-name/JEKYLL-BOOK-NAME
```

## Documentation

### Architecture

- `_book`: Contains all the contents of the book in markdown

- `_index.md`: Cover of the book (editable)

- `_bibliography`: Contains the bibliographys in BibTex format (.bib file) necessary for the [jekyll-scholar](https://github.com/inukshuk/jekyll-scholar) plugin

- `_materials`: Folder containing all the files (image, text, media) and drafts of the book for discussion

- `_doc` and `images`: Folders containing the files and images necessary for the book

- `__includes`, `_layouts`, `_sass`, `_plugins` and others: Files necessary for the working of Jekyll

All the files and directories can be modified for customization and your own needs.

### Branches

For each development or writing idea, we recommend creating a specific branch in your project. This will facilitate project discussions and monitoring.

### Commits format
To make the use of Git more understandable, here is a list of conventions for writing _commits_:

- `admin` : technical management of the repository or site
- `style` : styles
- `edit` : content edition
- `fix` : correction, modification following a remark
- `org` : organization of files, repository, site
- `gen` : automation for the generation of the different files and formats
- `test` : test (but normally reported in a specific branch)

## Contributing

We’re really happy to accept contributions from the community, that’s the main reason why we open-sourced it! There are many ways to contribute, even if you’re not a technical person.

1. [Fork](https://help.github.com/articles/fork-a-repo/) this [project](https://github.com/michaelravedoni/jekyll-book-framework)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Release History

You will find the releases history in the [release](https://github.com/michaelravedoni/jekyll-book-framework/releases) section. For more detail, you can check the [changelog.md](https://github.com/michaelravedoni/jekyll-book-framework/blob/master/CHANGELOG.md) file.

## Roadmap

- Styles and css restructuration
- i18n
- epub, mobi and markdown export

## Authors and acknowledgment

* **Michael Ravedoni** - *Initial work* - [michaelravedoni](https://github.com/michaelravedoni)
* **Antoine Fauchié** - *Inspirated work and [project](https://gitlab.com/antoinentl/systeme-modulaire-de-publication)* - [antoinentl](https://gitlab.com/antoinentl)

See also the list of [contributors](https://github.com/michaelravedoni/jekyll-book-framework/contributors) who participated in this project.

## License

[MIT License](https://opensource.org/licenses/MIT)

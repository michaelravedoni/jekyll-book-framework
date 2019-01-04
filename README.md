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
    <a href="https://michaelravedoni.github.io/jekyll-book-framework/">Demo</a>
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
- [Deployment](#deployment)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Release History](#release-history)
- [Authors and acknowledgment](#authors-and-acknowledgment)

## Introduction
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/michaelravedoni/jekyll-book-framework/blob/master/LICENSE)

This tool is inspired by [Antoine Fauchié](https://gitlab.com/antoinentl)'s excellent [thesis](https://memoire.quaternum.net/) (_Vers un système modulaire de publication : éditer avec le numérique_). The [project](https://gitlab.com/antoinentl/systeme-modulaire-de-publication) on which his thesis was based served as the basis for the development of `jekyll-book-framework`.

To get an idea, you can see the [demo of this project](https://michaelravedoni.github.io/jekyll-book-framework/).

## Features

- Markdown writing format
- PDF auto generation with [paged.js](https://gitlab.pagedmedia.org/tools/pagedjs)
- Static site generator with [Jekyll](https://jekyllrb.com/)
- Clean interface

## Usage

**Clone** the project using git:

```bash
git clone https://github.com/michaelravedoni/jekyll-book-framework.git
cd jekyll-book-framework
```

Or, **download** manually : [Download](https://github.com/michaelravedoni/jekyll-book-framework/archive/master.zip) the project and unzip it. Once done:
1. Rename the directory with the name you want. For example: `my-book` (`JEKYLL-BOOK-NAME` in the following steps).
2. Edit the configuration file (`_data/meta.yml`) as needed.
3. Edit the stylesheet variables located in `book/styles`.
4. Edit the book/work content files located in `book/text`.
5. Install the dependencies, start and deploy the project (see below).

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
## Deployment

At some point you will probably want to publish what you have built so that it can be shared with the wider world. The projects currently supports three methods of deployment: Netlify, Github Pages and Rsync.

### Netlify

Assuming you have created a repository for this project on GitHub, sign up or log in to [Netlify](https://www.netlify.com/) using your GitHub account.

1. Click the big button labeled *new site from Git*
2. Select your repository
3. Configure the basic build settings: choose appropriate branch (`master` by default)
4. You can set the default build command to `jekyll` and the publish directory to `_site/`, but this is not necessare since the `netlify.toml` file has all the information pre-configured.
5. Netlify will auto-generate a site URL for you, or you can set it yourself. The default example uses `http://JEKYLL-BOOK-NAME.netlify.com`. Set this as your `baseurl` in `_config.yml`.
6. Now, every time you push up a commit to `master` on GitHub, Netlify will automatically rebuild your site using the settings in `netlify.toml`. Pretty cool!

### GitHub Pages

Unlike Netlify, GitHub Pages does not support continuous deployment. This means you will need to manually deploy the site by running a script provided in `bin/github-deploy.sh` in the project folder.

1. In `_config-github.yml`, set the `baseurl` in the format that GitHub Pages expects (https://yourusername.github.io/JEKYLL-BOOK-NAME for most sites).
2. At this point you can run `bin/github-deploy.sh` and everything will be pushed up to GitHub on the `gh-pages` branch:

```bash
npm run deploy-github
```

It may take a few moments for everything to become visible online. If you get git errors when deploying because of upstream changes, you can always delete the `gh-pages` branch on GitHub and re-run the deploy script.

If you want, you can remove the `_site` directory from your `.gitignore` file so that you can check built files into version control.

### Via FTP (RSync)
Any web server capable of hosting static files will work (S3, FTP server, etc.). For deploying the site via FTP (RSync), follow this instructions. In the main project folder `/`, run (if not already done) :
```bash
npm install
```

Rename the `env-model.json` file in `env.json` and open-it. Then fill the `<user>`, `<host>` and `<path/>` with your FTP remote server informations. For example:
```bash
username_example@example.ftp.com:web/JEKYLL-BOOK-NAME/
```

Then, to deploy the app, run :
```bash
npm run stage            #For testing on your test server
npm run stage-dry        #If you want to run a dry test

npm run deploy-rsync     #For the production server
npm run deploy-rsync-dry #If you want to run a dry test
```

## Documentation

### Architecture

- `data/meta.yml`: Contains all the metadata of the project and the book. Change the variables on your needs.

- `book`: Contains all the contents of the book. `book/text` contains all the markdown files. If you have a translation, `book/fr` contains the translated book.

- `index.md`: Home page of the book (editable)

- `_bibliography`: Contains the bibliographys in BibTex format (.bib file) necessary for the [jekyll-scholar](https://github.com/inukshuk/jekyll-scholar) plugin

- `materials`: Directory containing all the files (image, text, media) and drafts of the book for discussion

- `images`: Directory containing the files and images necessary for the book

- `output` : Directory containing the output formats of the book

- `_includes`, `_layouts`, `_sass`, `_plugins` and others: Files necessary for the working of Jekyll

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
- auto pdf genarator
- epub, mobi and markdown export
- create different work layouts
- define a workflow (version, edition, translation)
- create template for git issues (Github and GitLab)
- create deploy command for GitLab

## Authors and acknowledgment

* **Michael Ravedoni** - *Initial work* - [michaelravedoni](https://github.com/michaelravedoni)
* **Antoine Fauchié** - *Inspirated work and [project](https://gitlab.com/antoinentl/systeme-modulaire-de-publication)* - [antoinentl](https://gitlab.com/antoinentl)

See also the list of [contributors](https://github.com/michaelravedoni/jekyll-book-framework/contributors) who participated in this project.

* **[electric-book](https://github.com/electricbookworks/electric-book)** - *Inspiration* - [Electric Book Works](https://electricbookworks.com/)
* **[Quire](https://github.com/gettypubs/quire)** - *Inspiration* - [Getty Publications](https://github.com/gettypubs)

## License

[MIT License](https://opensource.org/licenses/MIT)

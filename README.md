#

File Upload App Readme

## Overview

This simple file upload app is built using Node.js and Express. It allows users to upload files through a form, and it includes options for handling both valid and invalid form submissions.

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
2. Clone the repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install the required dependencies.

## Usage

1. Start the application by running `node app.js`.
2. Open your web browser and visit `http://localhost:8000/`.

## Features

- **File Upload**: Users can upload files through a form.

### Valid Form Options

To test valid form submissions, use the provided form with the path `/api/upload/valid`.

### Invalid Form Options

To test invalid form submissions, use the provided form with the path `/api/upload/invalid`.

## Dependencies

- [Express](https://expressjs.com/): Web application framework for Node.js.
- Formidable: Node.js module for parsing form data, especially file uploads.
- Method-Override: Middleware for handling HTTP methods such as PUT and DELETE.
- Body-Parser: Middleware for parsing incoming request bodies.

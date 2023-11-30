# EnvFileMigrator

EnvFileMigrator is a simple, efficient Node.js script designed for migrating `.env` files from a specified directory and its subdirectories to a designated `data` folder. This tool is particularly useful for scenarios such as setting up a new development environment or backing up configuration files.

## Features

- **Deep Scan**: Recursively scans the specified directory and all its subdirectories for `.env` files.
- **Safe Migration**: Copies `.env` files to a `data` folder, preserving the directory structure.
- **Error Handling**: Gracefully handles read/write errors and logs them for review.
- **Folder Management**: Automatically creates necessary folders if they do not exist.

## Requirements

- Node.js (versions supporting ES6 Promises and async/await).
- Basic understanding of Node.js and file system operations.

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/gebinmaxey/EnvFileMigrator.git
cd EnvFileMigrator
```

## How to Run

```javascript
    // Replace your file name here in app.js:4
    const parentDir = path.resolve(__dirname, '../');
```

```bash
    node app.js
```
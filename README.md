# heroku-setup
Setup your heroku remotes in seconds.

## Installation

Installing this neat tool is simple as "abc":

```
npm install -g heroku-setup
```

## Usage

For using the tool you need to add a file called `.heroku.json` that is in the following format:

```
{
  "remote-name": "heroku-app-name",
  "another-remote-name": "another-heroku-app-name"
}
```

After creating the file, you can just type `heroku-setup` in the terminal and the remotes will be added automatically.
Ideally you can include this file in the private source control of your project so others can just `heroku-setup` the project and start deploying.

### Disclaimer

This product is in no possible way affiliated or supported by Heroku

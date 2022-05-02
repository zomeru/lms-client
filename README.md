# STICA LMS

## Getting started

#### Clone the repository:

using ssh

```
git clone -b dev git@github.com:zomeru/lms-client.git
```

using https

```
git clone -b dev https://github.com/zomeru/lms-client.git
```

#### Go to project directory and pull the latest code

```
cd lms-client && git pull origin dev
```

#### Make your own branch

```
git checkout -b <your_branch_name>
```

#### Install dependencies

```
yarn install
```

#### Commit your changes

```
git add -A
git commit -m "Your commit message"
```

#### Pull the latest code from development branch again

This is to check if there are any changes in the code.
Note! There might be some conflicts after pull, fix it before you push.

```
git pull origin dev
git push -u origin <your_branch_name>
```

#### Create merge request from your branch into development branch

Go to this repository and create a pull request from your branch and select dev branch as the target branch

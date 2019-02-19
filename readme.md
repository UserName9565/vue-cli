### Command line instructions

Git global setup

```shell
git config --global user.name "Your Excellency"
git config --global user.email "dev@agilestar.cn"
```

Create a new repository

```shell
git clone https://git.agilestar.cn/finance-group/finance-front-end.git
cd finance-front-end
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

Existing folder

```shell
cd existing_folder
git init
git remote add origin https://git.agilestar.cn/finance-group/finance-front-end.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

Existing Git repository

```shell
cd existing_repo
git remote rename origin old-origin
git remote add origin https://git.agilestar.cn/finance-group/finance-front-end.git
git push -u origin --all
git push -u origin --tags
```
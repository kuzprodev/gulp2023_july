# gulp2023_july
- встановити, якшо не встановленно:
node.js: https://nodejs.org/en  (LTS)   на момент збірки v18.16.1 LTS
gulp:    https://gulpjs.com/
npm:     https://www.npmjs.com/        -менеджер пакетів під nodejs
git:     https://git-scm.com/


tutorial:
                                        краще використовувати git bush  (Git Bash Here)? якщо linux\mac $sudo npm i gulp-cli -g
$ node -v                             - яка версія ноди
$ npm init
$ npm i gulp-cli -g                     якщо вперше на цю систему- це глобально, якщо якісь варнінги то поф)) 
$ npm rm --global gulp                  це щоб видалити галп з усієї системи, робиться один раз на чисту систему

$ npm i gulp -D                         встановити у збірку --save-dev равно -D   встановилося локально -наш package.json змінено -"devDependencies" -розділ з залежностями
$ npm r -g gulp                         видалити глобально пакет залежності

$ touch gulpfile.js                     створюємо файл gulpfile.js
$ rm galpfile.js                        якщо бажаємо видалити файл
 
$ mkdir app                             створюємо папку app                - тут буде чорновий варіант/тута будемо розробляти
$ rmdir app                             якщо бажаємо видалити папку app

$ mkdir dist                            створюємо папку dist  - тут буде основний варіант, який для хоста чи замовника

$ touch .gitignore                      створюємо щоб не слідкувало за деякими файлами /node_modules, package-lock.json - бо не треба 
$ git rm --cached package-lock.json     видалити вже з коміту файл, якщо випадково закомітили
$ git add -f debug.log                  примусово закомітити файл

$ npm i gulp-sass sass -D
$ npm i gulp-concat -D

$ npm i gulp-uglify-es -D

$ npm i browser-sync -D




ЗУПИНИТИ процес у консолі, якщо що -  ctrl + C
Shift + Ins           вставити
Alt + Shift + Ins     копіювати



файл package-lock.json можно видаляти, якщо що


 

Базові та основні команди terminal, які повинен знати кожен:

$ touch index.html       - створити файл index.html
$ rm index.html          - видалити файл index.html

$ mkdir app              - створити папку app
$ rmdir app              - видалити папку app

$ pwd                    - шоб зрозуміти де ми або потрібен повний path
$ cd ../                 - вийти на одну папку назад\перейти на один рівень назад
$ cd ../..               - перейти на два рівня назад   
$ cd app                 - перейти до папки app
$ ls                     - щоб подивитися зміст папки\рівня
$ cd ~                   - перейти на головний рівень-рівень users/user>
$ cd ~username           - перейти до каталогу іншого username 



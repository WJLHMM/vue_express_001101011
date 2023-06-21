    1 nodejs version 8.17.0 （如果node-sass 安装有问题，检查是否安装python 2）

    2 进入根目录 运行 npm install

    3. 在redist根目录下运行命令  redis-server.exe redis.windows.conf

    4. 在mogodb 的data 目录下创建db文件夹 初始化

    启动在bin目录下启动 mongodb：      ./mongod -dbpath C:\MongoDB\Server\6.0\data\db

    注意指向自己db文件夹路径

    同时bin目录下 再运行   .\mongod

5 导入相应 数据库数据

6.分别启动服务端 客户端

"dev:server": "npx cross-env NODE_ENV=dev nodemon server/app.js
"dev:client": "webpack-dev-server --open --port=3100 --hot",

# angular-oidc
An angular project with oidc-client
一不小心把 .gitignore 忘记了，依赖都传上来了...

## 介绍
项目已经配置好了，使用的时候只需要修改 src/environments/environment.ts 文件中的 oidc 配置信息即可。

需要授权才可访问的组件放在 src/app/auth 目录下，属于 auth.module.ts 模块，走 auth-ruoting.module.ts 路由。
详细查看 src/app/auth/test/c1 组件的用法。

不需要授权也可以访问的组件放在 src/app/public 目录下，属于 app.module.ts 模块，走 app-routing.module.ts 路由。
详细查看 src/app/public/index 组件的用法。

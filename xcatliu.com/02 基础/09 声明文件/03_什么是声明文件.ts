// 通常我们会把声明语句放到一个单独的文件（jQuery.d.ts）中，这就是声明文件
// 声明文件必须以.d.ts为后缀

// 一般来说，ts 会解析项目中所有的 *.ts 文件，当然也包含以 .d.ts 结尾的文件。所以当我们将 jQuery.d.ts 放到项目中时，其他所有 *.ts 文件就都可以获得 jQuery 的类型定义了。
// 假如仍然无法解析，那么可以检查下 tsconfig.json 中的 files、include 和 exclude 配置，确保其包含了 jQuery.d.ts 文件。

// 这里只演示了全局变量这种模式的声明文件，假如是通过模块导入的方式使用第三方库的话，那么引入声明文件又是另一种方式了，将会在后面详细介绍。

// 当然，jQuery 的声明文件不需要我们定义了，社区已经帮我们定义好了：
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/jquery/index.d.ts
// 我们可以直接下载下来使用，但是更推荐的是使用 @types 统一管理第三方库的声明文件。
// @types 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：
// npm install @types/jquery --save-dev

// 可以在这个页面搜索你需要的声明文件:
// https://www.typescriptlang.org/dt/search?search=


---
id: examples
title: 示例
description: '简介 > 示例: 可交互的 Redux 示例应用'
hide_title: false
---

# 示例

Redux [源码](https://github.com/reactjs/redux/tree/master/examples) 中同时包含了一些示例。这些示例中的大多数也在[CodeSandbox](https://codesandbox.io)上，它是一个在线编辑器，可让你在线测试示例。

## 原生版 Counter

运行 [Counter Vanilla](https://github.com/reactjs/redux/tree/master/examples/counter-vanilla) 示例:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/counter-vanilla
open index.html
```

也可以打开 [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-vanilla):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter-vanilla/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

该示例不需打包系统或视图层框架，演示了基于 ES5 的原生 Redux API 用法。

## Counter

运行 [Counter](https://github.com/reactjs/redux/tree/master/examples/counter) 示例：

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/counter
npm install
npm start
```

或者可以浏览在线 [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

这是 Redux 结合 React 使用的最基本示例。出于简化，当 store 发生变化，React 组件会手动重新渲染。在实际的项目中，推荐使用 React 和更高效的 [React Redux](https://github.com/reactjs/react-redux)绑定。

该示例包含测试代码。

## Todos

运行 [Todos](https://github.com/reactjs/redux/tree/master/examples/todos) 示例：

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/todos
npm install
npm start
```

或者可以浏览在线 [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/todos/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

这个例子可以帮助你深入理解在 Redux 中 state 的更新与组件是如何共同运作的。展示了 reducer 如何委派 action 给其它 reducer，也展示了如何使用 [React Redux](https://github.com/reactjs/react-redux) 从展示组件中生成容器组件。

该示例包含测试代码。

## 支持撤销的 Todos

运行 [Todos with Undo](https://github.com/reduxjs/redux/tree/master/examples/todos-with-undo) 示例:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/todos-with-undo
npm install
npm start
```

或者可以浏览在线 [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos-with-undo):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/todos-with-undo/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

此示例是前一个示例的变体。它与上一个示例基本相同但额外展示了如何使用 [Redux Undo](https://github.com/omnidan/redux-undo) 打包 reducer，仅增加几行代码实现应用程序的撤销/重做功能。

## TodoMVC

运行 [TodoMVC](https://github.com/reduxjs/redux/tree/master/examples/todomvc) 示例:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/todomvc
npm install
npm start
```

或者可以浏览在线 [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todomvc):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/todomvc/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

经典的 [TodoMVC](http://todomvc.com/) 示例。涵盖了与 Todos 示例相同的要点，可以通过这个示例比较和其他框架的异同。

示例中包含了测试代码。

## 购物车

运行 [Shopping Cart](https://github.com/reduxjs/redux/tree/master/examples/shopping-cart) 示例:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/shopping-cart
npm install
npm start
```

或者可以浏览在线 [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/shopping-cart):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/shopping-cart/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

该示例展示了随着应用升级变得愈发重要的常用的 Redux 模式。尤其展示了，如何使用 ID 来标准化存储数据实体，如何在不同层级组合使用多个 reducer，如何利用 reducer 定义选择器以封装 state 的相关内容。该示例也展示了使用 [Redux Logger](https://github.com/fcomb/redux-logger) 生成日志，以及使用 [Redux Thunk](https://github.com/gaearon/redux-thunk) 中间件进行 action 的条件性分发。

## 树状视图

运行 [Tree View](https://github.com/reactjs/redux/tree/master/examples/tree-view) 示例:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/tree-view
npm install
npm start
```

或者可以浏览在线 [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/tree-view):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/tree-view/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

该示例展示了深层嵌套树状视图的渲染，以及为了方便 reducer 更新，state 的标准化写法。优良的渲染表现，来自于容器组件细粒度的、仅针对需要渲染的 tree node 的绑定。

该示例包含测试代码。

## 异步

运行 [Async](https://github.com/reactjs/redux/tree/master/examples/async) 示例：

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/async
npm install
npm start
```

或者可以浏览在线 [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/async):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/async/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

该示例包含了：从异步 API 的读取操作、基于用户的输入来获取数据、显示正在加载的提示、缓存响应、以及使缓存失效。使用 [Redux Thunk](https://github.com/gaearon/redux-thunk) 中间件来封装异步副作用。

## 同构

运行 [Universal](https://github.com/reactjs/redux/tree/master/examples/universal) 示例:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/universal
npm install
npm start
```

这是使用 Redux 和 React 的[服务端渲染](../recipes/ServerRendering.md) 的基本演示。 它演示了如何在服务器上准备初始 store state，并将其传递给客户端，以便客户端 store 可以从现有 state 启动。

## 真实场景

运行 [Real World](https://github.com/reactjs/redux/tree/master/examples/real-world) 示例：

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/real-world
npm install
npm start
```

或者可以浏览在线 [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/real-world):

<iframe class="codesandbox" src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/real-world/?runonclick=1" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

这是一个复杂程度很高的示例，比较难懂，包含了将获取的实例保存在标准化存储中，为 API 调用实现自定义中间件、渲染已加载的数据、分页、缓存响应、显示错误消息和路由。同时，还包含了调试工具 Redux DevTools 。

## 更多示例

这里可以找到更多案例 [Redux Apps and Examples](https://github.com/markerikson/redux-ecosystem-links/blob/master/apps-and-examples.md)
来自于 [Redux 扩展目录](https://github.com/markerikson/redux-ecosystem-links).

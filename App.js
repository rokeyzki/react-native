import React from 'react';
// import HelloWorld from './src/components/hello-world';
// import Pizza from './src/components/pizza';
// import AntdMobileExam from './src/components/antd-mobile';
// import SimpleApp from './src/components/navigation';
// import Flexbox from './src/components/flexbox/example-first';
import LeanCloudExam from './src/components/leancloud';

// import AppRoot from './src/components/playground/demo-first';

export default class App extends React.Component {
  render() {
    console.ignoredYellowBox = ['Remote debugger']; // Chrome远程调试时启用这行代码

    return (
      <LeanCloudExam />
    );
  }
}

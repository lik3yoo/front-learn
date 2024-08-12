// 用来测试class组件作为jsx的问题
import React from "react";

interface Props {
  children?: React.ReactNode;
}

class FormItem extends React.Component<Props, {}> {
  render() {
    const { children } = this.props;
    return (
      <div>
        <h2>title</h2>
        <section>{children}</section>
      </div>
    );
  }
}

export default function ClassTest() {
  return (
    <div>
      <FormItem>ClassTest</FormItem>
    </div>
  );
}

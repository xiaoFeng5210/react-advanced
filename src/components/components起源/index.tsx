import React from 'react'

class Person extends React.Component {
  constructor(props: any) {
    super(props)
    console.log('hello , i am person')
  }
  componentDidMount() {
    console.log('person did mount')
  }
  eat() {    /* 吃饭 */ }
  sleep() {
    alert('我要睡觉了')
  }
  ddd() { console.log('打豆豆')  /* 打豆豆 */ }
  render() {
    return <div>
      大家好，我是一个person
    </div>
  }
}

/* 程序员 */
class Programmer extends Person {
  constructor(props: any) {
    super(props)
    console.log('hello , i am Programmer too')
  }
  componentDidMount() { console.log(this) }
  code() { /* 敲代码 */ }
  test() {
    this.sleep()
  }
  render() {
    return <div style={{ marginTop: '50px' }} >
      {super.render()} { /* 让 Person 中的 render 执行 */}
      我还是一个程序员！    { /* 添加自己的内容 */}
      <button onClick={() => this.test()} >点击我看看</button>
    </div>
  }
}
export default Programmer

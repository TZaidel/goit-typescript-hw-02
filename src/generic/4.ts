/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/


interface Int {
  title: string
}

class Component<T extends Int> {
  constructor (public props:T) {
  }
}

class Page extends Component<Int> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};
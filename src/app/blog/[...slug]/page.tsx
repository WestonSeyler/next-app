export default function Page({ params }) {
    //page/b/c/d 做了多层结构的适配
    return <div>My Shop: {JSON.stringify(params)}</div>
  }
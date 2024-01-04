export default function Page({ params }) {
    //拿到动态路由信息
    return <div>My Post: {params.slug}</div>
}
// app/page.js
async function getData() {
  const res = await fetch('https://dog-api.kinduff.com/api/facts')
  if (!res.ok) {
    // 这会触发最近的 `error.js` 错误边界
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
 
  return <main>{data.facts}</main>
}
import { useParams } from "react-router-dom"

const DashboardPages = () => {
    const page = useParams()
    console.log(page)
  return (
    <div>DashboardPages</div>
  )
}

export default DashboardPages
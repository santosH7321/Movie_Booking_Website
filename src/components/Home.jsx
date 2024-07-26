import Sidenav from "./templets/Sidenav"


const Home = () => {
    document.title = "Movie booking Homepage"
  return (
    <>
        <Sidenav />
        <div className="w-[80%] h-full"></div>
    </>
  )
}

export default Home  
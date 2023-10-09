import Header from "./header"

const Layout = ({ children }) => (
  <div className="bg-[#201F25]">
    <Header></Header>
    <div className="mt-[68px]">
      {children}
    </div>
  </div>
)

export default Layout

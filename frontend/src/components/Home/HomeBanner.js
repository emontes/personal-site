import React from "react"
import { AppContext } from "../../context/context"
import SmallBanner from "./SmallBanner"
import Banner from "../Banner"
import Background from "./Background"
const HomeBanner = () => {
  const { size } = React.useContext(AppContext)
  if (size < 776) {
    return (
      <SmallBanner>
        <Banner title="desarrollador de sistemas"></Banner>
      </SmallBanner>
    )
  }
  return (
    <Background>
      <Banner title="desarrollador de sistemas"></Banner>
    </Background>
  )
}

export default HomeBanner

import React from "react"
import Banner from "../Banner"
import Background from "./Background"
import { defineMessages, FormattedMessage } from "react-intl"

const HomeBanner = () => {
  const translation = defineMessages({
    title: {
      id: "home.Banner.title",
      defaultMessage: "Desarrollador Front-End",
      descripttion: "Título del Banner",
    },
    subtitle: {
      id: "home.Banner.subtitle",
      defaultMessage: "En Cancún desde 2002, Programando desde 1984",
      description: "SubTítulo descriptivo para el banner",
    }
  })

  return (
    <Background>
      <FormattedMessage {...translation.title}>
        {txt => (
          <Banner title={txt}>
            <FormattedMessage {...translation.subtitle} />
          </Banner>
        )}
      </FormattedMessage>
    </Background>
  )
}

export default HomeBanner

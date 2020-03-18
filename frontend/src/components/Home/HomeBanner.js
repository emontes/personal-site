import React from "react"
import Banner from "../Banner"
import Background from "./Background"
import { defineMessages, FormattedMessage } from "react-intl"

const HomeBanner = () => {
  const translation = defineMessages({
    title: {
      id: "home.Banner.title",
      defaultMessage: "Desarrollador Web en Cancún",
      descripttion: "Título del Banner",
    },
    subtitle: {
      id: "home.Banner.subtitle",
      defaultMessage: "Especialista en Front end",
      description: "SubTítulo descriptivo para el banner",
    },
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

import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  es: "Español",
  en: "English",
  ru: "русский",
  he: "עברית",
  de: "Deutsch",
}

const Language = () => {
  return (
    <div style={{
        textAlign: "right",
        padding: "0.5rem"
    }}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `var(--primaryColor)` : `var(--secondaryColor)`,
                margin: 10,
                textDecoration: `underline`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language

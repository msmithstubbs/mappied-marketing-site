import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './Cta.module.css'

function cta (props) {
  const {title, route, link, supportingText} = props

  if (route && route.slug && route.slug.current) {
    return (
      <div>
        <Link
          href={{
            pathname: '/LandingPage',
            query: {slug: route.slug.current}
          }}
          as={`/${route.slug.current}`}
        >
          <a className={styles.button}>{title}</a>
        </Link>
        {supportingText}
      </div>
    )
  }

  if (link) {
    return (
      <div>
        <a className={styles.button} href={link}>
          {title}
        </a>
        <div className={styles.textMono}>
          {supportingText}
        </div>
      </div>
    )
  }

  return <a className={styles.button}>{title}</a>
}

cta.propTypes = {
  title: PropTypes.string.isRequired,
  supportingText: PropTypes.string,
  route: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string
    })
  }),
  link: PropTypes.string
}

export default cta

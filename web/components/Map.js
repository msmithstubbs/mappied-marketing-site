import React, {Component} from 'react'
import styles from './Map.module.css'

class Map extends Component {
  render () {
    return (
      <div>
        <svg className={styles.svgMap} viewBox='0 0 1440 820'>
          <g fill='none' fill-rule='evenodd'>
            <path className={this.props.selectedOption} d='M0 93C240 31 480 0 720 0s480 29 720 88v732H0V93z' fill='#FFF'/>
            <path className={this.props.selectedOption} d='M393 782l4 1 3 3 4 4 7 3 6 2v3h-4l-3-2-1 2-3 2h-2l-3-1-4-1-5-1-7-3-6-3-9-7 5 1 8 4 6 2 1-2v-4l3-3zM353 61l4 1 2 2v6l-5 2 6 1-4 5 8-3 2 3-4 3 1 4 7-4 6-4 4-6 5 1 5 1 4 2-2 2-4 3v3l-2 2-10 4-6 1-3-2-3 3-7 4-3 2-7 4h-6l-4 3-3 3-5 1-8 4-9 6-5 4-4 7h5l-1 6-1 4 7-1 7 2 3 2 1 3 5 1 3 3h7l4 1-3 4-2 6 1 6 4 6 4-2 5-6 2-9-1-3 8-2 7-4 4-4 2-4-1-5-2-4 8-5 1-5 3-9 4-1 6 2h4l4-1 3 2 3 3v2h7l-2 5-2 6 3 1 2 4 7-3 7-6 4-3 1 5 3 7 2 6-4 4 5 3 2 3 7 2 2 1v5l3 1 1 2-2 6-4 3-3 1-9 3-7 4-8 1-9-1h-12l-5 4-7 3-9 8-7 5 4-1 10-8 11-4 7-1 3 3-5 4-1 6v4l5 3 8-1 7-6-1 4 2 2-6 4-12 3-5 3-7 4-3-1 1-4 10-5h-8l-5 1v2l-6 2-5 2-6 2-4 3-1 2-1 3 1 3h2v-2l1 1-1 2-4 1h-2l-4 1h-5l-4 2 7-1 1 1-7 2h-3v-1l-2 2h1l-2 4-5 5v-2h-1l-1-2v3l1 2v2l-3 2-4 5 3-4-2-3 1-5-2 3v4l-3-1 3 2-2 5 2 1v2l-1 6-5 4-5 2-4 4h-3l-3 2-1 2-6 4-4 3-3 3-2 5v4l1 5 1 4v2l1 7-1 4-1 3-2 3-1 1-3-1v-2l-2-2-2-5-1-4v-3l1-4v-3l-3-5-2-1-5 3h-1l-2-3-3-1h-14l-2 1v5l-1 1-1-1-3 1h-3l-3-3h-5l-3-1-3 1-5 1-6 4-5 3-4 3-1 2-1 4-1 3 1 2-3 6-2 4-1 8-1 3v3l1 3 1 4 2 5 1 3 2 3 5 2 2 2 4-2h4l4-1 4-1 3-3 2-3 1-5 1-2 4-1 6-2h7l1 1v3l-3 4-2 3 1 1-1 3-2 4-1-1h-1l-1 1h1v1l-1 3v4l-1 3-1 1h-1l-2 2 2 1h3l1-1h1l1 1h5l2-1h6l2 1h1l1 1 2 1 2 1 1 2h-1v4l-1 2-1 2v7h-1l-1 3v2l-1 1v2l1 1 1 3 2 2 2 3 2 2v1h3l1 1h2l3-2 3-1 2-2 3 1 2 1 3 1 1 1 2 2h3l4-4h2v-2l2-5 3-3h3v-2l4 1 5-3 2-1 3-3h1l2 2-1 2-1 1-3 1 2 2-1 4-2 3 2 5 2-1 1-4-1-2v-5l6-2v-3l2-2 1 5h4l3 3v2h5l6-1 3 3 3 1 3-2 1-2h12l-4 2 1 3h5l3 3 1 5 3-1 2 2 3 2 3 4v3h2l3 3 2 2 6 1 1-1h4l6 1 1 1 4 1 5 5 1 3 2-1 1 4 3 10 3 1v4l-4 5 2 2 9 1v6l4-4 7 2 8 4 3 3-1 3 6-2 10 4 8-1 8 5 7 7 4 2h4l2 2 2 7 1 4-2 10-2 3-8 9-3 6-3 5-2 1-1 4 1 11-1 9v4l-2 2v8l-5 8v6l-4 3-1 3h-6l-8 3-3 2-6 2-5 5-4 5v5l1 3v6l-1 3-3 3-5 11-3 4-3 3-2 6-2 3-2 4-5 3-4-1-2 1-5-3h-3l-4-3v3l7 5 1 4 3 3v3l-3 8-6 3-10 1-5-1 2 4v4l2 3-3 2-4 1-5-2-2 2 2 5 4 2 2-2 3 3-4 2-3 4 1 5v3h-4l-3 3v5l6 4 5 1v5l-4 4-1 6-3 3-1 2 4 6 4 4-2-1h-4l-1 2-3 2 1 5h-2l-5-2-7-4-7-3-3-4-1-3-3-4-5-10v-5l3-5-8-1 3-5-2-10 6 2-2-12-4-1 1 7-3-1-1-8-2-11 1-4-3-6-2-7h2v-10l1-9v-9l-2-9v-5l-2-7 2-7-1-12v-25l-1-10-2-8-6-4v-2l-11-6-10-6-4-4-3-5 1-2-5-7-6-11-6-12-2-3-2-4-4-4-4-2 2-3-3-6 2-4 4-4 2-4-1-2-2 2-3-2 1-2-1-5 2-1 1-4 2-4-1-2 3-1 4-3-1-2h2v-3l1-2 3-1 2-3 2-3-2-2 2-3-2-6 2-1-1-5-2-3-2-2-1-3 2-2h-2v-2l-3-2h-2l-1 3-3 1h-1v2l2 3-1 1h-1l-3 1v-4l-1 1h-2l-1-3h-2l-1-1h-2l-1 2v-1l-3-2-1-1 1-1v-1l-2-2-2-1-2-1v-1l-1-1v1l-1 2-1-2h-2v-3l1-2-2-1 2-1-2-2-2-3-1-1-2-2-3-3 1-1 1 1-1-2-1-1-1 2-3-1h-2l-2-1-3-1-1-1-3-1h-3l-2-1-3-3-5-6-2-2-4-1h-3l-4 2-3 1-4-2-3-1-5-3h-4l-5-3-4-3-1-2h-3l-5-2-2-3-5-3-2-4v-3h1v-2l2-1v-2l-1-3v-2l-2-3-3-6-4-5-2-4-4-2-1-1 2-4-2-2-2-2-1-4-2-1-2-3-2-3v-2l-1-4v-7l-2-2h-2l-2-2-2 3v2l-1 5 1 2 2 4 1 2 1 2v4l2 1v3l3 3v5l1 3 1 2-1 4h3l1 3 2 2-1 1-2 2h-1l-1-3-2-4-3-2-3-2 1-4v-4l-2-1-3-3v1l-1-2-3-1-2-4h2l3-2 1-3-3-4-2-2-1-3-1-4v-5l-1-5 1-3-2-4h-2v-2h-3l-1-2h-4l-1-1v-4l-2-6v-8l1-1-2-3-1-5 2-4-1-4 3-4 3-5 1-5 5-5 7-10 4-8 2-5v-3l2-1 5 2-1 5 2-1 2-5 2-5h-1l-5-5-1-3-7-2 2-5 3-4-4-2 3-5-2-4 2-3v-2l-2-1 3-5-2-5 3-5h-11l-3-2-3-6-3-1-6-2-6 1-5-3-3-2-6 1-3 4h-3l-6 1-5 2-6 1 3-3 7-5 7-2v-1l-9 3-6 4-11 3v3l-8 4-7 2-6 2-4 2-9 3-5 3-7 2H6l-6 2v-4h7l5-2 9-4 3-1 5-2 5-4 6-3-7 1v-1l-5 2 1-2-4 2 2-3-7 2h-2l3-3 3-2v-2l-7 1-1-3-1-1 4-3v-2l5-3 7-3 5-3h5l7-2h2l5-1 3-3-1-1 5-2h-2l-6 2-3 1-1-1h-7l-4-1 1-2-1-3 9-2 12-3h3l-4 3h9l1-4-2-2v-4l-3-2 6-3h7l8-2 4-2 7-3h5l10-2h3l9-3 5 1-1 2h9l-2 1 5 1 4-1 6 2h7l2 1 6-1 3 2h4l5 1 3 3h4l5-2 7-1h5l8-2 8-1v2l4-1 4-3 1 1 2 4 9-3-4 4 5-1 3-1h5l3 2 7 2 5 1 4-1 2 3-8 2 6 1h11l4-1 2 3 6-3-2-2 4-1 5-1h4l2 1 1 3 5-1 5 3 6-1h6l2-3 4-1 5 2-4 4 5-4 3 1 6-6-1-3-3-2 5-5 8-4zm1039 654h3l3 2 3-1 5-1 2 1-4 6-3 2-4 5v-2l-6 4h-4v-5l2-4 1-5 2-2zm46-179l1 3v4l1 1v138l-4 3-4 4-3 4-1 2-3 2h-6l-6 3-3 2-5 3-2-3-3-1 3-3-3 1-7 4-3-1-3-1-2-1-4-1-1-4 1-5 1-3-2-2-4-1 3-3 1-4-5 4-4 1 4-3 2-4 3-3 2-4-7 5-4 2-4 5-2-3 1-3-1-4-2-2 2-2-5-3h-4l-3-3h-9l-8 2-6 2h-5l-6 3-5 1-2 3-3 3h-4l-4 1-3-2-4 1h-4l-4 4-1-1-3 2-4 2h-6l-4-4-2-1 1-4 3-1 1-1 1-2 2-4v-13l1-3-1-4 1-2-2-2 1-5-2-5v-2l2 2-1-5 2 2 1 2 1-3-2-5v-2l-1-1 2-4 1-1 1-3v-4l3-4v5l3-5 4-1 3-3 4-2 3-1 1 1 5-2 3-1 1-1 1-1 3 1 6-2 3-3 2-3 3-3 1-2 1-4 4-5 2 6 2-2-1-2 2-3 2 1 1-5 3-2 2-3 3-1v-1h2l1-1 2-1 3-1 3 3 2 3h4l3 1-1-3 3-5 3-2-1-1 3-3 3-3 3 1 4-1 1-3-4-2 3-1 3 2 3 2 4 2 1-1 3 2 4-2 2 1 1-1 2 2-2 4-2 2h-2v3l-2 3-2 2v2l4 3 3 2 3 2 3 4h1l3 1v2l5 2 3-2 2-3 2-3 1-3 2-5v-2l1-2v-4l1-4 1-1-1-2 2-3 2-4v-1l2-3zm-480 9l1 2 1 3 2 4v7l1 2-1 3-1 2-1-3-1 1 1 5-1 2-2 2v5l-3 6-3 9-4 11-3 8-2 7-5 1-4 3-3-2-4-2-1-3v-5l-2-5v-4l1-4 3-1v-2l3-5 1-4-1-2-1-4v-6l2-3 1-4h2l3-1 2-1h2l4-4 4-3 2-3-1-3 2 1 3-4 1-4 2-2zm-79-15v1h-1l2 4v7l-1 4 1 4v3l1 1v2l1 2 1-2 1 3 1-1-1-3-1-1-1-7 2-6-2-2v-6l-3-3zm484-8l2 1-2 2-5 2-5 2-4 4-4 2-1-1 1-2 2-4 6-2v-1l5-2h4l1-1zm-37 7l3 2 1 1v2h-2l-7-4 5-1zm-10-8l2 2 3-1 1 3-6 1-3 1h-3l2-4h3l1-2zm78-45l8 2 1 2 1 10 6 3 4-6 6-4h5l4 2 4 3h7v39l-8-4-5-2-2 2h-6l2-5 4-1-1-7-2-5-10-5h-4l-8-6-2 3-2 1-1-2v-3l-3-3 5-2h4v-1l-8-1-2-3-5-1-2-3 7-2 3-1zm-52 45l-1 4-8 1-6-1v-2l4-1 3 2 4-1 4-2zm-487-27l-1 9 1 4-1 2 2 4 3 4 1 3 1 1v3h1l2 1h1l-1-1-2-6-1-4-4-4 1-2-1-2 1-3-1-1v-2l-2-6zm400 14l7 1 4 2h2v2l10 1 2-2 9 3 2 3 8 1 6 4-6 2-6-2h-10l-5-2-6-2h-6l-9-2-1-3h-5l4-6zm149-2l1 1v3l-3 4v-4l1-2 1-2zm-205-65h4l8 1 5 6 4 4 3 3 5 6h5l5 4 3 5 4 3-2 5 3 2h1l1 4 2 3 4 1 2 3-1 8-1 9h-6l-4-5-6-5-2-3-4-5-3-5-4-8-4-5-2-5-2-4-4-4-3-5-4-4-6-6-1-3zm157 23l1 1-5 6-4 1-5-1h-8l-5 1-1 4 5 6 3-3 10-2-1 3-2-1-2 3-5 3 5 7-1 2 4 7v4l-3 2-2-2 3-5-5 2-2-2 1-2-4-3 1-6-3 2v7l-1 8-3 1-2-2 2-5-1-6h-2l-1-4 2-4 1-5 2-9 1-2 5-4 4 1 6 1h7l5-4zm-43-32l3 3v3l4 2 4 1v3h-4l1 3-3 2-3 5 4 6-1 3 6 5-6 1-2 4v5l-5 4v6l-2 9-1-2-6 3-2-4h-4l-2-2-7 2-1-3h-8l-1-8-2-2-3-5-1-5 1-6 3-4 4 3 4-2 1-5 2-1 6-1 4-5 2-3 2-3 4-3 4-4 3-5h2zm65 58l6 2 1 4-4-2-4-1-3 1-4-1 1-3h7zm-13 2l2 2-2 2-4-1-1-3h5zm-489-21l-2 2-3 1-3 3 1 2-1 4-1 4 2 2 2-1h4l3-1-2-2 2-3 2-2v-5l-1-2-3-2zm495-11v4h3l1 3-1 5-2-1-1 4 2 3-1 1-3-4-1-8 1-4 2-3zm-16-44l4 2 1 3v3l1 4 1 3-2 5-2-6-2 3 2 5-2 2-6-3-2-4 2-3-4-3-1 3-3-1-3 4-1-2 1-5 4-2 2-2 2 3 4-2 1-3h3v-4zm-236-1l4 4 3 4 2 6v6l-2 2-5 1-2-5-2-8 2-10zm204-9l1 5-3 3-2 4-7 6 3-4 3-4 3-4 2-6zm24 1v6l-2 2-1 3-2 2-3-4 1-2 1-1v-4h3v4l3-6zm0-8h5l2 2 2 7-4-2v2l2 4-3 1v-4h-2l-1-4 3 1v-2l-4-5zm-12 4l3 2h4v2l-2 3-3 2-1-3v-3l-1-3zm-9-9h4l2 2v5l-3-3-3-4zm0-30l4 2 1-2 1 2v2l2 4v5l-3 2v5l1 5h3l3-1 6 4v3l2 1v3l-4-3-3-3-1 2-3-3-5 1-3-2v-2l1-2-1-1-1 2-3-3-1-3-1-5 3 1-1-9v-5h3zm-1000-8h3l5 1v-1h4l3 1h2v2h3v2h2l2 2-2 3-2-2-2 1-2-1-1 1-2 1-1-2-2 1-2 4-1-1v-1l-4-1h-5l-3 1-2-2v-2l5 1h4l2-1-2-3v-2l-3-1 1-1zm-24 8h4l3 2v2h-3l-2 1-3-1-2-2v-2h3zm966-10l3 1 1 2-2 2v4l-4 3-5-2-1-5 2-3 6-2zm-986-18l4 1h4l5 2 2 2 5-1 1 2 4 3 3 3h2l3 1-1 2h4l3 2v2h-4l-3 1-4-1-7 1 4-3-2-2h-4l-1-2-1-3h-3l-4-2-2-1-6-1-2-1 2-2h-5l-4 3h-2l-1 2h-5l3-2 2-2 2-1 3-2h4l1-1zm1038-12l2 1v4l-1 10-1 4-4-5-1-4 1-6 4-4zm58-96l8 8 2 5-1 6 3 6 1 5 2 3v4l-5 3-9 1-4 6-4-2-2-4-8 1-5 3h-6l7 4 1 10-2 3-4-3-1-5-3-2-4-4 4-1 1-4 4-3 1-4 9-2 6 1v-11l5 3 4-6 2-2-1-7-5-7v-4l4-1zm-14 42l4 1 1 2-1 4-3-2-2 1v4l-4-2-1-3 1-3 4 1 1-3zm-546-8l3 2h8v1l2-1v2l-7 1v-1l-6-1v-3zm-41-15l-1 5 1 1-1 4-4-3h-2l-7-3v-4l6 1 5-1h3zm162-51l-5 2-4 1-1 4-5 1-3 6 6 5v4l7 7 3 3 3 4h3l1 2h-3v5l-1 2-1 1v3l3 5 5 1 4 3 7 1 7-2v-1l-1-4-1-7-4-1v-5h-3v-5l5 2 3-2-4-4-2-3-4 1 1 5-2-4-1-1 1-3-2-2-6-2-3-5-3-1-1-2h5l-1-4 4-1 4 1v-6l-2-3h-5l-4-1zm-276 27l1 3h3v-1h3l1 3-2 2v4l-1 1v3h-2l2 4-2 4 2 2-1 1-2 3 1 2-2 1-3-1-2 1v-8l-2-1-1-2v-4l2-2 1-3 1-3v-3l-1-2v-2l2-1 2-1zm83 6l3 4v8h-2l-2 2-2-2-1-7-1-3h3l2-2zm1-10l1 5-2 4-2-1-1-4 1-2 3-2zm-419 0l-4 1-3 1h-6l-2 2-4 2-3-1-2 2 2 2h2l4-1 4-1 2-1 4-2 6-3v-1zm1037-15l10 6 4 2 5 1 1-2 6 6-6 2-1 6-10-4 2 6h-5l-5-6v-4h5l-4-8-2-5zm-1053-5h-2l2 3h-8l-4 1h-4l-4 4-3 2 1 1 5-4-4 4-3 4-2 4-1 2v2l-1 1v4h2l2-1 1-1 3-3 2-3v-4l1-2 2-3 2-2 3-1-1 2 2-3 2-1 1-2 4 1 2 2-1 3-1 3-4 2v1h1l4-2h1v4l-1 2 4-2 1-1 1-3 3-3 1-4 1 4h4l2-1-1-5-1-2-4-1h-7l-3-1v-1zm489 18l-1 1-1 2h-1l-1 1 2 2h1v3h1v-2h3l1-1v-2l-1-1h-1l-1-1-1-1v-1zm-459-5l-2 1-2 1-2-1-4 1-3 1h-2l-2 2 1 1h2v-1h10l4-1 1-3-1-1zm64-16l1 3h7l-3 3h-2l-5-2v-2l2-2zm922-42l4 4 7 5 5 6 6 5 13 11-8-2 3 8 9 6 3 4-6-4v5l-5-5-3-5-5-7-2-4-6-8-8-5-6-8 2-3-4-2 1-1zM299 185l-1 1-2 1-3 1-3 2-5 2-5 2-4 3v1l5-2 2 2 4-1 4-2 5-2-3 3 3 1 2 2 5-1 5-1v2h1l2-2h-2l2-3-1-1 2-2-5-1v-3l-1-1h-3l-4-1zm153-16l2 1-2 1-3 4-5 5 4-2 2 1-2 2 4 2 2-2 4 2-2 4 3-1v7l-3 5h-2l-3-1 2-5h-1l-7 5-2-1 4-2-4-2-5 1h-9v-2l3-2-1-2 5-3 7-9 4-4 5-2zm-329 5l4 2h2l4 1v5l3 2v3l-3 1-6-3v-2l-2-2v-1l-4-1 1-3 1-2zm288 5l5 1 4 3v1h-2l-6-2-3-3h2zm278-49l-4 6 4-1h5l-2 5-3 5h4v1l4 6 3 1 3 7 1 2 5 1v4l-2 1 2 3-4 3h-7l-7 2-2-1-3 2h-5l-3 2-2-1 7-6 4-2h-7l-1-3 4-1-2-4 1-3h6l1-3-3-3-5-1-1-2 1-2-1-2-2 3v-6l-2-3 1-5 4-5 3 1 5-1zm-16 19l4 4-2 4v4l-3 5-8 3-7-1 4-6-2-5 7-5 3-2 4-1zm-556 6l1 1 5-1-7 7v4h-1l-1-2 1-3-1-2 1-2 2-2zm639-11l1 3-2 5-5-4-1-2 7-2zM50 134h3v2l-7 3-6 2-1-2 2-2 6-2 3-1zm-40-13h2l-2 2-3 1-2-1-1-1 6-1zM595 12h24l18 3-6 1h-12l-17 1h13l9 1 6-1 2 1-4 3 9-2 15-1 10 1 1 1-13 3-2 1h-11l8 1-5 3-3 2-1 5 3 3h-5l-6 2 5 2v4h-4l4 4-8 1 4 1-2 2-5 1h-5l4 3-1 2-6-2-2 2 4 1 4 3 1 4-7 1-2-2-4-3v3l-5 3h15l-11 5-11 4-12 1h-4l-4 2-7 6-10 3h-3l-5 2-6 1-5 3-1 4-3 3-8 4v5l-3 4-4 5-6 1-5-5h-8l-3-3v-5l-5-7-1-3 2-5-4-4 4-4-2-2 6-6 7-2 2-2 3-4-5 2-3 1h-3l-4-1 1-4 3-2h3l7 1-5-3-2-2-4 1-2-1 6-5-1-1-1-4-2-5-3-1 1-2-7-3h-25l-3-1-4-3 11-2h7l-14-1-6-2 2-1 15-2 13-2 3-2-7-1 4-2 13-3h5v-2l9-1h20l2 1 10-2 6 1 5 1 5 1-6-2 2-2 11-2h11l5-1h11zm-219 98h2v1l-3 3h-2v-2l3-2zm19-57l-5 3v3l6-4 11-2 2 5-3 3 9-2 4-1 7 2 3 2-1 2 8-1 2 3 7 2 2 2 1 5-8 2 7 3 5 2 3 4 6 1-3 3-10 6-3-2-4-5-5 1-3 3 3 3 4 2 1 1v6l-3 3-5-1-8-4 4 4 2 4v1l-10-2-7-3-4-2 3-2-5-3-4-2-1 1-12 1-2-1 5-4h7l9-1v-2l3-3 8-5v-2l-1-2-4-2-6-2 3-1-2-3h-3l-2-2-3 2h-7l-13-1-7-1-5-1-2-2 6-2h-6l3-5 7-4 5-2 11-1zm-31 54h6l-1 1-7 3h-2v-1l4-3zm-353-4l2 1 3-1 1 1 3 1-1 1-4 1-2-1v-1H9l2-2zm353-11l2 1-1 2 3-1 1 2 4 1 3 2-1 3 3-1 2 2-5 2-5-2-1-2-6 3-7 3v-4l-6 1 6-3 3-4 5-5zm275-4l6 1-1 3 4 4-6 4-12 3-3 1-5-1-11-1 4-3-8-2 7-1v-2l-8-1 3-3 6-1 6 3 6-2 5 1 7-3zm-228-9l2 2-1 2-1 1-3 1h-5l1-2 3-3 4-1zM287 55l3 1-5 2 10-1 2 2 7-3 2 2-2 5 4-2 2-5 4-1 3 1 2 2-2 5-3 3 4 2 5 3-3 2h-6l1 2-3 2-7-1-5-1h-4l-9 2-11 1h-7v-2l-3-2-4 1-1-4h3l7-1h5l6-1-6-1h-14v-2l11-2-6 1-5-2 7-3 5-2 13-3zm47 15l3 2h1v1l1 2-4 2-4-1h-3l-3-2 4-2 5-2zm601-32l4 2-1 1-11 3-9 2-8 4-3 5-3 4 3 4 9 4-2 1-12-1-2-2-8-1-1-3 3-1-2-3 5-4h-3l6-4-2-2 6-3 9-3 11-1 5-1 6-1zM271 50l4 1h9l1 1 2 2-6 1-13 4-8 3-3 2-12 2v-2l-5-2 4-2 7-4 7-3v-3h13zm72 2l3 1h7v1l-6 2 4 2-5 5-8 2-3-1-1-2-5-3 1-2 7 1-1-3 7-3zm22-1h8l5 1-9 4-5 1-7 4h-4l1-4 3-3 4-2 4-1zm49 2h8l4 3v1h-8l-5 1v-1l-2-2 1-2h2zm-90 0l2 1-6 4-3-4h2l5-1zm886-1l8 2 2 1h-14v-2l4-1zM373 37h6l3 2h6l2 1-3 2 3 1 1 1h5l4 1 7-1 7-1 6 1 2 1-1 2-3 2-7 1-4-1-10 1h-8l-5-1-8-1 1-3 3-2-2-2-6-1-3-1 4-2zm-46 2h3l-2 2-1 2 4-1 4 1-2 2-5 2-13 1-11 2h-6l2-2 10-2-17 1-4-1 11-4 5-2 8 2 2 2 6 1 1-5 5-1zm45 5l1 2v1l-4 2-5-1-3-1 4-2 7-1zm810-2h10l16 2 3 4h-13l-4 1-12-3-3-3 3-1zm31 3h8l11 2-1 1h-7l-9-2-2-1zm-849-6l1 2-3 3-5 3h-10l3-3h-6l4-3h4l7-2 4 1 1-1zm-54-4l-6 3-5 2h-3l-9 2-7 1-3-1 11-4 11-2h5l6-1zm168-22h6l7 1h14l5 1-1 1-9 2h-9l-3 1h7l-10 3-6 1-9 3-7 1h-3l-11 1h4l-3 1 1 2-5 2-6 1-3 2-6 1-1 1h6l-1 1-11 3-8-2-11 1-5-1h-6l2-2 7-1 2-3h3l7 1-2-2-4-1 4-2 7-1 3-1-3-2 1-2h9l2 1 6-2h-18l-4-1-1-2-2-1 1-1 5-1h4l7-1 6-1h4l2 1 5-2h11l9-1 1 1 10-1zm279 12l5 1 11 3-8 2-1 3-3 1v4h-4l-8-3 3-1-6-2-7-3-3-3 9-2 2 1h5v-1h5zm-428 8l4 1-3 1-8 1-3-1 5-2h5zm449-1l2 1 5 1-7 2-6-1 2-1-2-2h6zm-401 2h7l1 1v1h-2l-6-1v-1zm-1-4h5l2 2-2 1-7 1-1-1 1-2 2-1zm-21-2h6l7 2v2l-1 2-5-1-4-1h-7l5-1-3-1 2-2zm682 0h3l12 2 1 2-17 2-1-6h2zm-629-8l2 2 4 1 4 1v2l2 2-6 1-9 3-7 1-6-1-2-2 2-1 4-1h-6l-1-2v-2l4-1 4-1 4-1v-1h7zm-75 10h1l3 1-5 1h-5l1-1 5-1zm674-10l9 2 13 4 4 4h-7l-11-1-7-2-6-3h-6l5-3 6-1zm-231 3h8l7 2-4 2-9 1-10-1-1-1h-5l-4-2 10-1 5 1 3-1zm86-1h5v1h-4l-3 1-3 1-5-1 1-1h-7l6-1h5l1 1 1-1h3zM733 218l-9-1-7 2-1 3-5 1-6-3-1 1-9-2-2-2 3-4v-11l-4-6-4-3-7-3v-4l6-1 8 1-2-6 5 2 10-4 1-5 4-1 4-1 2-2 4-8 6-2h4v-1l4-1 1 2 3-3-1-2-1-3-2-4v-5l1-2 1-1 3-1 2-1 3-2v3l-1 2 1 1 2 1-1 2h-1l-3 4 1 3 1 2 4 1v2l5-1 2-2 5 3 2 1 3-1 7-3 5-2 4 1 1 1 4 1 1-3 6-2-2-4v-5l1-3 4-2 4 4h3l1-4v-3h-2l-3-2-1-3 5-1 5-1 5 1h4l5-3-5-3-8 1-7 2-6 1-3-3-5-2v-5l-2-5 1-3 3-4 8-5 3-1-1-3-6-2-7 1-3 4 1 3-5 5-7 4-2 8 3 3 4 3-3 7-4 1v9l-2 5h-6l-2 4h-5l-1-5-5-6-3-8-4-3-7 6-6 1-6-2-2-6-2-13 4-3 11-5 7-5 7-7 8-10 6-4 9-6 8-2h6l5-4h7l6-1 13 4-5 1 5 3 4-2 7 3 11 2 16 5 4 3 1 3-3 3-6 1-19-4-3 1 8 4 1 2 2 5 5 2 4 1v-2l-4-3 2-1 11 3 3-2-4-3 8-5h3l5 2 1-4-5-3 1-3-4-3 11 2 4 2-5 1 1 3 4 2 5-1v-4l7-2 12-4h3l-3 3h5l2-1h7l5-3 6 3 2-3-5-3 1-1 12 1 6 2 17 5 1-2-5-3-1-1h-5v-3l-4-4-2-1 4-5v-4l2-1 10 1 3 3-1 4 4 1 3 4 4 7 6 3v3l-3 7 5 1 1-2 3-1-1-3 2-2-4-3v-3l-5-1-2-2-1-5-7-4 4-3-3-4h1l4 3 2 4 5 1-4-3 4-2h8l9 2-7-4-4-5 5-1 9 1 7-1-5-2 1-4h4l5-2 8-1v-1h9l4 1 5-3h6l-1-2v-1l6-2 8 1-3 1 8 1 4 2 2-1h10l10 2 6 2 2 2-2 2-6 2-1 2h5l6 2 3-1 5 3v-1l5-1 12 1 4 2h16l-4-3 8 1h6l9 2 6 3v2l9 4 9 2-3-5 8 2 5-1 9 1 1-1 7 1-9-5 2-2 38 3 7 3 15 4 13-1 9 1 6 2 5 3 7 2 3-1 7-1 8 1h7l13 4 2-1-8-3-2-3 15 2 7-1 15 3 8 2 31 20-2 3-6-1 8 3 8 4 4 2 4 2 1 1-10-1-6 4-2 1-2 4-2 3 2 2-11-3-5 4-5-2-1 2h-7l3 3 1 5 3 3 6 1 9 8h-4l3 5 4 2-4 3 5 6-6 2 5 6-2 5-5-4-10-8-15-13-6-7v-4l-2-2 5-2v-6l1-6 2-4-6-8-5 1 3 4-3 6-11-7-9 2v9l7 3-7 2h-6l-4-4h-8l-2 2-14-1-12 2-3 11-5 13 8 1 5 3 5 1 1-3 5 1 12 6 4 5 1 6 5 6 5 10-1 8 1 4-1 7-2 6-1 4-4 3h-3l-5-3-4 5 1 1h-2l-1 2-1 2 3 4-2 1v1l-1 2-3 1-1 2 1 2v1l2 1 4 3 8 7 3 3 3 7v4l-4 1-3 2-4 1-2-3-1-5-5-6 3-1-6-5-2-1v1h-2v-1h-2l-2-1v-3l1-1-1-1v-3l-1-1-3-1-3-1-6 1-2 3-5 2 2-3-3-2 2-4-4-3-3 2-3 4-1 4h-5l-1 3 4 4 4 1 2 2 4 2 4-4 5 2h4l2 4-6 1-1 4-4 3-1 4 7 3 4 6 5 5 5 5 2 4-3 2 2 3 4 2 1 5v4l-3 1-2 6-2 8-3 7-6 6-6 5h-6l-2 3-2-2-3 3-6 3-6 1v6h-3l-2-4 1-2-7-2-3 1-6 5-3 5-1 5 5 6 6 8 5 3 4 5 4 11v10l-4 4-5 4-4 5-6 5-2-3 1-4-4-4-5-1-2-3-3-6-5-2h-5l1-5h-5v7l-2 8-1 5 1 5h3l2 5 2 5 3 4h3l3 4h1l3 4 3 4v8l1 4 2 2 2 5v2h-4l-5-4-6-5-1-3-3-4-1-5-2-3v-4l-1-3-2-2-1-3-3-3-3-3-1 3-1-3 1-4 1-5-1-5 1-4-2-4v-6l-2-3-3-7-2-8-3-5-3 3-5 4h-3l-3-2 1-7-2-5-5-7v-2l-3-1-4-5-2-3-1-3-1-3-3-3-5-1 1 3-1 3-2-1-1 1-2-1h-2v2h-3l-7 1 1 5-2 3-7 4-5 7-3 4-5 4v2l-2 2-4 2h-3l-1 5 2 7v5l-1 6v10h-2l-2 5 1 2-4 1-2 5-2 1-5-5-3-9-2-6-2-2-4-6-1-7-2-4-5-8-3-12-3-7v-8l-2-5-7 4-4-1-7-7 2-3-2-2-6-5-4-1-2-5-5-4-9 1h-8l-7 1-10-2-6-1-6-1-3-7-2-1-4 1-5 3-6-2-6-5-5-1-4-6-5-8-2 1-4-2-1 2h-3l1 3v1l2 4 3 6 2 1 1 2 4 2 1 3-1 2 1 2 2 1 1 2 1 2-1-4 1-4h1l2 2v7l1 2h1v1l4-1h4l3 1 3-4 4-4 3-4 1-2v4l1 5 3 4 3 2 4 1 3 1 2 3 2 2 2 1v1l-2 4v2l-2 1-2 4h-2l-1 2-1 3 1 3v1h-3l-3 2v3l-1 2h-3l-2 1v2l-2 2-3-1-3 3h-3l-3 1-1 3v2l-5 3-8 2-5 5h-2l-2-1-2 3-4 1h-4l-1 1-1 1-2 1-1 1h-2l-2 1h-3l-2-4v-3l-1-2-1-4-2-3h1v-6l-1-3-2-2v-2l-3-2-3-5-2-5-3-4-3-1-3-6-1-4v-3l-4-7-2-2-3-1-2-4v-1l-1-3-2-1-2-5-4-5-3-4h-2v-5l1-2v-1l-2 2v5l-1 3-2 1-1-2-3-3-4-8h-1l3 6 4 6 4 10 2 3 2 3 5 7-1 1v4l7 5 1 1 2 6-1 1 1 6 2 7 2 2 3 2 3 7 2 5 3 3 7 6 3 3 3 3 2 2 3 2 1 2v3l-3 1 2 2 2 1 1 2 2 3h3l5-2 6-1 4-1 3-1 1-1h5l2-1 3-1 3-2h1l1 2-1 3v3l-1 3-1 6-2 7-3 7-4 9-5 6-6 8-5 5-8 6-5 5-5 7-1 3-2 1-3 3-2 2-2 1v4l-2 2-1 4-2 2-3 7v4l4 2v1l-2 4 1 2-1 3 2 3 2 6 2 1v23l1 3-2 5-2 4-3 3-5 3-6 2-6 7-2 1-4 4-2 1-1 5 2 4 1 4v1h1l-1 6-1 3 2 1-1 2-3 2-4 2-6 3-3 3 1 2 1 1-1 3-1 4-1 5-2 2-3 3-2 1-2 3-2 3-3 5-6 6-4 3-4 3-5 2-3 1v1l-3-1-3 1-5-1-3 1h-2l-5 2-5 1-3 2h-2l-2-2h-2l-2-3v1l-1-1 1-4-2-4 2-1v-4l-3-6-2-5-4-8-3-4-2-4-1-6-1-4-1-10v-7l-1-3-2-2-3-5-2-7-1-4-4-6v-4l-1-4 1-5 2-6v-2l2-5 1-3 3-4 2-2v-8l-1-2-2-4-1-3v-2l2-2-2-6-1-4-2-3v-3l-2-5-4-6-5-6-4-5-3-6v-2l1-2 2-4 1-5h-1l1-7 1-5-2-4-2-1-1-2-2-1v-2l-5 2h-2l-2 1h-4l-3-4-2-4-3-4h-9l-4 1-4 1-9 4-3 2-4 1-5-1h-2l-4-1h-3l-6 1-4 1-5 3h-3l-5-3-5-5-4-3-4-4h-1l-4-3-2-3-1-2-1-4-2-4-2-2-2-1-1-1v-3l-1-1-2-1-2-2-3-1-1-2-1-2-1-1v-7l-2-5-2-2 2-1 3-4 1-3v-3l1-3 1-6-1-6v-3l1-3-2-2-2-3v-5l2-2 2-3v-2l2-4 2-4 2-1 2-3v-3l2-4 3-2 4-6 2-3h5l4-4 3-2 4-5-1-7 2-5 1-3 3-4 5-3 4-2 3-7 2-3h4l2 2h5l5 1h2l5-3 5-1 4-3 4-1 8-2h9l2 1 5-2h5l2 1h3l5-3 4 1v3l4-2v1l-2 3v3l2 1-1 5-3 3 1 4h3l1 2 2 1 6 2h2l4 1 7 2 3 6 4 1 7 2 6 3 2-1 2-3-1-4 1-3 4-3 3-1 7 1 2 3h2l1 1 5 1 2 2 6-1 5 2 5 2 3 1 3-2 2-2h8l2 3 1-2 4 2h4l2-1 2-2-1-1 1-2 1-5v-1l2-5 2-4v-1l-1-4 1-3-3-2 2-3-3 1-4-2-3 4-8 1-4-4h-5l-1 3h-3l-5-3h-6l-3-6-4-3 2-5-4-2 5-6h8l1-5 9 1 5-4 6-1 8-1 9 5 7 2 5-1h4l6-3v-2l-2-4-3-2-3-1-2-2-7-4-6-3-4-3 3-1 3-5-3-2 6-2v-2l-4 1-4 1-3 2h-4l-3 2v4l3 1h5l-1 2-5 1-6 3-2-1v-3l-5-1v-1l5-2-2-2-7-1-1-2h-4l-2 4-3 4 1 1-2 2-2-1v7l-2 2-1 4 1 4 1 2 5 2-1 1h-6l-1 2-4 3-2-2v-1l-3-1h-2l-6 1 3 4-2 1h-3l-2-3-1 1 1 3 3 3-2 1 3 3 3 2v3l-5-1 2 3h-3l2 6h-3l-4-3-2-5-1-4-3-2-2-4-1-2h-1v-1l-3-2v-9l-1-1h-1l-1-2-2-1-5-2-3-2-4-2-5-4 1-1-2-2v-2l-3-1-1 3-2-2v-2l1-1-4-1-3 2v5l1 3 5 3 3 4 5 5h4l1 1-1 1 4 2 4 2 4 3 1 1-1 2-3-2-4-1-2 4 4 2v3h-2l-3 5-2 1v-2l1-3 1-2-2-3-2-3-2-1-1-2-4-1-2-3h-3l-4-3-5-3-3-4-2-5-2-1-4-2-2 1-3 3h-2l-4 3zm-23 26h-1 1zm-1-1l1-1h-2v1h1zm-16-26l-8-1-4 1-5-1h-6l-6-1-7 4 2 2v4l2-1 2-1 1 3h3v-1h3l1 3-2 2v4l-1 1v3h-2l2 4-2 4 2 2-1 1-2 3 1 2 4 1 1 3 2 2 3 1 2-3 3-2h11l3-4 4-2 1-4 3-2-2-4 2-4 2-4 1-2 6-1 5-4-1-3-5 1-6-3-1 1-9-2-2-2zm24 21v-2l-1 1h-1l-2 2h2v1h3v-2h1-2zm6-1l-1-1h-1v1h2zM339 400v-1h-1 1v1zm39-34v-1l-1 1h1zm332-144v-1h-1v1h1zM384 373v-1h-1v1h1zm0-4h-1l1 1v-1zm-56-21v-1l-1 1h-3l1 1h-1v1l2-1h1l1-1zm1-2h-1 1zm0-5l-1-1v1h2-1zm-7 1l1-1h1l1-1v-1h-1v2h-1l-1 1zm2-3h-1v-1h-1v1h2zm-4-1v-1h-1v-2h-1v-2 2l1 1h-1v1h1l1 1zm-4-3v-1h-1v-1h-1v1h1l1 1zm7-4h-1v1l1-1zm-17-1h-1v2h1l-1 1h2v-3l-1 1v-1zm12 0l-1-1v-2 1l1 1v1h-1v1l1-1zm-9-5h-1 1zm-3 2v-1l-1-1h1-1v-1h-1l1 1-1 1v1l-1 1 1 1v-1 1l1 1v-1h1v-2zm7-4l-1-1v1h1l1 1 1 1-1 1v1l1-1v-2l-1-1h-1zm-9-8v1h-1l-1-1 1 1v1l1-1h3v-1h-3zm6 5l1-2 1-2h-1v-1h-1l-1-1h-2 3v2h1v1l-1 1v1h-1l1 1zm70-38h-1v1l1-1zm13 114h1v-1h-1v1zm536 150l1 1-1-1zm4-1h-1v1h1v-1zm-5-1v-1l-1-1v-1 3h1zM576 385v-1l-1 1 1 1v-1zm6-1v-1 1zm-1 1l-1-1-1-1v2h2zm3-8v1h-1l1 1 1-1-1-1zm-6-2h-2v1l1-1h1zm6 0v-1h-1v1h1zm-10-1l-1-1v1h1zm-2-1l1-1h-2v1h1zm-288-14h1-1zm7-2h-1 1zm1 0v-1 1zm93 26v-2h-1v1l1 1zm51 398v-1h-1v1h1zm5-1v-1l-1 1h1zm-12-2l-1 1h2l-1-1zm2-2h-1v1h2v1h-1 1v1h-2v1l1 1h1v-1h1v-1h1l1-1v-1h1v-1h-3l-1 1-1-1zm1 0v-1h-1v1h1zm6-1h-1l1 1-1 1v1h-1v1l-1 1h1v1h1l1-1v1-1h-1 3v-1h1v-1h2v-1h-1 1l-1-1h-2l1 1h-2v-1h1-2v-1zm236-660v-1 1h1-1zm1-2h-1 1zm-2-2h-1v1h1v-1zm2 0h-1v-1l-1 1v1h2-1v-1l1 1v-1zm1 0l-1-1v1h1zM382 402v-1l-1 1h1zm904-60v-1 1zm-1 0v-1l-1 1h1zm2-1h-1v-1h-1l-1 1h3zm-907 31h-1 1zm-1-1l-1-1v1h1zm7 21l1-2h-1v2zm360-196v-2 2zm340 258h-1 1zm0-5v-1 1zM774 261h-1l-1-1 1 1h1zm-2-1zM381 374v1-1zm617 221v-1h1v-1l-1-1h-1v1l-1 1v1h2zM49 618v-1h-1v1h1zm303-251v-1h1-1v1zm13-1h1-2 1zm-3-2h-6v3h7v-1h1v-2h-2zm883 101h1-2l1 1v-1zm-508 8v-2h-1v2h1zm4-9v-1l-1 1h1zm-364-98v1-1zm615 135v-1l-1 1h1v1-1zM332 344v1h1v-1h-1zm3 1v-1h-1 1v1zm-1-1v-1 1zm51 69v-4h-1l-1 1h-2 1v3h-1l-1 1h4l1-1zm1-6h1l1-1h-1v1h-1zm-2-9zm0-2h1-1v1-1zm1-1v-1l-1 1 1 1v-1zm-15-31h-1 1zm1 0h-1 1zm0-2v1-1zm-3 6v1h1v-1h-1zm1-3zm-1 0h-1 1zm495-100h-1v1h-1v1l1 1h2l1 1v-1h2v-1l1-1h2l-1-1 2-2 1-1h-1v1h-1l-3 1h-3v1h-1zm125 335v-2l-1-1h-1l-1 1v1h1l1 1h1zm-52-50l1-1h-1v-1 2zM387 388v-2h-1v-1h-1v2h1v1h1zm-1-9h-1 1zm-2 0v-2h-1v2h1zm1-2h1-1v-1h-1v1h1zm-37 25v-1h-1 1l-1 1h1zm264-93h-2 1v1l1-1zm12-2h-1l-1 1 1 1h1v-2zm-9 1l1-1-1-1v2zm5-3h1v-1h-1l-1 1h-2v2l1 1 1-1 1-2zm10 2l2-1v-3h-1v2l-1 1v1h-1 1zm-18-2l1-1v-1h-2l1 1v1zm21-3h1v-1h1l-1-1v1h-1l-1 1v1h1v-1z' fill='#DFE4DA'/>
            <path className={this.props.selectedOption} d='M1415 679a6 6 0 11-2 11 7 7 0 01-11 4 7 7 0 01-7-7 6 6 0 010-2 4 4 0 014-6l4 2h1a7 7 0 016 1c1-2 3-3 5-3zm0-24a6 6 0 015 10h1a6 6 0 11-6 11l-4-4a6 6 0 01-2-10v-1c0-3 3-6 6-6zm-1054 8a7 7 0 110 14 7 7 0 010-14zm51-11c3 0 5 2 6 4a7 7 0 01-2 13l-4 1a7 7 0 01-7-9 7 7 0 017-9zm401-2a6 6 0 110 12 6 6 0 010-12zm-1-30l3 1a6 6 0 014 7 6 6 0 01-1 4 6 6 0 01-9 5 6 6 0 01-7-6 6 6 0 012-10 5 5 0 016-1h2zm-360 0c3 0 5 2 6 4a7 7 0 01-2 13l-4 1a7 7 0 01-7-9 7 7 0 017-9zm398-38a6 6 0 110 12 6 6 0 010-12zm98-13a6 6 0 110 13 6 6 0 010-13zm387-6a7 7 0 11-1 13h-1a7 7 0 111-13h1zm-89-65a6 6 0 016 8 6 6 0 11-12 0 6 6 0 016-8zm-763-2a7 7 0 110 14 7 7 0 010-14zm-156-31a7 7 0 110 14 7 7 0 010-14zm47-39a7 7 0 110 14 7 7 0 010-14zm548-12a6 6 0 11-1 12 6 6 0 11-2-1 6 6 0 013-11zm-14 3a6 6 0 110 12 6 6 0 010-12zm202-17c2 0 4 2 5 4a5 5 0 011 4l1 3a6 6 0 01-6 6 8 8 0 01-15-5c0-3 2-6 4-8a5 5 0 014-1 9 9 0 011 0c1-2 2-3 5-3zm137 0a6 6 0 014 11l-2 1a6 6 0 11-10-7l4-4 4-1zm-405-18a6 6 0 11-1 12 6 6 0 11-2-1 6 6 0 013-11zm-595 6zm24 0a7 7 0 110 15 7 7 0 010-15zm557-3a6 6 0 110 12 6 6 0 010-12zm-80-2a6 6 0 110 12 6 6 0 010-12zm181-6a6 6 0 110 12 6 6 0 010-12zm181-6c3 0 5 2 6 4a6 6 0 01-3 10 6 6 0 01-10-5l1-3c0-3 3-6 6-6zm-436-1a6 6 0 110 12 6 6 0 010-12zm389-5a6 6 0 110 12 6 6 0 010-12zm-81-9a6 6 0 110 12 6 6 0 010-12zm-324-18a6 6 0 110 12 6 6 0 010-12zm327-2a6 6 0 110 12 6 6 0 010-12zm-19-11a6 6 0 110 12 6 6 0 010-12zm105-8a6 6 0 110 12 6 6 0 010-12zm-213-4a6 6 0 110 12 6 6 0 010-12zm96-4a6 6 0 110 12 6 6 0 010-12zm-120-3a6 6 0 110 12 6 6 0 010-12zm-547-27c4 0 7 3 7 6h2a7 7 0 014 13l2 5a7 7 0 11-10 6 7 7 0 01-1-12l-2-4a7 7 0 01-2 0 6 6 0 11-6-10c1-2 3-4 6-4zm626 24a6 6 0 110 12 6 6 0 010-12zm113-2a6 6 0 11-1 12h-1a6 6 0 111-12h1zm-173-1a6 6 0 110 12 6 6 0 010-12zm458-4a6 6 0 014 11l-2 1a6 6 0 11-10-7l4-4 4-1zm-501-4c2 0 4 1 5 3a6 6 0 010 10 6 6 0 11-11-5v-2c0-3 3-6 6-6zm-16-3a6 6 0 110 12 6 6 0 010-12zm-46-3a6 6 0 110 12 6 6 0 010-12zm332-2a6 6 0 110 12 6 6 0 010-12zm-176-1a6 6 0 11-4 10l-4 2a6 6 0 114-10l4-2zm-647-10a6 6 0 11-1 12 6 6 0 010 3 6 6 0 01-6 7 6 6 0 01-4-1 6 6 0 01-1-11 6 6 0 016-2v-2c0-3 3-6 6-6zm578 3c2 0 4 1 4 3a6 6 0 01-3 11h-1a6 6 0 01-6-7 5 5 0 016-7zm-696-2a7 7 0 110 15 7 7 0 010-15zm839 3a6 6 0 110 12 6 6 0 010-12zm-635-43a6 6 0 11-4 11l-2 2-2 4 1 4a6 6 0 01-7 5 6 6 0 01-2 0v2a5 5 0 01-6 5l-2 3a4 4 0 01-2 5l1 3a7 7 0 11-8-7v-1a5 5 0 011-9v-1a7 7 0 113-14 5 5 0 0110-2l2-1 2-2a6 6 0 0110-4c1-2 3-3 5-3zm-119 25a7 7 0 016 10l2 4a7 7 0 11-13-3l-2-4c0-4 3-7 7-7zm-87-21a6 6 0 013 11 8 8 0 11-4 14 7 7 0 01-5 1c0 2-1 4-3 5a5 5 0 01-6 4 5 5 0 01-9-1 5 5 0 010-9l-1-3c0-2 1-4 3-5l-1-3a5 5 0 017-4 5 5 0 019 1 7 7 0 016 1 6 6 0 011-12zm153 15c2 0 4 2 5 4h1c2 0 5 2 5 5a5 5 0 11-8 8l-3 2a6 6 0 01-4-10l-2-3c0-4 2-6 6-6zm621 3a6 6 0 110 12 6 6 0 010-12zm213 0a5 5 0 110 11 5 5 0 010-11zm-917-9a7 7 0 016 11 7 7 0 01-8 5l-3 1a6 6 0 01-2-12 7 7 0 017-5zm1162 0c2 0 4 1 5 3a6 6 0 011 10 6 6 0 01-12-2v-1a6 6 0 010-2 6 6 0 016-8zm-1095-5a8 8 0 11-2 16 6 6 0 11-6-7 8 8 0 018-9zm390-13c3 0 6 3 6 6a6 6 0 016-3h1a7 7 0 012 0l4-1c2 0 5 2 6 4a7 7 0 11-2 7l-4 2a7 7 0 01-6 2 7 7 0 01-5-1v2a6 6 0 11-13-3 6 6 0 010-3 6 6 0 01-2-5c0-4 3-7 7-7zm-342-12a6 6 0 014 9 6 6 0 011 4 6 6 0 01-5 10 6 6 0 01-3 0 6 6 0 01-11 2v1a6 6 0 01-4 7 5 5 0 01-8-1c-2-1-4-3-4-5a5 5 0 118-8v-1a5 5 0 01-1-7 6 6 0 118-9 5 5 0 018 1l1 1c1-2 3-4 6-4zm-219 10l3 1h1a8 8 0 018 10 8 8 0 11-15 4 8 8 0 013-15zm680 6a6 6 0 110 12 6 6 0 010-12zm63-1a6 6 0 110 12 6 6 0 010-12zm-485-8a6 6 0 010 12 6 6 0 11-12-2l-1-3a6 6 0 019-5l4-2zm-74 2a6 6 0 11-1 11 6 6 0 011-11zm20 1v1a5 5 0 01-1 7l1 1a6 6 0 018-4h1a6 6 0 01-1-4 5 5 0 01-8-1zm81-5a6 6 0 110 12 6 6 0 010-12zm341-1a6 6 0 11-1 11 6 6 0 011-11zm-33-3a6 6 0 110 13 6 6 0 010-13zm508 1a6 6 0 110 12 6 6 0 010-12zm-939-1a6 6 0 11-4 10l-4 2a6 6 0 114-10l4-2zm506-41a6 6 0 015 10 6 6 0 01-2 9 6 6 0 01-9 2c0 2-2 3-3 4a8 8 0 11-14-4 6 6 0 01-6-1l-1 2a6 6 0 010 4 6 6 0 012 9l1 1a7 7 0 011 5h1a6 6 0 010-3 5 5 0 015-5 6 6 0 012 0 5 5 0 012 0 6 6 0 11-1 12 6 6 0 01-3 0v2a6 6 0 11-12 0h-1a7 7 0 01-7-8 7 7 0 011-5 6 6 0 01-1-3l-3-1a7 7 0 01-9 5l1 4a6 6 0 01-10 4h-1c-3 0-5-2-6-4a7 7 0 01-7-9 6 6 0 01-6 7 6 6 0 01-4-12 6 6 0 017-7 6 6 0 016 8 7 7 0 014-1h1c4 0 7 3 7 6l2 2h3a6 6 0 01-1-4 6 6 0 010-9h-1a6 6 0 01-2-13v-1a6 6 0 0111-3 6 6 0 013-1l4-1a6 6 0 016 8l2 3 1 1a7 7 0 019-4v-2a6 6 0 0110-6l4 2c1-2 3-3 5-3a6 6 0 012 0h2zm24 33a6 6 0 110 13 6 6 0 010-13zm-561 0a6 6 0 110 12h-1a6 6 0 111-12zm40-3a6 6 0 11-1 11 6 6 0 011-11zm14-3a6 6 0 110 12 6 6 0 010-12zm866-3c3 0 5 2 6 4a6 6 0 01-5 10c-3 0-5-2-6-4a6 6 0 015-10zm-384 1a6 6 0 110 13 6 6 0 010-13zm-387-10a6 6 0 016 7 6 6 0 11-12 0v-1c0-3 3-6 6-6zm-181 2a6 6 0 110 12 6 6 0 010-12zm583-1a6 6 0 110 13 6 6 0 010-13zm-536 0a6 6 0 110 12 6 6 0 010-12zm-110-22a5 5 0 015 6 5 5 0 01-1 8 5 5 0 012 5l1 4a8 8 0 11-16-2 5 5 0 012-5 8 8 0 014-15l3-1zm776 18a6 6 0 110 12 6 6 0 010-12zm-745-6c2 0 5 2 6 5a6 6 0 01-4 11c-3 0-6-2-7-5a6 6 0 015-11zm549 11l-1 1h1a6 6 0 010-1zm33-2v2l1-1 1-1h-2zm-504-14a6 6 0 11-1 11 6 6 0 011-11zm437-26l4 2h1a6 6 0 016 8l3-1a6 6 0 012 13l-2 5-3 3a7 7 0 11-9-7c0-3 2-5 4-6h1a6 6 0 010-3 6 6 0 01-6-2h-1a6 6 0 010-12zm-16 16l4 1a6 6 0 11-6 11 6 6 0 012-12zm345-15a6 6 0 110 12 6 6 0 010-12zm-231 0a6 6 0 110 12 6 6 0 010-12zm-48-2a6 6 0 110 12 6 6 0 010-12zm-565-5a6 6 0 110 12 6 6 0 010-12zm16-8a6 6 0 110 12 6 6 0 010-12zm660-2a6 6 0 110 12 6 6 0 010-12zm-95-8a6 6 0 110 12 6 6 0 010-12zm-24-23a6 6 0 110 12 6 6 0 010-12z' fill='#36A18B' opacity='.8'/>
          </g>
        </svg>
      </div>
    )
  }
}

export default Map

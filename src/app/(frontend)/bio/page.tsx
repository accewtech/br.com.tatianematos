import { Fragment } from 'react'
// GLOBAL CUSTOM COMPONENTS

import { Footer22 } from '@frontend/components/blocks/footer'

// import NextLink from '@frontend/components/reuseable/links/NextLink'

export default function Bio() {
  return (
    <Fragment>
      {/* ========== header section ========== */}

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <div className="img-mask mask-3">
          <img src="https://sandbox.elemisthemes.com/assets/img/photos/about17.jpg" alt="" />
        </div>

        {/* ========== service & projects section ========== */}
        <section className="wrapper bg-light"></section>
      </main>

      {/* ========== footer section ========== */}
      <Footer22 />
    </Fragment>
  )
}

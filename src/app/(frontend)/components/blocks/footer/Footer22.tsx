import SocialLinks from '@frontend/components/reuseable/SocialLinks'

export default function Footer22() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer>
      <div className="container py-7">
        <div className="d-md-flex align-items-center justify-content-between">
          <p className="mb-2 mb-lg-0">
            © {year} Estúdio de Pilates - Tatiane Matos. All rights reserved.
          </p>

          <SocialLinks className="nav social social-muted mb-0 text-md-end" />
        </div>
      </div>
    </footer>
  )
}

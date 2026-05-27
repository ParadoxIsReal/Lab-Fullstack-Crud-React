// components/OffCanvas/index.tsx
import { useNavigate, useLocation } from 'react-router-dom'

interface OffCanvasProps {
  show: boolean
  onClose: () => void
}

const menuItems = [
  { label: 'Home',     path: '/',        icon: 'bi-house-door' },
  { label: 'VSF Cursos',   path: '/VSFCursos',  icon: 'bi-journal-bookmark' },
]

export const OffCanvas = ({ show, onClose }: OffCanvasProps) => {
  const navigate  = useNavigate()
  const location  = useLocation()

  const handleNavigate = (path: string) => {
    navigate(path)
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      {show && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={onClose}
        />
      )}

      {/* Painel */}
      <div className={`offcanvas offcanvas-start ${show ? 'show' : ''}`}
           style={{ visibility: show ? 'visible' : 'hidden' }}>

        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button className="btn-close" onClick={onClose} />
        </div>

        <div className="offcanvas-body">
          <ul className="nav flex-column gap-1">
            {menuItems.map(item => (
              <li key={item.path} className="nav-item">
                <button
                  className={`btn w-100 text-start d-flex align-items-center gap-2
                    ${location.pathname === item.path
                      ? 'btn-primary'
                      : 'btn-outline-secondary'}`}
                  onClick={() => handleNavigate(item.path)}
                >
                  <i className={`bi ${item.icon}`} />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </>
  )
}
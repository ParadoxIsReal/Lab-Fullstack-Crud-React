// src/pages/VSFCursos/index.tsx
import { useState } from 'react'

type Tab = 'Trilhas' | 'Cursos' | 'Módulos' | 'Aulas' | 'Usuários' | 'Assinaturas' | 'Certificado'

const tabs: Tab[] = ['Trilhas', 'Cursos', 'Módulos', 'Aulas', 'Usuários', 'Assinaturas', 'Certificado']

export const VSFCursos = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Trilhas')

  return (
    <div className="container-fluid px-4 py-4">

      {/* Header principal */}
      <h1 className="fw-bold mb-4">VSF Cursos</h1>

      {/* Nav de tabs */}
      <ul className="nav nav-tabs mb-3">
        {tabs.map(tab => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Header da tab ativa */}
      <h2 className="fw-semibold">{activeTab}</h2>

    </div>
  )
}
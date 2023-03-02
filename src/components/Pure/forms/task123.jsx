import React from 'react'
import PropTypes from 'prop-types'
import { ComponentA } from '../../../models/componentA'

function TaskComponent123({ task }) {
  return (
    <div>
      <h2>
        Nombre: { task.name }
      </h2>
      <h2>
        Apellido: { task.lastName }
      </h2>
      <h2>
        Email: { task.email }
      </h2>
      <h2>
        Conectado: { task.connected ? 'Contacto en linea':'Contacto no disponible' }
      </h2>
    </div>
  )
}

TaskComponent123.propTypes = {
    task: PropTypes.instanceOf( ComponentA )

}

export default TaskComponent123


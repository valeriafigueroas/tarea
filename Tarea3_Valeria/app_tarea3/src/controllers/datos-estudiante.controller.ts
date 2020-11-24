import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {DatosEstudiante} from '../models';
import {DatosEstudianteRepository} from '../repositories';

export class DatosEstudianteController {
  constructor(
    @repository(DatosEstudianteRepository)
    public datosEstudianteRepository : DatosEstudianteRepository,
  ) {}

  @post('/datos-estudiantes', {
    responses: {
      '200': {
        description: 'DatosEstudiante model instance',
        content: {'application/json': {schema: getModelSchemaRef(DatosEstudiante)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DatosEstudiante, {
            title: 'NewDatosEstudiante',
            
          }),
        },
      },
    })
    datosEstudiante: DatosEstudiante,
  ): Promise<DatosEstudiante> {
    return this.datosEstudianteRepository.create(datosEstudiante);
  }

  @get('/datos-estudiantes/count', {
    responses: {
      '200': {
        description: 'DatosEstudiante model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(DatosEstudiante) where?: Where<DatosEstudiante>,
  ): Promise<Count> {
    return this.datosEstudianteRepository.count(where);
  }

  @get('/datos-estudiantes', {
    responses: {
      '200': {
        description: 'Array of DatosEstudiante model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(DatosEstudiante, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(DatosEstudiante) filter?: Filter<DatosEstudiante>,
  ): Promise<DatosEstudiante[]> {
    return this.datosEstudianteRepository.find(filter);
  }

  @patch('/datos-estudiantes', {
    responses: {
      '200': {
        description: 'DatosEstudiante PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DatosEstudiante, {partial: true}),
        },
      },
    })
    datosEstudiante: DatosEstudiante,
    @param.where(DatosEstudiante) where?: Where<DatosEstudiante>,
  ): Promise<Count> {
    return this.datosEstudianteRepository.updateAll(datosEstudiante, where);
  }

  @get('/datos-estudiantes/{id}', {
    responses: {
      '200': {
        description: 'DatosEstudiante model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(DatosEstudiante, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(DatosEstudiante, {exclude: 'where'}) filter?: FilterExcludingWhere<DatosEstudiante>
  ): Promise<DatosEstudiante> {
    return this.datosEstudianteRepository.findById(id, filter);
  }

  @patch('/datos-estudiantes/{id}', {
    responses: {
      '204': {
        description: 'DatosEstudiante PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DatosEstudiante, {partial: true}),
        },
      },
    })
    datosEstudiante: DatosEstudiante,
  ): Promise<void> {
    await this.datosEstudianteRepository.updateById(id, datosEstudiante);
  }

  @put('/datos-estudiantes/{id}', {
    responses: {
      '204': {
        description: 'DatosEstudiante PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() datosEstudiante: DatosEstudiante,
  ): Promise<void> {
    await this.datosEstudianteRepository.replaceById(id, datosEstudiante);
  }

  @del('/datos-estudiantes/{id}', {
    responses: {
      '204': {
        description: 'DatosEstudiante DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.datosEstudianteRepository.deleteById(id);
  }
}

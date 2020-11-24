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
import {Estudiantes} from '../models';
import {EstudiantesRepository} from '../repositories';

export class EstudiantesController {
  constructor(
    @repository(EstudiantesRepository)
    public estudiantesRepository : EstudiantesRepository,
  ) {}

  @post('/estudiantes', {
    responses: {
      '200': {
        description: 'Estudiantes model instance',
        content: {'application/json': {schema: getModelSchemaRef(Estudiantes)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estudiantes, {
            title: 'NewEstudiantes',
            
          }),
        },
      },
    })
    estudiantes: Estudiantes,
  ): Promise<Estudiantes> {
    return this.estudiantesRepository.create(estudiantes);
  }

  @get('/estudiantes/count', {
    responses: {
      '200': {
        description: 'Estudiantes model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Estudiantes) where?: Where<Estudiantes>,
  ): Promise<Count> {
    return this.estudiantesRepository.count(where);
  }

  @get('/estudiantes', {
    responses: {
      '200': {
        description: 'Array of Estudiantes model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Estudiantes, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Estudiantes) filter?: Filter<Estudiantes>,
  ): Promise<Estudiantes[]> {
    return this.estudiantesRepository.find(filter);
  }

  @patch('/estudiantes', {
    responses: {
      '200': {
        description: 'Estudiantes PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estudiantes, {partial: true}),
        },
      },
    })
    estudiantes: Estudiantes,
    @param.where(Estudiantes) where?: Where<Estudiantes>,
  ): Promise<Count> {
    return this.estudiantesRepository.updateAll(estudiantes, where);
  }

  @get('/estudiantes/{id}', {
    responses: {
      '200': {
        description: 'Estudiantes model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Estudiantes, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Estudiantes, {exclude: 'where'}) filter?: FilterExcludingWhere<Estudiantes>
  ): Promise<Estudiantes> {
    return this.estudiantesRepository.findById(id, filter);
  }

  @patch('/estudiantes/{id}', {
    responses: {
      '204': {
        description: 'Estudiantes PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estudiantes, {partial: true}),
        },
      },
    })
    estudiantes: Estudiantes,
  ): Promise<void> {
    await this.estudiantesRepository.updateById(id, estudiantes);
  }

  @put('/estudiantes/{id}', {
    responses: {
      '204': {
        description: 'Estudiantes PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() estudiantes: Estudiantes,
  ): Promise<void> {
    await this.estudiantesRepository.replaceById(id, estudiantes);
  }

  @del('/estudiantes/{id}', {
    responses: {
      '204': {
        description: 'Estudiantes DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.estudiantesRepository.deleteById(id);
  }
}

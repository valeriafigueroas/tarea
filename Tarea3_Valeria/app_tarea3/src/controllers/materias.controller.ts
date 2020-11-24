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
import {Materias} from '../models';
import {MateriasRepository} from '../repositories';

export class MateriasController {
  constructor(
    @repository(MateriasRepository)
    public materiasRepository : MateriasRepository,
  ) {}

  @post('/materias', {
    responses: {
      '200': {
        description: 'Materias model instance',
        content: {'application/json': {schema: getModelSchemaRef(Materias)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Materias, {
            title: 'NewMaterias',
            
          }),
        },
      },
    })
    materias: Materias,
  ): Promise<Materias> {
    return this.materiasRepository.create(materias);
  }

  @get('/materias/count', {
    responses: {
      '200': {
        description: 'Materias model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Materias) where?: Where<Materias>,
  ): Promise<Count> {
    return this.materiasRepository.count(where);
  }

  @get('/materias', {
    responses: {
      '200': {
        description: 'Array of Materias model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Materias, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Materias) filter?: Filter<Materias>,
  ): Promise<Materias[]> {
    return this.materiasRepository.find(filter);
  }

  @patch('/materias', {
    responses: {
      '200': {
        description: 'Materias PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Materias, {partial: true}),
        },
      },
    })
    materias: Materias,
    @param.where(Materias) where?: Where<Materias>,
  ): Promise<Count> {
    return this.materiasRepository.updateAll(materias, where);
  }

  @get('/materias/{id}', {
    responses: {
      '200': {
        description: 'Materias model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Materias, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Materias, {exclude: 'where'}) filter?: FilterExcludingWhere<Materias>
  ): Promise<Materias> {
    return this.materiasRepository.findById(id, filter);
  }

  @patch('/materias/{id}', {
    responses: {
      '204': {
        description: 'Materias PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Materias, {partial: true}),
        },
      },
    })
    materias: Materias,
  ): Promise<void> {
    await this.materiasRepository.updateById(id, materias);
  }

  @put('/materias/{id}', {
    responses: {
      '204': {
        description: 'Materias PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() materias: Materias,
  ): Promise<void> {
    await this.materiasRepository.replaceById(id, materias);
  }

  @del('/materias/{id}', {
    responses: {
      '204': {
        description: 'Materias DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.materiasRepository.deleteById(id);
  }
}

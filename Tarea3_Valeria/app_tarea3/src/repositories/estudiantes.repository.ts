import {DefaultCrudRepository} from '@loopback/repository';
import {Estudiantes, EstudiantesRelations} from '../models';
import {ConectDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EstudiantesRepository extends DefaultCrudRepository<
  Estudiantes,
  typeof Estudiantes.prototype.id,
  EstudiantesRelations
> {
  constructor(
    @inject('datasources.conect') dataSource: ConectDataSource,
  ) {
    super(Estudiantes, dataSource);
  }
}
